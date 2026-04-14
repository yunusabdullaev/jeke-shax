// ===== TELEGRAM CONFIG =====
const TELEGRAM_BOT_TOKEN = '8685067957:AAGWyh_KHE_c9cXFIUO32f8CxAMppxN6ssk';
const TELEGRAM_CHAT_ID = ''; // TO BE FILLED - send /start to bot first

const translations = {
    uz: {
        "nav.home": "Asosiy",
        "nav.about": "Biz haqimizda",
        "nav.portfolio": "Loyihalarimiz",
        "nav.contact": "Bog'lanish",
        "hero.title": "Raqamli kelajakni <br> <span class='gradient-text'>biz bilan quring</span>",
        "hero.subtitle": "\"Jeke Shaq\" IT Kompaniyasi - biznesingizni yangi bosqichga olib chiquvchi zamonaviy texnologik mahsulotlar va xizmatlar.",
        "btn.portfolio": "Loyihalarni ko'rish",
        "btn.contact": "Bog'lanish",
        "about.title": "Kompaniya <span class='gradient-text'>Haqida</span>",
        "about.subtitle": "Innovatsion g'oyalarni raqamli voqelikka aylantiramiz",
        "about.card1.title": "Zamonaviy yondashuv",
        "about.card1.desc": "Eng so'nggi texnologiyalardan foydalangan holda barqaror, xavfsiz va tezkor loyihalar yaratamiz.",
        "about.card2.title": "Sifat va aniqlik",
        "about.card2.desc": "Har bir loyihamizda foydalanuvchilar qulayligi va biznes talablariga alohida e'tibor qaratamiz.",
        "about.card3.title": "Kreativ dizayn",
        "about.card3.desc": "Foydalanishga qulay va vizual jihatdan mukammal bo'lgan premium darajadagi foydalanuvchi interfeyslari (UI/UX).",
        "portfolio.title": "Bizning <span class='gradient-text'>Loyihalar</span>",
        "portfolio.subtitle": "Biz yaratgan muvaffaqiyatli xizmatlar va mahsulotlar bilan tanishing",
        "portfolio.fermark.cat": "Bozor Platformasi",
        "portfolio.fermark.desc": "Fermerlar va xaridorlarni vositachisiz to'g'ridan-to'g'ri bog'lovchi zamonaviy qishloq xo'jaligi bozori, Android va iOS ilovalar.",
        "portfolio.etaklifnoma.cat": "SaaS Xizmat",
        "portfolio.etaklifnoma.desc": "To'y, yubiley va boshqa tadbirlar uchun zamonaviy, interaktiv va ko'p tilli onlayn taklifnomalar yaratuvchi platforma.",
        "portfolio.crm.cat": "B2B Tizim",
        "portfolio.crm.desc": "Klinikalar va tibbiyot markazlarini oson boshqarish, monitoring qilish uchun Multi-tenant CRM tizimi va iOS kliyenti.",
        "btn.visit": "Saytga o'tish",
        "contact.title": "Birgalikda yangi <br><span class='gradient-text'>loyihalarni yaratamiz</span>",
        "contact.subtitle": "Biznesingiz uchun eng yaxshi va zamonaviy IT yechimni qidiryapsizmi? Biz bilan hoziroq bog'laning!",
        "contact.name": "Ismingiz",
        "contact.phone": "Telefon raqamingiz",
        "contact.message": "Xabaringiz",
        "btn.send": "Yuborish",
        "footer.rights": "© 2026 Jeke Shaq IT Kompaniyasi. <br>Barcha huquqlar himoyalangan."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "hero.title": "Build the digital future <br> <span class='gradient-text'>with us</span>",
        "hero.subtitle": "\"Jeke Shaq\" IT Company - modern technological products and services taking your business to the next level.",
        "btn.portfolio": "View Portfolio",
        "btn.contact": "Contact Us",
        "about.title": "<span class='gradient-text'>About</span> Company",
        "about.subtitle": "Turning innovative ideas into digital reality",
        "about.card1.title": "Modern Approach",
        "about.card1.desc": "We build stable, secure, and fast projects using the latest technologies.",
        "about.card2.title": "Quality and Precision",
        "about.card2.desc": "We pay special attention to user convenience and business requirements in every project.",
        "about.card3.title": "Creative Design",
        "about.card3.desc": "User-friendly and visually perfect premium user interfaces (UI/UX).",
        "portfolio.title": "Our <span class='gradient-text'>Projects</span>",
        "portfolio.subtitle": "Check out the successful services and products we have created",
        "portfolio.fermark.cat": "Marketplace",
        "portfolio.fermark.desc": "Modern agricultural marketplace directly connecting farmers and buyers without intermediaries, Android and iOS apps.",
        "portfolio.etaklifnoma.cat": "SaaS Service",
        "portfolio.etaklifnoma.desc": "Platform for creating modern, interactive, and multilingual online invitations for weddings, anniversaries, and other events.",
        "portfolio.crm.cat": "B2B System",
        "portfolio.crm.desc": "Multi-tenant CRM system and iOS client for easy management and monitoring of clinics and medical centers.",
        "btn.visit": "Visit Site",
        "contact.title": "Let's create new <br><span class='gradient-text'>projects together</span>",
        "contact.subtitle": "Looking for the best and most modern IT solution for your business? Contact us right now!",
        "contact.name": "Your Name",
        "contact.phone": "Phone Number",
        "contact.message": "Your Message",
        "btn.send": "Send Message",
        "footer.rights": "© 2026 Jeke Shaq IT Company. <br>All rights reserved."
    },
    ru: {
        "nav.home": "Главная",
        "nav.about": "О нас",
        "nav.portfolio": "Проекты",
        "nav.contact": "Контакты",
        "hero.title": "Стройте цифровое будущее <br> <span class='gradient-text'>вместе с нами</span>",
        "hero.subtitle": "IT-компания «Jeke Shaq» — современные технологические продукты и услуги, выводящие ваш бизнес на новый уровень.",
        "btn.portfolio": "Смотреть проекты",
        "btn.contact": "Связаться",
        "about.title": "<span class='gradient-text'>О</span> Компании",
        "about.subtitle": "Превращаем инновационные идеи в цифровую реальность",
        "about.card1.title": "Современный подход",
        "about.card1.desc": "Мы создаем стабильные, безопасные и быстрые проекты, используя новейшие технологии.",
        "about.card2.title": "Качество и точность",
        "about.card2.desc": "В каждом проекте мы уделяем особое внимание удобству пользователей и требованиям бизнеса.",
        "about.card3.title": "Креативный дизайн",
        "about.card3.desc": "Удобные и визуально идеальные пользовательские интерфейсы (UI/UX) премиум-класса.",
        "portfolio.title": "Наши <span class='gradient-text'>Проекты</span>",
        "portfolio.subtitle": "Ознакомьтесь с успешными сервисами и продуктами, которые мы создали",
        "portfolio.fermark.cat": "Маркетплейс",
        "portfolio.fermark.desc": "Современный сельскохозяйственный маркетплейс, напрямую соединяющий фермеров и покупателей без посредников, приложения для Android и iOS.",
        "portfolio.etaklifnoma.cat": "SaaS Сервис",
        "portfolio.etaklifnoma.desc": "Платформа для создания современных, интерактивных и многоязычных онлайн-приглашений на свадьбы, юбилеи и другие мероприятия.",
        "portfolio.crm.cat": "B2B Система",
        "portfolio.crm.desc": "Мультитенантная CRM-система и iOS-клиент для удобного управления и мониторинга клиник и медицинских центров.",
        "btn.visit": "Перейти на сайт",
        "contact.title": "Давайте создавать новые <br><span class='gradient-text'>проекты вместе</span>",
        "contact.subtitle": "Ищете лучшее и современное IT-решение для своего бизнеса? Свяжитесь с нами прямо сейчас!",
        "contact.name": "Ваше имя",
        "contact.phone": "Номер телефона",
        "contact.message": "Ваше сообщение",
        "btn.send": "Отправить",
        "footer.rights": "© 2026 IT-компания Jeke Shaq. <br>Все права защищены."
    }
};

// Navbar scoll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navRight = document.querySelector('.nav-right');

menuBtn.addEventListener('click', () => {
    navRight.classList.toggle('active');
    
    // Animate hamburger
    const spans = menuBtn.querySelectorAll('span');
    if (navRight.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navRight.classList.remove('active');
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add initial styles for animation and observe
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.about-card, .project-card, .section-header, .contact-content > div:first-child, .contact-form').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index % 3 * 0.1}s`;
        observer.observe(el);
    });
    
    // Initial load language setup
    const savedLang = localStorage.getItem('lang') || 'uz';
    switchLanguage(savedLang);
});

// Translation Logic
function switchLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    // update buttons state
    document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// ===== CONTACT FORM -> TELEGRAM =====
async function sendToTelegram(name, phone, message) {
    const text = `🔔 <b>Yangi xabar | Jeke Shaq sayt</b>\n\n👤 <b>Ism:</b> ${name}\n📞 <b>Telefon:</b> ${phone}\n💬 <b>Xabar:</b> ${message}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'HTML'
        })
    });
    return res.ok;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type=submit]');
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        btn.disabled = true;
        btn.textContent = '⏳ Yuborilmoqda...';

        try {
            const ok = await sendToTelegram(name, phone, message);
            if (ok) {
                btn.textContent = '✅ Yuborildi!';
                btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
                form.reset();
            } else {
                throw new Error('fail');
            }
        } catch {
            btn.textContent = '❌ Xatolik. Qayta urining';
            btn.style.background = 'linear-gradient(135deg,#ef4444,#b91c1c)';
        }

        setTimeout(() => {
            btn.disabled = false;
            btn.style.background = '';
            const lang = localStorage.getItem('lang') || 'uz';
            btn.textContent = translations[lang]['btn.send'] || 'Yuborish';
        }, 3500);
    });
});
