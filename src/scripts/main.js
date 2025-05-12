document.addEventListener('DOMContentLoaded', () => {
  const startStatsAnimation = () => {
    const statsSection = document.querySelector('.about__stats');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__backInLeft');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    observer.observe(statsSection);
  };

  startStatsAnimation();
});
