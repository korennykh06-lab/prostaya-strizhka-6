// Фотографии для услуг
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
    
    const btn = document.querySelector(`.service-photo-btn[data-photo="${serviceId}"]`);
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

function initServiceButtons() {
    const detailButtons = document.querySelectorAll('.service-detail-btn');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceCard = this.closest('.service-card');
            const detailsWrapper = serviceCard.querySelector('.service-details-wrapper');
            
            if (detailsWrapper.style.display === 'none' || detailsWrapper.style.display === '') {
                document.querySelectorAll('.service-details-wrapper').forEach(wrapper => {
                    wrapper.style.display = 'none';
                    const otherBtn = wrapper.closest('.service-card').querySelector('.service-detail-btn');
                    if (otherBtn) otherBtn.textContent = 'Подробнее';
                });
                detailsWrapper.style.display = 'block';
                this.textContent = 'Скрыть';
            } else {
                detailsWrapper.style.display = 'none';
                this.textContent = 'Подробнее';
            }
        });
    });
    
    const photoButtons = document.querySelectorAll('.service-photo-btn');
    photoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const photoId = this.getAttribute('data-photo');
            if (photoId) openServicePhoto(photoId);
        });
    });
}

// Советы
const tipsData = {
    1: {
        title: 'Как правильно выбрать расчёску?',
        photo: 'https://sun9-65.userapi.com/impg/nokpBdl9Dgwz5kPnQaL72PxHw_iviRvYDbR8dw/RiEhMfAa078.jpg?size=2160x2160&quality=96&sign=b9d33be0614fa4d4eb72bf779b512f8a&type=album',
        content: '<h3>Основные правила выбора расчёски</h3><p>Расчёска подбирается исходя из типа кожи головы, длины и толщины волос.</p><h4>Виды расчёсок:</h4><ul><li><strong>Массажная щётка</strong> — сочетает расчёсывание и массаж</li><li><strong>Для длинных волос</strong> — с редкими зубьями</li><li><strong>Для густых волос</strong> — щётка с толстыми редкими зубчиками</li><li><strong>Для тонких волос</strong> — щётка с тонкими частыми зубчиками</li></ul>'
    },
    2: {
        title: 'Как сохранить волосы здоровыми?',
        photo: 'https://sun9-24.userapi.com/s/v1/ig2/qPHVbC4KRKlqeuxuom7ZBcMvcyeiecXc5U5HP1FuBjULamrVv6Jrcq-xEBkDj5my1SVaXSk83YbdS_DLEeAixBCi.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&cs=640x0',
        content: '<h3>ТОП-5 советов для красивых волос</h3><ol><li>Принимайте витамины A, B, C, E</li><li>Увлажняйте волосы и кожу головы</li><li>Используйте индивидуальный уход</li><li>Минимизируйте стресс</li><li>Пейте больше воды</li></ol>'
    },
    3: {
        title: 'Что портит наши волосы?',
        photo: 'https://sun9-82.userapi.com/s/v1/ig2/4ln4GCO62b5QZ6BvzpazzHMfbzCYLhycm9ZPjAARllPM5I_Kdz5j_5zJbsgSsIN4Z2jX6Dh0Sh9h9oEQoVz7orKK.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&cs=640x0',
        content: '<h3>Основные факторы повреждения волос</h3><ul><li><strong>Механическое воздействие</strong> — скручивание мокрых волос</li><li><strong>Тепловое воздействие</strong> — утюжок, плойка без термозащиты</li><li><strong>Химическое воздействие</strong> — окрашивание, осветление</li><li><strong>UV-лучи</strong> — защищайте головным убором</li><li><strong>Хлорированная вода</strong> — после бассейна мойте голову</li></ul>'
    },
    4: {
        title: 'Как часто нужно стричь волосы?',
        photo: 'https://sun9-46.userapi.com/impg/oetiTCQOAE08vSEGCf-NaDVBUzX0xwbpFhHxig/Fa80VtI8brQ.jpg?size=2160x2160&quality=96&sign=dbeb6ea8542e3ff904214da1b4bd669b&type=album',
        content: '<h3>Рекомендации по частоте стрижки</h3><ul><li><strong>Короткие стрижки</strong> — каждые 1,5–2 месяца</li><li><strong>Средняя длина</strong> — раз в 3 месяца</li><li><strong>Длинные волосы</strong> — раз в 3 месяца подстригайте кончики</li></ul><p>Регулярная стрижка — залог здорового вида волос.</p>'
    }
};

function openGostTip(tipId) {
    const tip = tipsData[tipId];
    if (!tip) return;
    const modal = document.getElementById('gostModal');
    const modalTitle = document.getElementById('gostModalTitle');
    const modalBody = document.getElementById('gostModalBody');
    modalTitle.textContent = tip.title;
    modalBody.innerHTML = `<img class="tip-image" src="${tip.photo}" alt="${tip.title}">${tip.content}`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGostModal() {
    const modal = document.getElementById('gostModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function initTipsButtons() {
    document.querySelectorAll('.tip-gost-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openGostTip(parseInt(btn.getAttribute('data-tip')));
        });
    });
}

// Форма
function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    const nameInput = form.querySelector('#userName');
    const phoneInput = form.querySelector('#userPhone');
    
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s\-\.]/g, '');
        });
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('focus', function() {
            if (!this.value) this.value = '+7';
        });
        phoneInput.addEventListener('input', function() {
            let value = this.value;
            if (!value.startsWith('+7')) value = '+7';
            let phonePart = value.substring(2).replace(/\D/g, '');
            if (phonePart.length > 10) phonePart = phonePart.substring(0, 10);
            this.value = '+7' + phonePart;
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        if (nameInput && (!nameInput.value || nameInput.value.trim() === '')) {
            nameInput.style.borderBottomColor = '#E53935';
            isValid = false;
        } else if (nameInput) nameInput.style.borderBottomColor = '#5BA4CF';
        
        if (phoneInput) {
            const phoneValue = phoneInput.value;
            if (phoneValue.length !== 12 || !phoneValue.startsWith('+7')) {
                phoneInput.style.borderBottomColor = '#E53935';
                isValid = false;
            } else {
                const digits = phoneValue.substring(2);
                if (!/^\d{10}$/.test(digits)) {
                    phoneInput.style.borderBottomColor = '#E53935';
                    isValid = false;
                } else phoneInput.style.borderBottomColor = '#5BA4CF';
            }
        }
        
        if (isValid) {
            alert('Спасибо! Мы скоро свяжемся с вами.');
            form.reset();
            if (phoneInput) phoneInput.value = '';
        } else alert('Пожалуйста, заполните все поля корректно');
    });
}

// Бургер-меню
function initBurgerMenu() {
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('navLinks');
    if (!burger || !nav) return;
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        document.body.classList.toggle('menu-open');
    });
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        });
    });
}

// Шапка
function initHeaderVisibility() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const heroSection = document.querySelector('.hero');
        const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
        
        if (currentScroll > heroHeight - 100) {
            header.classList.add('visible');
            if (currentScroll > heroHeight + 100) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        } else {
            header.classList.remove('visible', 'scrolled');
        }
    });
}

// Бегущая строка
function initMarqueeVisibility() {
    const marquee = document.getElementById('fixedMarquee');
    if (!marquee) return;
    window.addEventListener('scroll', () => {
        marquee.classList.toggle('visible', window.scrollY > 200);
    });
    setTimeout(() => marquee.classList.add('visible'), 1000);
}

// Слайдер отзывов
function initReviewsSlider() {
    const track = document.getElementById('reviewsTrack');
    const prev = document.getElementById('prevReviewBtn');
    const next = document.getElementById('nextReviewBtn');
    const dotsContainer = document.getElementById('reviewDots');
    if (!track || !prev || !next) return;
    const cards = Array.from(document.querySelectorAll('.review-card-clean'));
    if (cards.length === 0) return;
    let current = 0;
    let visible = window.innerWidth <= 768 ? 1 : 2;
    
    function update() {
        const cardWidth = cards[0]?.offsetWidth || 300;
        track.style.transform = `translateX(${-current * (cardWidth + 20)}px)`;
        if (dotsContainer) {
            const activeDot = Math.floor(current / visible);
            document.querySelectorAll('.review-dots .dot').forEach((dot, i) => dot.classList.toggle('active', i === activeDot));
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
            dot.addEventListener('click', () => {
                current = i * visible;
                if (current >= cards.length) current = Math.max(0, cards.length - visible);
                update();
            });
            dotsContainer.appendChild(dot);
        }
    }
    
    prev.addEventListener('click', () => {
        current = current - visible >= 0 ? current - visible : Math.max(0, cards.length - visible);
        update();
    });
    
    next.addEventListener('click', () => {
        current = current + visible < cards.length ? current + visible : 0;
        update();
    });
    
    window.addEventListener('resize', () => {
        visible = window.innerWidth <= 768 ? 1 : 2;
        current = 0;
        createDots();
        update();
    });
    
    createDots();
    update();
}

// Плавный скролл
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Модальные окна
function initModalsClose() {
    document.querySelectorAll('.close-gost, .close-photo, .close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('close-gost')) closeGostModal();
            else closeServicePhotoModal();
        });
    });
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('gostModal')) closeGostModal();
        if (event.target === document.getElementById('servicePhotoModal')) closeServicePhotoModal();
    });
}

// Увеличение фото отзывов
function initReviewImageZoom() {
    const clickableImages = document.querySelectorAll('.review-img-clickable');
    const modal = document.getElementById('reviewPhotoModal');
    const modalImg = document.getElementById('reviewPhotoImg');
    const closeBtn = document.querySelector('.close-review-photo');
    
    if (!modal || !modalImg) return;
    
    clickableImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            const imgSrc = this.getAttribute('data-review-img');
            if (imgSrc) {
                modalImg.src = imgSrc;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Запуск
document.addEventListener('DOMContentLoaded', () => {
    initServiceButtons();
    initTipsButtons();
    initBookingForm();
    initBurgerMenu();
    initReviewsSlider();
    initSmoothScroll();
    initHeaderVisibility();
    initMarqueeVisibility();
    initModalsClose();
    initReviewImageZoom();
});