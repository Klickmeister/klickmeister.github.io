const observeElements = () => {

  const elementsToBeObserved = document.querySelectorAll('section ');
  elementsToBeObserved.forEach((element) => element.dataset.jsObserve = '');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.isIntersecting) {
        target.dataset.jsObserve = 'in-view';
      } else {
        target.dataset.jsObserve = '';
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const observedElements = document.querySelectorAll('[data-js-observe]');
  observedElements.forEach((el) => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
});
