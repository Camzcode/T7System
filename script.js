/* ===================================================================
   T7 SYSTEM — JavaScript
   =================================================================== */

// ===== SCROLL PROGRESS =====
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + '%';
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    backToTop.classList.toggle('visible', y > 400);
    updateScrollProgress();
}, { passive: true });

// ===== MOBILE MENU =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close on outside click
document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== BACK TO TOP =====
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== HERO BACKGROUND VIDEO =====
// Uses requestAnimationFrame so each loop fades smoothly without CSS animations.
const backgroundVideo = document.getElementById('backgroundVideo');
let videoFadeFrame = null;
let fadingVideoOut = false;

function fadeBackgroundVideo(targetOpacity, duration = 500) {
    if (videoFadeFrame !== null) cancelAnimationFrame(videoFadeFrame);

    const startOpacity = Number.parseFloat(
        backgroundVideo.style.opacity || getComputedStyle(backgroundVideo).opacity
    ) || 0;
    const opacityDifference = targetOpacity - startOpacity;
    const startedAt = performance.now();

    function animateVideoFade(now) {
        const progress = Math.min((now - startedAt) / duration, 1);
        backgroundVideo.style.opacity = String(startOpacity + opacityDifference * progress);

        if (progress < 1) {
            videoFadeFrame = requestAnimationFrame(animateVideoFade);
        } else {
            videoFadeFrame = null;
        }
    }

    videoFadeFrame = requestAnimationFrame(animateVideoFade);
}

function playBackgroundVideo() {
    backgroundVideo.play().then(() => fadeBackgroundVideo(1)).catch(() => {
        // The original Navy hero remains the visual fallback if playback is unavailable.
    });
}

if (backgroundVideo) {
    backgroundVideo.addEventListener('loadeddata', playBackgroundVideo);

    backgroundVideo.addEventListener('timeupdate', () => {
        if (!fadingVideoOut && Number.isFinite(backgroundVideo.duration)
            && backgroundVideo.duration - backgroundVideo.currentTime <= 0.55) {
            fadingVideoOut = true;
            fadeBackgroundVideo(0);
        }
    });

    backgroundVideo.addEventListener('ended', () => {
        if (videoFadeFrame !== null) cancelAnimationFrame(videoFadeFrame);
        backgroundVideo.style.opacity = '0';

        setTimeout(() => {
            backgroundVideo.currentTime = 0;
            fadingVideoOut = false;
            playBackgroundVideo();
        }, 100);
    });

    if (backgroundVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) playBackgroundVideo();
}

// ===== REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger siblings in the same grid parent
            const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
            let delay = 0;
            siblings.forEach(sib => {
                if (sib === entry.target) {
                    setTimeout(() => sib.classList.add('visible'), delay);
                    delay += 80;
                }
            });
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -48px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== ANIMATED COUNTER =====
function animateCounter(el, target, suffix = '') {
    const duration = 1800;
    const startTime = performance.now();

    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(target * eased);
        el.textContent = current.toLocaleString('pt-BR') + suffix;
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-number').forEach(stat => {
                const target = parseInt(stat.dataset.target, 10);
                const suffix = stat.dataset.suffix || '';
                if (!isNaN(target)) animateCounter(stat, target, suffix);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ===== PORTFOLIO FILTERS =====
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        portfolioCards.forEach(card => {
            const match = filter === 'all' || card.dataset.category === filter;
            card.style.display = match ? '' : 'none';
        });
    });
});

// ===== DEPOIMENTOS SLIDER =====
const depoimentos = document.querySelectorAll('.depoimento');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlideTimer;

function goToSlide(index) {
    depoimentos[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    dots[currentSlide].setAttribute('aria-selected', 'false');

    currentSlide = (index + depoimentos.length) % depoimentos.length;

    depoimentos[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    dots[currentSlide].setAttribute('aria-selected', 'true');
}

function startAutoSlide() {
    autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
}

const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');

if (sliderPrev) sliderPrev.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoSlide(); });
if (sliderNext) sliderNext.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoSlide(); });

dots.forEach(dot => {
    dot.addEventListener('click', () => { goToSlide(+dot.dataset.slide); resetAutoSlide(); });
});

startAutoSlide();

// Pause on hover
const sliderWrap = document.getElementById('depoimentosSlider');
if (sliderWrap) {
    sliderWrap.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
    sliderWrap.addEventListener('mouseleave', startAutoSlide);
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Open clicked (if was closed)
        if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// ===== CONTACT FORM =====
function enviarMensagem(e) {
    e.preventDefault();

    const form = e.target;
    const nome = form.querySelector('#nome').value.trim();
    const email = form.querySelector('#email').value.trim();
    const mensagem = form.querySelector('#mensagem').value.trim();
    const feedback = document.getElementById('formFeedback');
    const btn = document.getElementById('submitBtn');

    if (!nome || !email || !mensagem) {
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.className = 'form-feedback error';
        return;
    }

    // Build WhatsApp message
    const texto = encodeURIComponent(
        `Olá T7 System!\n\nMeu nome é ${nome}.\n\n${mensagem}\n\nE-mail: ${email}`
    );

    window.open(`https://wa.me/5511XXXXXXXXX?text=${texto}`, '_blank');

    const original = btn.textContent;
    btn.textContent = '✓ Redirecionando para WhatsApp...';
    btn.style.background = '#2e7d32';
    btn.style.borderColor = '#2e7d32';
    btn.disabled = true;

    feedback.textContent = 'Mensagem enviada! Aguarde o redirecionamento.';
    feedback.className = 'form-feedback success';

    setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
        feedback.textContent = '';
        feedback.className = 'form-feedback';
        form.reset();
    }, 4000);
}
