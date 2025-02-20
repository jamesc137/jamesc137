document.addEventListener('DOMContentLoaded', () => {
  function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.querySelector('.toggle-button').textContent = isDark ? '☼' : '⏾';
  }

  document.querySelector('.toggle-button').addEventListener('click', toggleDarkMode);

  (function() {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      document.querySelector('.toggle-button').textContent = '☼';
    }
  })();
});
