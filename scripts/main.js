const observeElements = () => {

  const elementsToBeObserved = document.querySelectorAll('.is-screwed');
  elementsToBeObserved.forEach((element) => element.dataset.jsObserve = '');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.isIntersecting) {
        target.dataset.jsObserve = 'in-view';
      } else {
        // target.dataset.jsObserve = '';
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const observedElements = document.querySelectorAll('[data-js-observe]');
  observedElements.forEach((el) => observer.observe(el));
};

const invokeContact = () => {
  if(document.querySelector('[data-js-contact]') === null) return;
  const contactButton = document.querySelector('[data-js-contact]');
  const who = contactButton.dataset.who;
  const where = contactButton.dataset.where;
  const tld = contactButton.dataset.tld;
  
  contactButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = `mailto:${who}@${where}.${tld}?subject=Anfrage via Website`;
  });

};

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  invokeContact();
});
