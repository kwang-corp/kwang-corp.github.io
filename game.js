(function () {
  const GRID_SIZE = 24;
  const HIGH_SCORE_KEY = 'loop-engineering-snake-high-score';
  const STEP_DELAY_START = 140;
  const STEP_DELAY_MIN = 80;
  const STEP_DELAY_STEP = 10;
  const GAME_COPY = {
    ko: {
      ready: '준비됨',
      running: '실행 중',
      paused: '일시정지',
      gameOver: '게임 오버',
      cleared: '보드를 모두 채웠습니다!',
      pressStart: '시작 버튼을 눌러 시작하세요',
      pauseMessage: '일시정지됨',
      hint: '화살표나 버튼을 눌러 방향을 바꾸세요',
      start: '시작',
      pause: '일시정지',
      resume: '재개',
    },
    en: {
      ready: 'Ready',
      running: 'Running',
      paused: 'Paused',
      gameOver: 'Game over',
      cleared: 'You cleared the board!',
      pressStart: 'Press Start to begin',
      pauseMessage: 'Paused',
      hint: 'Swipe or tap arrows to steer',
      start: 'Start',
      pause: 'Pause',
      resume: 'Resume',
    },
  };

  function sameCell(a, b) {
    return a.x === b.x && a.y === b.y;
  }

  function isReverse(current, next) {
    return current.x + next.x === 0 && current.y + next.y === 0;
  }

  class SnakeGame {
    constructor(root) {
      if (root.dataset.snakeInitialized === 'true') {
        return;
      }

      this.root = root;
      this.canvas = root.querySelector('#snake-canvas');
      this.ctx = this.canvas.getContext('2d');
      this.statePill = root.querySelector('#game-state-pill');
      this.scoreValue = root.querySelector('#score-value');
      this.highScoreValue = root.querySelector('#high-score-value');
      this.levelValue = root.querySelector('#level-value');
      this.overlay = root.querySelector('#game-overlay');
      this.startButton = root.querySelector('[data-action="start"]');
      this.pauseButton = root.querySelector('[data-action="pause"]');
      this.restartButton = root.querySelector('[data-action="restart"]');
      this.directionButtons = Array.from(root.querySelectorAll('[data-direction]'));

      this.gridSize = GRID_SIZE;
      this.highScore = 0;
      this.running = false;
      this.gameOver = false;
      this.score = 0;
      this.level = 1;
      this.stepDelay = STEP_DELAY_START;
      this.lastStepAt = 0;
      this.loopId = 0;
      this.resizeObserver = null;
      this.touchStart = null;

      this.direction = { x: 1, y: 0 };
      this.nextDirection = { x: 1, y: 0 };
      this.snake = [];
      this.food = { x: 0, y: 0 };
      this.boardSize = 0;
      this.cellSize = 0;
      this.devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
      this.locale = 'ko';
      this.stateKey = 'ready';
      this.overlayKey = 'pressStart';

      this.onKeyDown = this.onKeyDown.bind(this);
      this.onResize = this.onResize.bind(this);
      this.animate = this.animate.bind(this);
      this.onTouchStart = this.onTouchStart.bind(this);
      this.onTouchEnd = this.onTouchEnd.bind(this);

      this.loadHighScore();
      this.bindEvents();
      this.reset({ keepOverlay: true });
      this.resizeCanvas();
      this.render();
      this.loopId = window.requestAnimationFrame(this.animate);
      this.root.dataset.snakeInitialized = 'true';
    }

    t(key) {
      return (GAME_COPY[this.locale] && GAME_COPY[this.locale][key]) || GAME_COPY.en[key] || key;
    }

    setLocale(locale) {
      this.locale = GAME_COPY[locale] ? locale : 'ko';
      this.updateButtonState();
      this.updateHud();
      if (this.overlay && !this.overlay.classList.contains('is-hidden') && this.overlayKey) {
        this.overlay.textContent = this.t(this.overlayKey);
      }
      this.setState(this.stateKey);
    }

    bindEvents() {
      window.addEventListener('keydown', this.onKeyDown, { passive: false });
      window.addEventListener('resize', this.onResize);

      if ('ResizeObserver' in window) {
        this.resizeObserver = new ResizeObserver(() => this.resizeCanvas());
        this.resizeObserver.observe(this.canvas);
      }

      this.canvas.addEventListener('touchstart', this.onTouchStart, { passive: false });
      this.canvas.addEventListener('touchend', this.onTouchEnd, { passive: false });

      this.startButton?.addEventListener('click', () => this.start());
      this.pauseButton?.addEventListener('click', () => this.togglePause());
      this.restartButton?.addEventListener('click', () => this.restart());

      this.directionButtons.forEach((button) => {
        button.addEventListener('pointerdown', (event) => {
          event.preventDefault();
          const direction = button.dataset.direction;
          this.changeDirection(direction);
        });

        button.addEventListener('click', () => {
          const direction = button.dataset.direction;
          this.changeDirection(direction);
        });
      });
    }

    loadHighScore() {
      try {
        const stored = window.localStorage.getItem(HIGH_SCORE_KEY);
        this.highScore = stored ? Number(stored) || 0 : 0;
      } catch {
        this.highScore = 0;
      }
      this.updateHud();
    }

    saveHighScore() {
      try {
        window.localStorage.setItem(HIGH_SCORE_KEY, String(this.highScore));
      } catch {
        // Ignore storage failures in restricted environments.
      }
    }

    reset({ keepOverlay = false } = {}) {
      const startX = Math.floor(this.gridSize / 2);
      const startY = Math.floor(this.gridSize / 2);

      this.snake = [
        { x: startX, y: startY },
        { x: startX - 1, y: startY },
        { x: startX - 2, y: startY },
      ];
      this.direction = { x: 1, y: 0 };
      this.nextDirection = { x: 1, y: 0 };
      this.score = 0;
      this.level = 1;
      this.stepDelay = STEP_DELAY_START;
      this.gameOver = false;
      this.running = false;
      this.food = this.spawnFood();
      this.lastStepAt = 0;

      this.setState('ready');
      this.updateHud();
      this.syncStateAttributes();
      if (!keepOverlay) {
        this.showOverlay('pressStart');
      }
    }

    start() {
      if (this.gameOver) {
        this.reset({ keepOverlay: true });
      }

      this.running = true;
      this.gameOver = false;
      this.lastStepAt = performance.now();
      this.hideOverlay();
      this.setState('running');
      this.updateButtonState();
      this.syncStateAttributes();
    }

    togglePause() {
      if (this.gameOver) {
        this.start();
        return;
      }

      if (this.running) {
        this.running = false;
        this.setState('paused');
        this.showOverlay('pauseMessage');
      } else {
        this.start();
        return;
      }

      this.updateButtonState();
      this.syncStateAttributes();
    }

    restart() {
      this.reset({ keepOverlay: false });
      this.start();
    }

    changeDirection(directionName) {
      const next = this.directionFromName(directionName);
      if (!next) {
        return;
      }

      const current = this.nextDirection;
      if (this.snake.length > 1 && isReverse(current, next)) {
        return;
      }

      this.nextDirection = next;
      this.showOverlayHint();
    }

    directionFromName(directionName) {
      switch (directionName) {
        case 'up':
          return { x: 0, y: -1 };
        case 'down':
          return { x: 0, y: 1 };
        case 'left':
          return { x: -1, y: 0 };
        case 'right':
          return { x: 1, y: 0 };
        default:
          return null;
      }
    }

    onKeyDown(event) {
      const mapping = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        W: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        S: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        A: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
        D: { x: 1, y: 0 },
        ' ': null,
        Spacebar: null,
      };

      if (Object.prototype.hasOwnProperty.call(mapping, event.key)) {
        event.preventDefault();

        if (event.key === ' ' || event.key === 'Spacebar') {
          this.togglePause();
          return;
        }

        const next = mapping[event.key];
        if (next) {
          this.setKeyboardDirection(next);
        }
      }
    }

    setKeyboardDirection(next) {
      const current = this.nextDirection;
      if (this.snake.length > 1 && isReverse(current, next)) {
        return;
      }

      this.nextDirection = next;
    }

    onTouchStart(event) {
      if (!event.changedTouches || event.changedTouches.length === 0) {
        return;
      }

      const touch = event.changedTouches[0];
      this.touchStart = { x: touch.clientX, y: touch.clientY };
      event.preventDefault();
    }

    onTouchEnd(event) {
      if (!this.touchStart || !event.changedTouches || event.changedTouches.length === 0) {
        return;
      }

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - this.touchStart.x;
      const deltaY = touch.clientY - this.touchStart.y;
      const distance = Math.max(Math.abs(deltaX), Math.abs(deltaY));

      if (distance < 24) {
        this.touchStart = null;
        return;
      }

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        this.changeDirection(deltaX > 0 ? 'right' : 'left');
      } else {
        this.changeDirection(deltaY > 0 ? 'down' : 'up');
      }

      this.touchStart = null;
      event.preventDefault();
    }

    onResize() {
      this.resizeCanvas();
      this.render();
    }

    resizeCanvas() {
      const rect = this.canvas.getBoundingClientRect();
      const size = Math.max(280, Math.floor(rect.width || 480));

      this.boardSize = size;
      this.cellSize = size / this.gridSize;

      this.canvas.width = Math.round(size * this.devicePixelRatio);
      this.canvas.height = Math.round(size * this.devicePixelRatio);
      this.ctx.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, 0, 0);
    }

    animate(now) {
      if (this.running && now - this.lastStepAt >= this.stepDelay) {
        this.lastStepAt = now;
        this.step();
      }

      this.render();
      this.loopId = window.requestAnimationFrame(this.animate);
    }

    step() {
      this.direction = this.nextDirection;
      const head = this.snake[0];
      const nextHead = {
        x: head.x + this.direction.x,
        y: head.y + this.direction.y,
      };

      if (
        nextHead.x < 0 ||
        nextHead.y < 0 ||
        nextHead.x >= this.gridSize ||
        nextHead.y >= this.gridSize ||
        this.snake.some((segment) => sameCell(segment, nextHead))
      ) {
        this.finishGame();
        return;
      }

      this.snake.unshift(nextHead);

      if (sameCell(nextHead, this.food)) {
        this.score += 1;
        this.updateLevel();
        this.food = this.spawnFood();
        if (!this.food) {
          this.finishGame('cleared');
          return;
        }
      } else {
        this.snake.pop();
      }

      if (this.score > this.highScore) {
        this.highScore = this.score;
        this.saveHighScore();
      }

      this.updateHud();
      this.syncStateAttributes();
    }

    updateLevel() {
      this.level = Math.max(1, Math.floor(this.score / 10) + 1);
      this.stepDelay = Math.max(STEP_DELAY_MIN, STEP_DELAY_START - (this.level - 1) * STEP_DELAY_STEP);
    }

    finishGame(message = 'gameOver') {
      this.running = false;
      this.gameOver = true;
      this.setState('gameOver');
      this.updateButtonState();
      this.showOverlay(message);
      this.updateHud();
      this.syncStateAttributes();
    }

    spawnFood() {
      const available = [];
      for (let y = 0; y < this.gridSize; y += 1) {
        for (let x = 0; x < this.gridSize; x += 1) {
          const occupied = this.snake.some((segment) => segment.x === x && segment.y === y);
          if (!occupied) {
            available.push({ x, y });
          }
        }
      }

      if (available.length === 0) {
        return null;
      }

      return available[Math.floor(Math.random() * available.length)];
    }

    updateHud() {
      if (this.scoreValue) {
        this.scoreValue.textContent = String(this.score);
      }

      if (this.highScoreValue) {
        this.highScoreValue.textContent = String(this.highScore);
      }

      if (this.levelValue) {
        this.levelValue.textContent = String(this.level);
      }
    }

    syncStateAttributes() {
      const head = this.snake[0] || { x: -1, y: -1 };
      this.root.dataset.score = String(this.score);
      this.root.dataset.highScore = String(this.highScore);
      this.root.dataset.level = String(this.level);
      this.root.dataset.running = String(this.running);
      this.root.dataset.gameOver = String(this.gameOver);
      this.root.dataset.headX = String(head.x);
      this.root.dataset.headY = String(head.y);
      this.root.dataset.foodX = String(this.food?.x ?? -1);
      this.root.dataset.foodY = String(this.food?.y ?? -1);
      this.root.dataset.directionX = String(this.direction.x);
      this.root.dataset.directionY = String(this.direction.y);
      this.root.dataset.nextDirectionX = String(this.nextDirection.x);
      this.root.dataset.nextDirectionY = String(this.nextDirection.y);
    }

    updateButtonState() {
      if (this.startButton) {
        this.startButton.textContent = this.running ? this.t('running') : this.t('start');
      }

      if (this.pauseButton) {
        this.pauseButton.textContent = this.running ? this.t('pause') : this.t('resume');
      }
    }

    setState(labelKey) {
      this.stateKey = labelKey;
      if (this.statePill) {
        this.statePill.textContent = this.t(labelKey);
      }
      this.updateButtonState();
    }

    showOverlay(messageKey) {
      this.overlayKey = messageKey;
      if (!this.overlay) {
        return;
      }

      this.overlay.textContent = this.t(messageKey);
      this.overlay.classList.remove('is-hidden');
    }

    hideOverlay() {
      if (!this.overlay) {
        return;
      }

      this.overlay.textContent = '';
      this.overlayKey = '';
      this.overlay.classList.add('is-hidden');
    }

    showOverlayHint() {
      if (!this.running || !this.overlay || this.overlay.classList.contains('is-hidden')) {
        return;
      }

      this.showOverlay('hint');
    }

    render() {
      const ctx = this.ctx;
      const size = this.boardSize || 480;
      const cell = this.cellSize || size / this.gridSize;

      ctx.clearRect(0, 0, size, size);
      this.drawBackground(ctx, size);
      this.drawGrid(ctx, size, cell);
      this.drawFood(ctx, cell);
      this.drawSnake(ctx, cell);
      this.drawCenterGlow(ctx, size);
    }

    drawBackground(ctx, size) {
      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, '#102133');
      gradient.addColorStop(1, '#18324d');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }

    drawGrid(ctx, size, cell) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 1; i < this.gridSize; i += 1) {
        const offset = Math.round(i * cell) + 0.5;
        ctx.beginPath();
        ctx.moveTo(offset, 0);
        ctx.lineTo(offset, size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, offset);
        ctx.lineTo(size, offset);
        ctx.stroke();
      }
      ctx.restore();
    }

    drawSnake(ctx, cell) {
      this.snake.forEach((segment, index) => {
        const x = segment.x * cell + 1;
        const y = segment.y * cell + 1;
        const w = cell - 2;
        const h = cell - 2;
        const round = Math.max(4, cell * 0.28);

        ctx.save();
        ctx.fillStyle = index === 0 ? '#7dd3fc' : index % 2 === 0 ? '#34d399' : '#16a34a';
        ctx.shadowColor = index === 0 ? 'rgba(125, 211, 252, 0.4)' : 'rgba(52, 211, 153, 0.22)';
        ctx.shadowBlur = index === 0 ? 10 : 4;
        this.roundRect(ctx, x, y, w, h, round);
        ctx.fill();
        ctx.restore();
      });
    }

    drawFood(ctx, cell) {
      if (!this.food) {
        return;
      }

      const x = this.food.x * cell + cell * 0.18;
      const y = this.food.y * cell + cell * 0.18;
      const size = cell * 0.64;

      ctx.save();
      ctx.fillStyle = '#fb7185';
      ctx.shadowColor = 'rgba(251, 113, 133, 0.5)';
      ctx.shadowBlur = 12;
      this.roundRect(ctx, x, y, size, size, Math.max(4, cell * 0.18));
      ctx.fill();
      ctx.restore();
    }

    drawCenterGlow(ctx, size) {
      const gradient = ctx.createRadialGradient(size / 2, size / 2, size * 0.12, size / 2, size / 2, size * 0.65);
      gradient.addColorStop(0, 'rgba(125, 211, 252, 0.05)');
      gradient.addColorStop(1, 'rgba(125, 211, 252, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }

    roundRect(ctx, x, y, w, h, r) {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
    }
  }

  window.SnakeGame = SnakeGame;
})();
