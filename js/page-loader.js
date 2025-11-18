(() => {
  const initLoader = () => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    const hideLoader = () => {
      if (loader.classList.contains('is-hidden')) return;
      loader.classList.add('is-hidden');
      setTimeout(() => {
        loader.remove();
      }, 600);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader, { once: true });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoader, { once: true });
  } else {
    initLoader();
  }
})();

