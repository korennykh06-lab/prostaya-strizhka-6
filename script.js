// ============ GOOGLE SHEETS URL ============
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwoci_UCI_9W_o1SgHrfxU814b7_zwylc94GXtznn4VtL1kTVv_iTR5ER181wTiTFZz0g/exec';

// ============ ФОТО ДЛЯ УСЛУГ ============
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
    if (!photoUrl) { alert('Фото временно недоступно'); return; }
    const btn = document.querySelector('.service-photo-btn[data-photo="' + serviceId + '"]');
    if (btn) {
        const serviceCard = btn.closest('.service-card');
        const serviceName = serviceCard.querySelector('.service-name').textContent;
        title.textContent = serviceName;
    }
    img.src = photoUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const closeOnEscape = function(e) {
        if (e.key === 'Escape') {
            closeServicePhotoModal();
            document.removeEventListener('keydown', closeOnEscape);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
}

function closeServicePhotoModal() {
    const modal = document.getElementById('servicePhotoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ============ БУРГЕР-МЕНЮ ============
function initBurgerMenu() {
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('navLinks');
    if (!burger || !nav) return;
    burger.onclick = function(e) {
        e.stopPropagation();
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

function initLogoLink() {
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

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
                    const btn = allWrappers[j].closest('.service-card').querySelector('.service-detail-btn');
                    if (btn) btn.textContent = 'Подробнее';
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

// ============ СОВЕТЫ ============
const tipsData = {
    1: { title: 'Как правильно выбрать расчёску?', content: '<p>Расчёска подбирается исходя из типа кожи головы, длины и толщины волос.</p><ul><li><strong>Массажная щётка</strong> — сочетает расчёсывание и массаж, подходит для всех типов волос.</li><li><strong>Гребень с редкими зубьями</strong> — для тонких и ломких волос.</li><li><strong>Расчёска с натуральной щетиной</strong> — для густых и вьющихся волос.</li><li><strong>Силиконовая расчёска</strong> — для мокрых волос, не травмирует.</li></ul><p>Деревянные расчёски лучше пластмассовых — они не электризуют волосы.</p>' },
    2: { title: 'Как сохранить волосы здоровыми?', content: '<p>Чтобы волосы были здоровыми и красивыми, следуйте этим правилам:</p><ul><li>Принимайте витамины (группа B, цинк, железо, биотин)</li><li>Увлажняйте волосы масками 1-2 раза в неделю</li><li>Используйте индивидуальный уход под тип волос</li><li>Минимизируйте стресс и высыпайтесь</li><li>Пейте больше воды (1.5-2 литра в день)</li><li>Защищайте волосы от солнца и термовоздействия</li><li>Регулярно подстригайте секущиеся кончики</li></ul>' },
    3: { title: 'Что портит наши волосы?', content: '<p>Основные факторы, разрушающие структуру волос:</p><ul><li><strong>Механическое воздействие</strong> — грубое расчёсывание, тугие резинки, жёсткие заколки</li><li><strong>Тепловое воздействие</strong> — утюжки, фены, плойки без термозащиты</li><li><strong>Химическое воздействие</strong> — частые окрашивания, химическая завивка</li><li><strong>Внешние факторы</strong> — UV-лучи, хлорированная вода, солёная вода в море</li><li><strong>Неправильное питание</strong> — дефицит витаминов и белка</li></ul>' },
    4: { title: 'Как часто нужно стричь волосы?', content: '<p>Рекомендации по частоте стрижки:</p><ul><li><strong>Короткие стрижки</strong> (пикси, боб) — каждые 1.5-2 месяца для поддержания формы</li><li><strong>Средние волосы</strong> — раз в 3 месяца</li><li><strong>Длинные волосы</strong> — раз в 3-4 месяца подстригайте кончики, чтобы избежать сечения</li><li><strong>Окрашенные волосы</strong> — чаще, раз в 2-2.5 месяца</li><li><strong>Вьющиеся волосы</strong> — раз в 3-4 месяца</li></ul><p>Регулярная стрижка стимулирует рост волос и придаёт ухоженный вид.</p>' }
};

function openGostTip(tipId) {
    const tip = tipsData[tipId];
    const modal = document.getElementById('gostModal');
    const title = document.getElementById('gostModalTitle');
    const body = document.getElementById('gostModalBody');
    if (tip && modal) {
        title.textContent = tip.title;
        body.innerHTML = tip.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeGostModal() {
    const modal = document.getElementById('gostModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
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
    const closeGost = document.querySelector('.close-gost');
    if (closeGost) closeGost.onclick = closeGostModal;
    window.onclick = function(event) {
        const modal = document.getElementById('gostModal');
        if (event.target === modal) closeGostModal();
    };
}

// ============ GOOGLE SHEETS ============
async function sendToGoogleSheets(bookingData) {
    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });
        console.log('✅ Данные отправлены');
        return true;
    } catch (error) {
        console.error('❌ Ошибка:', error);
        return false;
    }
}

async function fetchBookedSlots() {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL + '?action=getBookedSlots');
        const data = await response.json();
        if (data.success) {
            localStorage.setItem('bookedSlots', JSON.stringify(data.slots));
            return data.slots;
        }
    } catch (error) {
        console.log('Использую локальные данные');
    }
    return JSON.parse(localStorage.getItem('bookedSlots')) || {};
}

// ============ КАЛЕНДАРЬ ============
let currentMonth = new Date();
let selectedDate = null;
let bookedSlots = {};
const allTimeSlots = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];

function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function isDateFullyBooked(dateStr) {
    let bookedCount = 0;
    for (const time of allTimeSlots) {
        if (bookedSlots[`${dateStr}_${time}`]) bookedCount++;
    }
    return bookedCount >= allTimeSlots.length;
}

function isTimeInPast(dateStr, time) {
    const today = formatDate(new Date());
    if (dateStr !== today) return false;
    const now = new Date();
    const [hours, minutes] = time.split(':');
    const timeDate = new Date();
    timeDate.setHours(parseInt(hours), parseInt(minutes), 0);
    return timeDate < now;
}

function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    if (!calendarGrid) return;
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let html = '';
    const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    weekdays.forEach(day => { html += `<div class="calendar-day" style="font-weight: bold; background: #e8f4fd;">${day}</div>`; });
    let startOffset = startDay === 0 ? 6 : startDay - 1;
    for (let i = 0; i < startOffset; i++) html += `<div class="calendar-day disabled"></div>`;
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isPast = new Date(year, month, day) < today;
        const isFullyBooked = isDateFullyBooked(dateStr);
        let additionalClass = '';
        if (selectedDate === dateStr) additionalClass = 'selected';
        else if (isPast) additionalClass = 'disabled';
        else if (isFullyBooked) additionalClass = 'booked';
        html += `<div class="calendar-day ${additionalClass}" data-date="${dateStr}">${day}</div>`;
    }
    calendarGrid.innerHTML = html;
    document.querySelectorAll('.calendar-day[data-date]').forEach(el => {
        el.addEventListener('click', () => {
            const date = el.dataset.date;
            if (!el.classList.contains('disabled') && !el.classList.contains('booked')) selectDate(date);
        });
    });
}

function selectDate(date) {
    selectedDate = date;
    document.getElementById('bookingDate').value = date;
    renderCalendar();
    renderTimeSlots();
}

function renderTimeSlots() {
    const timeSlotsContainer = document.getElementById('timeSlots');
    if (!timeSlotsContainer) return;
    if (!selectedDate) {
        timeSlotsContainer.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:#999;">Сначала выберите дату</div>';
        return;
    }
    let html = '';
    for (const time of allTimeSlots) {
        const isBooked = bookedSlots[`${selectedDate}_${time}`];
        const isPast = isTimeInPast(selectedDate, time);
        let additionalClass = '';
        if (isBooked || isPast) additionalClass = 'booked';
        html += `<div class="time-slot ${additionalClass}" data-time="${time}" ${(isBooked || isPast) ? 'disabled' : ''}>${time}</div>`;
    }
    timeSlotsContainer.innerHTML = html;
    document.querySelectorAll('.time-slot:not(.booked)').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
            el.classList.add('selected');
            document.getElementById('bookingTime').value = el.dataset.time;
            updateTimeSlotStatus();
        });
    });
}

function updateTimeSlotStatus() {
    const dateInput = document.getElementById('bookingDate');
    const timeInput = document.getElementById('bookingTime');
    const statusDiv = document.getElementById('timeSlotStatus');
    const submitBtn = document.getElementById('submitBtn');
    if (!dateInput || !timeInput || !statusDiv || !submitBtn) return;
    const selectedDateVal = dateInput.value;
    const selectedTimeVal = timeInput.value;
    if (!selectedDateVal || !selectedTimeVal) {
        statusDiv.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
        return;
    }
    const isBooked = bookedSlots[`${selectedDateVal}_${selectedTimeVal}`];
    if (isBooked) {
        statusDiv.innerHTML = '❌ Это время уже занято. Пожалуйста, выберите другое время.';
        statusDiv.className = 'time-slot-status booked';
        statusDiv.style.display = 'block';
        submitBtn.disabled = true;
        submitBtn.classList.add('disabled');
    } else {
        statusDiv.innerHTML = '✅ Это время свободно! Можете записываться.';
        statusDiv.className = 'time-slot-status available';
        statusDiv.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
    }
}

function changeMonth(delta) {
    currentMonth.setMonth(currentMonth.getMonth() + delta);
    renderCalendar();
    const monthNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    document.getElementById('currentMonthYear').textContent = `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;
}

// ============ ФОРМА ЗАПИСИ (БЕЗ EMAIL) ============
function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    const nameInput = document.getElementById('userName');
    const phoneInput = document.getElementById('userPhone');
    const dateInput = document.getElementById('bookingDate');
    const timeInput = document.getElementById('bookingTime');
    const commentTextarea = document.querySelector('#booking-form textarea');
    
    if (document.getElementById('currentMonthYear')) {
        const monthNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        document.getElementById('currentMonthYear').textContent = `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;
    }
    const prevBtn = document.getElementById('prevMonthBtn');
    const nextBtn = document.getElementById('nextMonthBtn');
    if (prevBtn) prevBtn.onclick = () => changeMonth(-1);
    if (nextBtn) nextBtn.onclick = () => changeMonth(1);
    
    fetchBookedSlots().then(slots => { bookedSlots = slots; renderCalendar(); });
    
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/g, '');
        });
    }
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length === 0) { this.value = '+7'; return; }
            if (!value.startsWith('7')) value = '7' + value;
            if (value.length > 11) value = value.substring(0, 11);
            let formatted = '+7';
            if (value.length > 1) formatted += ' ' + value.substring(1, 4);
            if (value.length > 4) formatted += ' ' + value.substring(4, 7);
            if (value.length > 7) formatted += ' ' + value.substring(7, 9);
            if (value.length > 9) formatted += ' ' + value.substring(9, 11);
            this.value = formatted.trim();
        });
        phoneInput.addEventListener('focus', function() {
            if (!this.value || this.value === '') this.value = '+7 ';
        });
    }
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const selectedDateVal = dateInput ? dateInput.value : '';
        const selectedTimeVal = timeInput ? timeInput.value : '';
        const serviceSelect = document.getElementById('userService');
        const selectedService = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex]?.text : '';
        const comment = commentTextarea ? commentTextarea.value : '';
        
        if (!name) { alert('Введите имя'); return; }
        if (!phone || phone.replace(/\D/g, '').length !== 11) { alert('Введите корректный номер телефона (+7 XXX XXX XX XX)'); return; }
        if (!selectedDateVal) { alert('Выберите дату'); return; }
        if (!selectedTimeVal) { alert('Выберите время'); return; }
        if (!selectedService) { alert('Выберите услугу'); return; }
        
        if (bookedSlots[`${selectedDateVal}_${selectedTimeVal}`]) {
            alert('Это время уже занято. Пожалуйста, выберите другое время.');
            return;
        }
        
        const bookingData = { date: selectedDateVal, time: selectedTimeVal, name, phone, service: selectedService, comment };
        await sendToGoogleSheets(bookingData);
        
        bookedSlots[`${selectedDateVal}_${selectedTimeVal}`] = true;
        localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));
        
        const formattedDate = new Date(selectedDateVal).toLocaleDateString('ru-RU', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
        
        alert(`Спасибо, ${name}!\n\nВы записаны на:\n📅 ${formattedDate}\n⏰ ${selectedTimeVal}\n💇 ${selectedService}\n\nЖдём вас!`);
        
        form.reset();
        if (phoneInput) phoneInput.value = '+7 ';
        selectedDate = null;
        if (dateInput) dateInput.value = '';
        if (timeInput) timeInput.value = '';
        renderCalendar();
        renderTimeSlots();
        const statusDiv = document.getElementById('timeSlotStatus');
        if (statusDiv) statusDiv.style.display = 'none';
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
            if (currentScroll > heroHeight + 100) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        } else {
            header.classList.remove('visible', 'scrolled');
        }
    });
}

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
            if (i === activeDot) dots[i].classList.add('active');
            else dots[i].classList.remove('active');
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
                if (current >= cards.length) current = Math.max(0, cards.length - visible);
                update();
            });
            dotsContainer.appendChild(dot);
        }
    }
    prev.onclick = function() { current = current - visible >= 0 ? current - visible : Math.max(0, cards.length - visible); update(); };
    next.onclick = function() { current = current + visible < cards.length ? current + visible : 0; update(); };
    window.addEventListener('resize', function() { visible = window.innerWidth <= 768 ? 1 : 2; current = 0; createDots(); update(); });
    createDots(); update();
}

function initInteriorSlider() {
    const slider = document.getElementById('interiorSlider');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const dotsContainer = document.getElementById('sliderDots');
    if (!slider || !prevBtn || !nextBtn) return;
    const slides = slider.querySelectorAll('.slide');
    if (slides.length === 0) return;
    let currentIndex = 0;
    const totalSlides = slides.length;
    function updateSlider() { slider.style.transform = 'translateX(' + (-currentIndex * 100) + '%)'; updateDots(); }
    function updateDots() {
        if (!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('.dot');
        for (let i = 0; i < dots.length; i++) {
            if (i === currentIndex) dots[i].classList.add('active');
            else dots[i].classList.remove('active');
        }
    }
    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', function() { currentIndex = i; updateSlider(); });
            dotsContainer.appendChild(dot);
        }
    }
    prevBtn.onclick = function() { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateSlider(); };
    nextBtn.onclick = function() { currentIndex = (currentIndex + 1) % totalSlides; updateSlider(); };
    createDots(); updateSlider();
    let touchStartX = 0;
    slider.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; });
    slider.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) currentIndex = (currentIndex + 1) % totalSlides;
        else if (touchEndX > touchStartX + 50) currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
}

function initModalsClose() {
    const closeButtons = document.querySelectorAll('.close-photo');
    for (let i = 0; i < closeButtons.length; i++) { closeButtons[i].onclick = function() { closeServicePhotoModal(); }; }
    window.onclick = function(event) { const serviceModal = document.getElementById('servicePhotoModal'); if (event.target === serviceModal) closeServicePhotoModal(); };
}

function initReviewImageZoom() {
    const clickableImages = document.querySelectorAll('.review-img-clickable');
    const modal = document.getElementById('reviewPhotoModal');
    const modalImg = document.getElementById('reviewPhotoImg');
    if (!modal || !modalImg) return;
    function closeReviewPhotoModal() { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
    for (let i = 0; i < clickableImages.length; i++) {
        clickableImages[i].onclick = function(e) {
            e.stopPropagation();
            const imgSrc = this.getAttribute('data-review-img');
            if (imgSrc) { modalImg.src = imgSrc; modal.style.display = 'block'; document.body.style.overflow = 'hidden'; }
        };
    }
    const closeBtn = document.querySelector('.close-review-photo');
    if (closeBtn) closeBtn.onclick = closeReviewPhotoModal;
    window.onclick = function(event) { if (event.target === modal) closeReviewPhotoModal(); };
}

document.addEventListener('DOMContentLoaded', function() {
    initBurgerMenu();
    initSmoothScroll();
    initLogoLink();
    initServiceButtons();
    initTipsButtons();
    initBookingForm();
    initHeaderVisibility();
    initReviewsSlider();
    initInteriorSlider();
    initModalsClose();
    initReviewImageZoom();
});
