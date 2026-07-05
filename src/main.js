if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  initTypingSubtitle();
  initPlayerPlaceholder();
  initDuolingoPlaceholder();
  initScrollReveal();
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);

  requestAnimationFrame(() => {
    document.body.classList.remove('is-loading');
  });
});


function initTypingSubtitle() {
  const el = document.getElementById('typedSubtitle');
  if (!el) return;

  const text = 'cs @ uwaterloo';
  const typeSpeed = 120; // ms per character
  const startDelay = 600; // wait for the page fade-in first

  let i = 0;
  const type = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, typeSpeed);
    }
  };

  setTimeout(type, startDelay);
}


function initPlayerPlaceholder() {
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!playBtn) return;

  const playIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  const pauseIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>`;

  let isPlaying = false;

  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
    playBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
  });

  prevBtn?.addEventListener('click', () => {
    console.log('prev track — placeholder, no real queue yet');
  });
  nextBtn?.addEventListener('click', () => {
    console.log('next track — placeholder, no real queue yet');
  });
}


function initDuolingoPlaceholder() {
  const streakEl = document.getElementById('duolingoStreak');
  if (!streakEl) return;

}


function initScrollReveal() {
  const sections = document.querySelectorAll('.section');
  if (!('IntersectionObserver' in window)) {
    sections.forEach((s) => s.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));
}