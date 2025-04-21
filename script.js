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

  
  playBtn.addEventListener('click', () => {
    video.play();
    playBtn.style.display = 'none';
  });

  
  video.addEventListener('ended', () => {
    playBtn.style.display = 'flex';
  });
});

const slides = document.querySelectorAll('.testimonials-middle');
const dots = document.querySelectorAll('.dots li');
let currentSlide = 0;
let interval;


slides[0].classList.add('active');
slides[0].style.display = 'flex';
dots[0].classList.add('active');

function showSlide(newIndex) {
  if (newIndex === currentSlide) return;

  const current = slides[currentSlide];
  const next = slides[newIndex];

  
  slides.forEach(slide => {
    slide.classList.remove('active', 'slide-in-right', 'animate-in');
  });

  
  next.classList.add('slide-in-right');
  next.style.display = 'flex';

  setTimeout(() => {
    current.classList.remove('active');
    next.classList.add('active', 'animate-in');
    next.classList.remove('slide-in-right');

    setTimeout(() => {
      current.style.display = 'none';
      next.classList.remove('animate-in');
    }, 500);
  }, 10);

  
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


startAutoSlide();


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(interval);
    showSlide(index);
    startAutoSlide();
  });
});


const testimonialSection = document.querySelector('.testimonials-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      testimonialSection.classList.add('slide-up-animate');
    }
  });
}, { threshold: 0.2 });

observer.observe(testimonialSection);



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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");
  const closeBtn = document.querySelector(".close-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
      modal.style.display = "block";
      document.body.classList.add("no-scroll");
      form.reset();
    } else {
      form.reportValidity();
    }
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  };

});