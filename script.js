document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector('.features-video video');
  const playBtn = document.querySelector('.features-video .play-btn');

  // Toggle play/pause on video click
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.style.display = 'none';
    } else {
      video.pause();
      playBtn.style.display = 'flex';
    }
  });

  // Also toggle play/pause on play button click
  playBtn.addEventListener('click', () => {
    video.play();
    playBtn.style.display = 'none';
  });

  // Show play button again when video ends
  video.addEventListener('ended', () => {
    playBtn.style.display = 'flex';
  });
});

const slides = document.querySelectorAll('.testimonials-middle');
const dots = document.querySelectorAll('.dots li');
let currentSlide = 0;
let interval;

function showSlide(newIndex) {
  if (newIndex === currentSlide) return;

  const direction = newIndex > currentSlide ? 'right' : 'left';
  const current = slides[currentSlide];
  const next = slides[newIndex];

  // Reset all slides
  slides.forEach(slide => {
    slide.classList.remove('active', 'slide-in-left', 'slide-in-right', 'animate-in');
  });

  // Setup next slide position
  next.classList.add(`slide-in-${direction}`);
  next.style.display = 'flex';

  setTimeout(() => {
    current.classList.remove('active');
    next.classList.add('active', 'animate-in');
    next.classList.remove(`slide-in-${direction}`);

    // Hide previous slide after transition
    setTimeout(() => {
      current.style.display = 'none';
      next.classList.remove('animate-in');
    }, 500);
  }, 10);

  // Update dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[newIndex].classList.add('active');

  currentSlide = newIndex;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval);
    showSlide(parseInt(dot.dataset.index));
    startAutoSlide();
  });
});

// Init
slides.forEach((slide, i) => {
  slide.style.display = i === 0 ? 'flex' : 'none';
  if (i === 0) slide.classList.add('active');
});

dots[0].classList.add('active');
startAutoSlide();

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const bars = document.querySelectorAll('.hamburger div');

  document.querySelector('.nav-links').classList.toggle('active');
  hamburger.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.slide-up');
  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.slide-right');
  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.slide-left');
  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.scale-in');
  elements.forEach(el => observer.observe(el));
});