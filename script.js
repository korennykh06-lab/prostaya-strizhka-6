// ========== БУРГЕР-МЕНЮ ==========
function initBurgerMenu() {
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('navLinks');
    
    if (!burger || !nav) {
        console.log('Бургер или меню не найдены');
        return;
    }
    
    function closeMenu() {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
    }
    
    function openMenu() {
        burger.classList.add('active');
        nav.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('menu-open');
    }
    
    // Открытие/закрытие по кнопке бургера
    burger.addEventListener('click', function(e) {
        e.stopPropagation();
        if (nav.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Закрытие при клике на пункт меню
    const allLinks = nav.querySelectorAll('a');
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].addEventListener('click', function(e) {
            closeMenu();
        });
    }
    
    // Закрытие при клике вне меню
    document.body.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !burger.contains(e.target)) {
            closeMenu();
        }
    });
}

// ========== ПЛАВНЫЙ СКРОЛЛ ==========
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

// ========== ОСТАЛЬНЫЕ ФУНКЦИИ ==========
function initServiceButtons() {
    const detailButtons = document.querySelectorAll('.service-detail-btn');
    for (let i = 0; i < detailButtons.length; i++) {
        detailButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            const serviceCard = this.closest('.service-card');
            const detailsWrapper = serviceCard.querySelector('.service-details-wrapper');
            
            if (detailsWrapper.style.display === 'none' || detailsWrapper.style.display === '') {
                const allWrappers = document.querySelectorAll('.service-details-wrapper');
                for (let j = 0; j < allWrappers.length; j++) {
                    allWrappers[j].style.display = 'none';
                }
                detailsWrapper.style.display = 'block';
                this.textContent = 'Скрыть';
            } else {
                detailsWrapper.style.display = 'none';
                this.textContent = 'Подробнее';
            }
        });
    }
}

function initTipsButtons() {
    const tipButtons = document.querySelectorAll('.tip-gost-btn');
    for (let i = 0; i < tipButtons.length; i++) {
        tipButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            alert('Совет: информация появится здесь');
        });
    }
}

function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Мы скоро свяжемся с вами.');
        form.reset();
    });
}

function initHeaderVisibility() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
        
        if (currentScroll > heroHeight - 100) {
            header.classList.add('visible');
            if (currentScroll > heroHeight + 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        } else {
            header.classList.remove('visible', 'scrolled');
        }
    });
}

function initMarqueeVisibility() {
    const marquee = document.getElementById('fixedMarquee');
    if (!marquee) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            marquee.classList.add('visible');
        } else {
            marquee.classList.remove('visible');
        }
    });
    
    setTimeout(function() {
        marquee.classList.add('visible');
    }, 1000);
}

function initReviewsSlider() {
    const track = document.getElementById('reviewsTrack');
    const prev = document.getElementById('prevReviewBtn');
    const next = document.getElementById('nextReviewBtn');
    
    if (!track || !prev || !next) return;
    
    const cards = Array.from(document.querySelectorAll('.review-card-clean'));
    if (cards.length === 0) return;
    
    let current = 0;
    let visible = window.innerWidth <= 768 ? 1 : 2;
    
    function update() {
        const cardWidth = cards[0]?.offsetWidth || 300;
        const gap = 20;
        track.style.transform = 'translateX(' + (-current * (cardWidth + gap)) + 'px)';
    }
    
    prev.addEventListener('click', function() {
        current = current - visible >= 0 ? current - visible : Math.max(0, cards.length - visible);
        update();
    });
    
    next.addEventListener('click', function() {
        current = current + visible < cards.length ? current + visible : 0;
        update();
    });
    
    window.addEventListener('resize', function() {
        visible = window.innerWidth <= 768 ? 1 : 2;
        current = 0;
        update();
    });
    
    update();
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initServiceButtons();
    initTipsButtons();
    initBookingForm();
    initBurgerMenu();
    initReviewsSlider();
    initSmoothScroll();
    initHeaderVisibility();
    initMarqueeVisibility();
});
