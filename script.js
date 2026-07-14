const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement && window.matchMedia('(max-width: 760px)').matches) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const gameRoot = document.getElementById('games');
  if (gameRoot && window.SnakeGame && !window.__snakeGame) {
    window.__snakeGame = new window.SnakeGame(gameRoot);
  }
});
