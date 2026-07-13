(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    const sync = () => button.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
    sync();
    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
      sync();
    });
  });
})();
