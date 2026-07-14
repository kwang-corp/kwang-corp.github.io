(function () {
  const THEME_KEY = 'loop-engineering-theme';
  const LANGUAGE_KEY = 'loop-engineering-language';

  const TEXT = {
    ko: {
      skip: '본문으로 건너뛰기',
      menu: '메뉴',
      theme: '테마',
      language: 'EN',
      nav: ['홈', '소개', '프로젝트', '경력', '연구', '연락처', '게임'],
      heroEyebrow: 'GitHub Pages 배포용',
      heroTitle: '지렁이 게임이 포함된 프로페셔널 포트폴리오',
      heroLede:
        '이 정적 사이트는 데스크톱과 모바일에서 모두 잘 보이는 프로페셔널 구조를 유지하면서, 별도의 게임 영역에서 지렁이 게임을 바로 즐길 수 있도록 설계되었습니다.',
      heroButtons: ['프로젝트 보기', '게임 열기'],
      focusTitle: '사이트 핵심',
      focusItems: ['반응형 포트폴리오 구조', '명확한 내비게이션과 섹션 앵커', '키보드와 터치에 친화적인 게임 조작'],
      aboutEyebrow: '소개',
      aboutTitle: '프로페셔널 요약',
      aboutCopy:
        '반응형 인터페이스, 읽기 쉬운 콘텐츠 구조, 그리고 포트폴리오의 기억점을 만드는 작은 인터랙션에 집중한 프런트엔드 작업입니다.',
      projectsEyebrow: '프로젝트',
      projectsTitle: '선정 작업',
      projectCards: [
        ['프로젝트 1', '명확한 섹션 앵커, 탄탄한 계층 구조, 모바일 우선 내비게이션 패턴을 갖춘 반응형 포트폴리오 레이아웃입니다.'],
        ['프로젝트 2', '키보드와 터치 입력을 지원하는 브라우저 지렁이 게임으로, 점수와 재시작, 일시정지를 제공합니다.'],
        ['프로젝트 3', '링크, 자산, 반응형 동작을 반복 검증할 수 있는 GitHub Pages 배포 흐름입니다.'],
      ],
      experienceEyebrow: '경력',
      experienceTitle: '업무 이력',
      experienceItems: [
        '프런트엔드 개발 - 반응형 포트폴리오 섹션을 설계하고, 콘텐츠 계층을 다듬고, GitHub Pages 친화적인 정적 전달 방식을 정리했습니다.',
        '인터랙티브 웹 프로젝트 - 키보드, WASD, 모바일 터치 조작이 가능한 지렁이 게임을 구현해 포트폴리오 시연 경험을 부드럽게 만들었습니다.',
        '포트폴리오 유지보수 - 사이트 구조를 정돈하고, 섹션 앵커를 검증하고, 배포 가능한 경로를 유지했습니다.',
      ],
      researchEyebrow: '연구',
      researchTitle: '연구 하이라이트',
      researchItems: [
        '반응형 인터페이스 연구 - 데스크톱, 태블릿, 모바일 구간에서 레이아웃 안정성을 확인했습니다.',
        '브라우저 게임 UX - 키보드와 터치 화면 모두에서 자연스럽게 느껴지는 조작 패턴을 정리했습니다.',
        '정적 배포 흐름 - GitHub Pages 호환 릴리스를 위한 반복 가능한 검증 루프를 문서화했습니다.',
      ],
      contactEyebrow: '연락처',
      contactTitle: '연결하기',
      contactItems: [
        '이메일 - 협업 문의, 프로젝트 질문, 포트폴리오 피드백에 사용하는 채널입니다.',
        'GitHub - 소스 코드, 배포 이력, 반복 기록을 관리하는 프로필입니다.',
        'LinkedIn - 준비가 되면 경력 요약과 타임라인을 공유할 수 있는 프로필입니다.',
      ],
      gamesEyebrow: '게임',
      gamesTitle: '지렁이 게임',
      gamesCopy:
        '방향키, WASD, 스와이프, 또는 화면 버튼으로 조작할 수 있습니다. 시작 버튼으로 게임을 시작하고, 일시정지와 재시작, 점수와 최고 점수 기록을 지원합니다.',
      stateReady: '준비됨',
      score: '점수',
      highScore: '최고 점수',
      level: '난이도',
      start: '시작',
      pause: '일시정지',
      restart: '다시 시작',
      resume: '재개',
      controlHelp:
        '즉시 반대 방향 전환은 막혀 있습니다. Games 탭을 다시 열어도 게임 루프가 중복되지 않습니다.',
      padUp: '위',
      padLeft: '왼쪽',
      padCenter: '이동',
      padRight: '오른쪽',
      padDown: '아래',
      overlayStart: '시작 버튼을 눌러 시작하세요',
      overlayPaused: '일시정지됨',
      overlayHint: '화살표나 스와이프로 방향을 바꾸세요',
      overlayGameOver: '게임 오버',
      overlayCleared: '보드를 모두 채웠습니다',
      navAria: '기본 탐색',
      gameAria: '모바일 방향 조작',
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      theme: 'Theme',
      language: 'KR',
      nav: ['Home', 'About', 'Projects', 'Experience', 'Research', 'Contact', 'Games'],
      heroEyebrow: 'GitHub Pages ready',
      heroTitle: 'A professional portfolio with a built-in snake game.',
      heroLede:
        'This static site keeps the professional structure visible on desktop and mobile while reserving a dedicated games area for the playable snake experience.',
      heroButtons: ['View Projects', 'Open Games'],
      focusTitle: 'Site focus',
      focusItems: ['Responsive portfolio structure', 'Clear navigation and section anchors', 'Keyboard and touch friendly game controls'],
      aboutEyebrow: 'About',
      aboutTitle: 'Professional summary',
      aboutCopy:
        'Product-minded frontend work focused on responsive interfaces, approachable content structure, and small interactive experiences that make a portfolio feel memorable.',
      projectsEyebrow: 'Projects',
      projectsTitle: 'Selected work',
      projectCards: [
        ['Project One', 'Responsive portfolio layout with clear section anchors, strong hierarchy, and a mobile-first navigation pattern.'],
        ['Project Two', 'Browser-based snake game built for keyboard and touch input, featuring scoring, restart flow, and pause support.'],
        ['Project Three', 'Static GitHub Pages deployment workflow with reusable checks for links, assets, and responsive behavior.'],
      ],
      experienceEyebrow: 'Experience',
      experienceTitle: 'Work history',
      experienceItems: [
        'Frontend developer - Designed responsive portfolio sections, polished content hierarchy, and GitHub Pages friendly static delivery.',
        'Interactive web project - Implemented a snake game with keyboard, WASD, and mobile touch controls for a smoother portfolio demo.',
        'Portfolio maintenance - Kept the site structure tidy, verified section anchors, and maintained the deployment-ready build path.',
      ],
      researchEyebrow: 'Research',
      researchTitle: 'Research highlights',
      researchItems: [
        'Responsive interface study - Reviewed layout stability across desktop, tablet, and mobile breakpoints.',
        'Browser-based game UX - Organized control patterns so the game feels natural on both keyboards and touch screens.',
        'Static deployment workflow - Documented a repeatable verification loop for GitHub Pages-compatible releases.',
      ],
      contactEyebrow: 'Contact',
      contactTitle: 'Get in touch',
      contactItems: [
        'Email - Use this channel for collaboration questions, project inquiries, and portfolio feedback.',
        'GitHub - Source code, deployment history, and iteration notes are maintained through this profile.',
        'LinkedIn - A professional summary and career timeline can be shared through this profile when ready.',
      ],
      gamesEyebrow: 'Games',
      gamesTitle: 'Snake game',
      gamesCopy:
        'Play with arrow keys, WASD, swipe gestures, or the on-screen controls. The game starts with the Start button and supports pause, restart, score tracking, and high score storage.',
      stateReady: 'Ready',
      score: 'Score',
      highScore: 'High score',
      level: 'Level',
      start: 'Start',
      pause: 'Pause',
      restart: 'Restart',
      resume: 'Resume',
      controlHelp:
        'Avoid instant reverse turns. The board prevents duplicate game loops when the Games tab is revisited.',
      padUp: 'Up',
      padLeft: 'Left',
      padCenter: 'Move',
      padRight: 'Right',
      padDown: 'Down',
      overlayStart: 'Press Start to begin',
      overlayPaused: 'Paused',
      overlayHint: 'Swipe or tap arrows to steer',
      overlayGameOver: 'Game over',
      overlayCleared: 'You cleared the board!',
      navAria: 'Primary',
      gameAria: 'Mobile directional controls',
    },
  };

  const doc = document.documentElement;
  const skipLink = document.querySelector('.skip-link');
  const navToggle = document.querySelector('.nav-toggle');
  const themeToggle = document.querySelector('.theme-toggle');
  const langToggle = document.querySelector('.lang-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = siteNav ? Array.from(siteNav.querySelectorAll('a')) : [];
  const heroEyebrow = document.querySelector('#home .hero-copy .eyebrow');
  const heroTitle = document.querySelector('#home h1');
  const heroLede = document.querySelector('#home .lede');
  const heroButtons = Array.from(document.querySelectorAll('#home .hero-actions .button'));
  const siteFocusHeading = document.querySelector('#home .hero-aside .eyebrow');
  const focusItems = Array.from(document.querySelectorAll('#home .focus-list li'));
  const aboutEyebrow = document.querySelector('#about .eyebrow');
  const aboutTitle = document.querySelector('#about h2');
  const aboutCopy = document.querySelector('#about .section-copy');
  const projectsEyebrow = document.querySelector('#projects .eyebrow');
  const projectsTitle = document.querySelector('#projects h2');
  const projectTiles = Array.from(document.querySelectorAll('#projects .tile'));
  const experienceEyebrow = document.querySelector('#experience .eyebrow');
  const experienceTitle = document.querySelector('#experience h2');
  const experienceItems = Array.from(document.querySelectorAll('#experience li'));
  const researchEyebrow = document.querySelector('#research .eyebrow');
  const researchTitle = document.querySelector('#research h2');
  const researchItems = Array.from(document.querySelectorAll('#research li'));
  const contactEyebrow = document.querySelector('#contact .eyebrow');
  const contactTitle = document.querySelector('#contact h2');
  const contactItems = Array.from(document.querySelectorAll('#contact li'));
  const gamesEyebrow = document.querySelector('#games .eyebrow');
  const gamesTitle = document.querySelector('#games h2');
  const gamesCopy = document.querySelector('#games .section-copy');
  const statePill = document.querySelector('#game-state-pill');
  const scoreLabel = document.querySelector('#games .hud [data-hud="score"]');
  const highScoreLabel = document.querySelector('#games .hud [data-hud="high-score"]');
  const levelLabel = document.querySelector('#games .hud [data-hud="level"]');
  const controlHelp = document.querySelector('#games .control-help');
  const touchPad = document.querySelector('#games .touch-pad');
  const padButtons = Array.from(document.querySelectorAll('#games .pad-button'));
  const controlButtons = Array.from(document.querySelectorAll('#games .control-button'));

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Ignore storage failures in restricted environments.
    }
  }

  function applyTheme(theme) {
    const nextTheme = theme === 'dark' ? 'dark' : 'light';
    doc.dataset.theme = nextTheme;
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(nextTheme === 'dark'));
    }
  }

  function setNodeText(node, value) {
    if (node) {
      node.textContent = value;
    }
  }

  function setListItems(items, values) {
    items.forEach((item, index) => {
      if (values[index]) {
        item.textContent = values[index];
      }
    });
  }

  function translateGame(copy) {
    setNodeText(scoreLabel, copy.score);
    setNodeText(highScoreLabel, copy.highScore);
    setNodeText(levelLabel, copy.level);
    setNodeText(controlHelp, copy.controlHelp);
    setNodeText(statePill, copy.stateReady);
    setNodeText(gamesEyebrow, copy.gamesEyebrow);
    setNodeText(gamesTitle, copy.gamesTitle);
    setNodeText(gamesCopy, copy.gamesCopy);

    padButtons.forEach((button) => {
      const direction = button.dataset.direction;
      if (direction === 'up') button.textContent = copy.padUp;
      if (direction === 'left') button.textContent = copy.padLeft;
      if (direction === 'right') button.textContent = copy.padRight;
      if (direction === 'down') button.textContent = copy.padDown;
      if (button.classList.contains('center')) button.textContent = copy.padCenter;
    });

    controlButtons.forEach((button) => {
      const action = button.dataset.action;
      if (action === 'start') button.textContent = copy.start;
      if (action === 'pause') button.textContent = copy.pause;
      if (action === 'restart') button.textContent = copy.restart;
    });

    if (window.__snakeGame && typeof window.__snakeGame.setLocale === 'function') {
      window.__snakeGame.setLocale(doc.lang === 'en' ? 'en' : 'ko');
    }
  }

  function applyLanguage(lang) {
    const nextLang = TEXT[lang] ? lang : 'ko';
    const copy = TEXT[nextLang];
    doc.lang = nextLang;

    setNodeText(skipLink, copy.skip);
    setNodeText(navToggle, copy.menu);
    setNodeText(themeToggle, copy.theme);
    setNodeText(langToggle, copy.language);
    if (langToggle) {
      langToggle.setAttribute('aria-pressed', String(nextLang === 'en'));
    }

    navLinks.forEach((link, index) => {
      if (copy.nav[index]) {
        link.textContent = copy.nav[index];
      }
    });

    setNodeText(heroEyebrow, copy.heroEyebrow);
    setNodeText(heroTitle, copy.heroTitle);
    setNodeText(heroLede, copy.heroLede);
    heroButtons.forEach((button, index) => {
      if (copy.heroButtons[index]) {
        button.textContent = copy.heroButtons[index];
      }
    });

    setNodeText(siteFocusHeading, copy.focusTitle);
    setListItems(focusItems, copy.focusItems);

    setNodeText(aboutEyebrow, copy.aboutEyebrow);
    setNodeText(aboutTitle, copy.aboutTitle);
    setNodeText(aboutCopy, copy.aboutCopy);

    setNodeText(projectsEyebrow, copy.projectsEyebrow);
    setNodeText(projectsTitle, copy.projectsTitle);
    projectTiles.forEach((tile, index) => {
      const heading = tile.querySelector('h3');
      const text = tile.querySelector('p');
      if (copy.projectCards[index]) {
        if (heading) heading.textContent = copy.projectCards[index][0];
        if (text) text.textContent = copy.projectCards[index][1];
      }
    });

    setNodeText(experienceEyebrow, copy.experienceEyebrow);
    setNodeText(experienceTitle, copy.experienceTitle);
    setListItems(experienceItems, copy.experienceItems);

    setNodeText(researchEyebrow, copy.researchEyebrow);
    setNodeText(researchTitle, copy.researchTitle);
    setListItems(researchItems, copy.researchItems);

    setNodeText(contactEyebrow, copy.contactEyebrow);
    setNodeText(contactTitle, copy.contactTitle);
    setListItems(contactItems, copy.contactItems);

    translateGame(copy);
    if (siteNav) {
      siteNav.setAttribute('aria-label', copy.navAria);
    }
    if (touchPad) {
      touchPad.setAttribute('aria-label', copy.gameAria);
    }
    writeStorage(LANGUAGE_KEY, nextLang);
  }

  function syncGameLocale() {
    if (window.__snakeGame && typeof window.__snakeGame.setLocale === 'function') {
      window.__snakeGame.setLocale(doc.lang === 'en' ? 'en' : 'ko');
    }
  }

  function ensureSnakeGame() {
    const gameRoot = document.getElementById('games');
    if (gameRoot && window.SnakeGame && !window.__snakeGame) {
      window.__snakeGame = new window.SnakeGame(gameRoot);
    }
    syncGameLocale();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement && window.matchMedia('(max-width: 760px)').matches) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const storedTheme = readStorage(THEME_KEY);
  applyTheme(storedTheme || 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = doc.dataset.theme === 'dark' ? 'light' : 'dark';
      writeStorage(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  }

  const storedLanguage = readStorage(LANGUAGE_KEY);
  applyLanguage(storedLanguage || 'ko');

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLanguage = doc.lang === 'en' ? 'ko' : 'en';
      applyLanguage(nextLanguage);
      syncGameLocale();
    });
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', ensureSnakeGame, { once: true });
  } else {
    ensureSnakeGame();
  }
})();
