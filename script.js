// ========== ФОТО ДЛЯ УСЛУГ ==========
const servicePhotos = {
    simple_woman: 'https://i.pinimg.com/1200x/97/ea/3a/97ea3ab88d3586ba070665fddd8e0640.jpg',
    architectural_woman: 'https://i.pinimg.com/1200x/bb/82/47/bb82478544b01929cb37416cf26fe65e.jpg',
    simple_man: 'https://sun9-32.userapi.com/s/v1/ig2/264eUpSlvdzMgvDor_zGEJUZpNkXVEzqv4MPbAAm8PNcIdtjOAZBnPsukyqiHWzCB7Lwnm6OxIxJSyrT_RCwjaJa.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&from=bu&cs=640x0',
    premium_man: 'https://i.pinimg.com/1200x/e2/cc/29/e2cc2968fa8bf6a2a239f99b029a4661.jpg',
    simple_kid: 'https://f1.dikidi.net/c14/v13475/5u0qhfonu9.jpg',
    model_kid: 'https://gallery.profi.ru/xfiles/pfiles/f8790b3e69ad4b0dba5ef136ec695bff.jpg-profi_max.jpg',
    onecolor: 'https://vremena-goda-dn.ru/wp-content/uploads/2018/03/teotema_vg-1024x750.jpg',
    melirovanie: 'https://i.pinimg.com/1200x/12/9f/0d/129f0d2fe81fd243b772db360079805b.jpg',
    airtouch: 'https://i.pinimg.com/736x/48/07/5d/48075dec07f90937d33233424c6ab1eb.jpg',
    shatush: 'https://i.pinimg.com/564x/08/09/c2/0809c27a829d9239f6350df6d001e482.jpg',
    babylights: 'https://i.pinimg.com/1200x/b7/15/4c/b7154c8a478a1cd84a9a6cc25f0b0ab1.jpg',
    toning: 'https://i.pinimg.com/736x/4d/9b/c9/4d9bc9c0f20086431a0a0bf16b9c4cc1.jpg',
    keratin: 'https://i.pinimg.com/1200x/03/38/35/033835ed74b466f79fb2eb4b09ab57a2.jpg',
    botox: 'https://i.pinimg.com/1200x/ba/8e/6c/ba8e6c035640bef25c8dec20faf93ffb.jpg',
    polishing: 'https://i.pinimg.com/1200x/1e/97/89/1e97894a9e08eabfcc0caa5b30cdd507.jpg',
    styling: 'https://i.pinimg.com/1200x/b2/b1/da/b2b1da65d1951625cc45fae36f4f2474.jpg',
    evening: 'https://i.pinimg.com/1200x/c1/4e/2e/c14e2e5ffff0b019d701b95145f80a3c.jpg',
    treatment: 'https://i.pinimg.com/1200x/9f/48/d9/9f48d9b47bc4cc686520ec8acc13fda3.jpg'
};

function openServicePhoto(serviceId) {
    const modal = document.getElementById('servicePhotoModal');
    const title = document.getElementById('photoModalTitle');
    const img = document.getElementById('servicePhotoImg');
    const photoUrl = servicePhotos[serviceId];
    
    if (!photoUrl) {
        alert('Фото временно недоступно');
        return;
    }
    
    const btn = document.querySelector('.service-photo-btn[data-photo="' + serviceId + '"]');
    if (btn) {
        const serviceCard = btn.closest('.service-card');
        const serviceName = serviceCard.querySelector('.service-name').textContent;
        title.textContent = serviceName;
    }
    
    img.src = photoUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeServicePhotoModal() {
    const modal = document.getElementById('servicePhotoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ========== БУРГЕР-МЕНЮ ==========
function initBurgerMenu() {
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('navLinks');
    
    if (!burger || !nav) return;
    
    burger.onclick = function() {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        } else {
            nav.classList.add('active');
            burger.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        }
    };
    
    // Закрытие при клике на пункт меню
    const links = nav.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        };
    }
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

// ========== КНОПКИ ПОДРОБНЕЕ У УСЛУГ ==========
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
    
    const photoButtons = document.querySelectorAll('.service-photo-btn');
    for (let i = 0; i < photoButtons.length; i++) {
        photoButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const photoId = this.getAttribute('data-photo');
            if (photoId) openServicePhoto(photoId);
        });
    }
}

// ========== СОВЕТЫ ==========
const tipsData = {
    1: { title: 'Как правильно выбрать расчёску?', content: 'Расчёска подбирается исходя из типа кожи головы, длины и толщины волос. Массажная щётка сочетает расчёсывание и массаж.' },
    2: { title: 'Как сохранить волосы здоровыми?', content: 'Принимайте витамины, увлажняйте волосы, используйте индивидуальный уход, минимизируйте стресс, пейте больше воды.' },
    3: { title: 'Что портит наши волосы?', content: 'Механическое, тепловое, химическое воздействие, UV-лучи, хлорированная и солёная вода.' },
    4: { title: 'Как часто нужно стричь волосы?', content: 'Короткие стрижки — каждые 1,5–2 месяца, средние — раз в 3 месяца, длинные — раз в 3 месяца подстригайте кончики.' }
};

function openGostTip(tipId) {
    const tip = tipsData[tipId];
    if (!tip) return;
    alert(tip.title + '\n\n' + tip.content);
}

function initTipsButtons() {
    const tipButtons = document.querySelectorAll('.tip-gost-btn');
    for (let i = 0; i < tipButtons.length; i++) {
        tipButtons[i].addEventListener('click', function(e) {
            e.preventDefault();
            const tipId = parseInt(this.getAttribute('data-tip'));
            openGostTip(tipId);
        });
    }
}

// ========== ФОРМА ==========
function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Мы скоро свяжемся с вами.');
        form.reset();
    });
}

// ========== ШАПКА ПРИ СКРОЛЛЕ ==========
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

// ========== БЕГУЩАЯ СТРОКА ==========
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

// ========== СЛАЙДЕР ОТЗЫВОВ ==========
function initReviewsSlider() {
    const track = document.getElementById('reviewsTrack');
    const prev = document.getElementById('prevReviewBtn');
    const next = document.getElementById('nextReviewBtn');
    const dotsContainer = document.getElementById('reviewDots');
    
    if (!track || !prev || !next) return;
    
    const cards = document.querySelectorAll('.review-card-clean');
    if (cards.length === 0) return;
    
    let current = 0;
    let visible = window.innerWidth <= 768 ? 1 : 2;
    
    function update() {
        const cardWidth = cards[0] ? cards[0].offsetWidth : 300;
        const gap = 20;
        track.style.transform = 'translateX(' + (-current * (cardWidth + gap)) + 'px)';
        updateDots();
    }
    
    function updateDots() {
        if (!dotsContainer) return;
        const activeDot = Math.floor(current / visible);
        const dots = document.querySelectorAll('.review-dots .dot');
        for (let i = 0; i < dots.length; i++) {
            if (i === activeDot) {
                dots[i].classList.add('active');
            } else {
                dots[i].classList.remove('active');
            }
        }
    }
    
    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const total = Math.ceil(cards.length / visible);
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function() {
                current = i * visible;
                if (current >= cards.length) {
                    current = Math.max(0, cards.length - visible);
                }
                update();
            });
            dotsContainer.appendChild(dot);
        }
    }
    
    prev.onclick = function() {
        current = current - visible >= 0 ? current - visible : Math.max(0, cards.length - visible);
        update();
    };
    
    next.onclick = function() {
        current = current + visible < cards.length ? current + visible : 0;
        update();
    };
    
    window.addEventListener('resize', function() {
        visible = window.innerWidth <= 768 ? 1 : 2;
        current = 0;
        createDots();
        update();
    });
    
    createDots();
    update();
}

// ========== МОДАЛЬНЫЕ ОКНА ==========
function initModalsClose() {
    const closeButtons = document.querySelectorAll('.close-gost, .close-photo');
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            if (this.classList.contains('close-gost')) {
                const modal = document.getElementById('gostModal');
                if (modal) modal.style.display = 'none';
            } else {
                closeServicePhotoModal();
            }
            document.body.style.overflow = 'auto';
        };
    }
    
    window.onclick = function(event) {
        const gostModal = document.getElementById('gostModal');
        const serviceModal = document.getElementById('servicePhotoModal');
        if (event.target === gostModal) {
            gostModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target === serviceModal) {
            serviceModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
}

// ========== УВЕЛИЧЕНИЕ ФОТО ОТЗЫВОВ ==========
function initReviewImageZoom() {
    const clickableImages = document.querySelectorAll('.review-img-clickable');
    const modal = document.getElementById('reviewPhotoModal');
    const modalImg = document.getElementById('reviewPhotoImg');
    
    if (!modal || !modalImg) return;
    
    function closeReviewPhotoModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    for (let i = 0; i < clickableImages.length; i++) {
        clickableImages[i].onclick = function(e) {
            e.stopPropagation();
            const imgSrc = this.getAttribute('data-review-img');
            if (imgSrc) {
                modalImg.src = imgSrc;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        };
    }
    
    const closeBtn = document.querySelector('.close-review-photo');
    if (closeBtn) {
        closeBtn.onclick = closeReviewPhotoModal;
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            closeReviewPhotoModal();
        }
    };
}

// ========== ЗАПУСК ВСЕГО ==========
document.addEventListener('DOMContentLoaded', function() {
    initBurgerMenu();
    initSmoothScroll();
    initServiceButtons();
    initTipsButtons();
    initBookingForm();
    initHeaderVisibility();
    initMarqueeVisibility();
    initReviewsSlider();
    initModalsClose();
    initReviewImageZoom();
});
