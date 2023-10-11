const observeElements = () => {
  const elementsToBeObserved = document.querySelectorAll('.is-screwed');
  elementsToBeObserved.forEach((element) => { element.dataset.jsObserve = ''; });

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
  if (document.querySelector('[data-js-contact]') === null) return;
  const contactButton = document.querySelector('[data-js-contact]');
  const { who, where, tld } = contactButton.dataset;

  contactButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = `mailto:${who}@${where}.${tld}?subject=Anfrage via Website`;
  });
};

const showCookieBannerOnScroll = () => {
  const cookieBanner = document.querySelector('[data-js-cookie-banner]');
  if (cookieBanner === null) return;

  function onScroll() {
    if (window.scrollY > 100) {
      cookieBanner.show();
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
};

document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  invokeContact();
  showCookieBannerOnScroll();
});
