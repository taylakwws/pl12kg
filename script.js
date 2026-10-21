    const translations = {
      ru: {
        siteTitle: 'Профессиональный лицей №12',
        'nav.home': 'Главная',
        'nav.department': 'Отделение',
        'nav.department.center': 'Центр передового опыта',
        'nav.department.humanities': 'Отделение гуманитарно-педагогических специальностей',
        'nav.department.technical': 'Отделение технических специальностей',
        'nav.department.retraining': 'Отделение повышения и переквалификации преподавателей',
        'nav.international': 'Международные связи',
        'nav.contacts': 'Контакты',
        'nav.about': 'Сми о нас',
        'nav.college': 'Лицей',
        'sidebar.license': 'Лицензия, сертификаты',
        'sidebar.staff': 'Сотрудники',
        'sidebar.history': 'История',
        'sidebar.admission': 'Абитуриент',
        'sidebar.engineering': 'Инженерно-педагогический состав',
        'sidebar.accreditation': 'Аккредитация',
        'sidebar.normdocs': 'Нормативные документы',
        'sidebar.mtb': 'МТБ',
        'sidebar.students': 'Учащимся',
        'heroBanner': '"',
        'directorLabel': 'Директор',
        'directorName': 'Калмаматов Бакалбай Айтиевич',
        'mini.camera': 'Съемка',
        'mini.gallery': 'Галерея',
        'news.title': 'Новости',
        'news.item1.caption': '...',
        'news.item2.caption': '...',
        'news.item3.caption': '...',
        'news.item4.caption': '...',
        'announcements.title': 'Объявления',
        'announcements.item1': '...',
        'announcements.item2': '...',
        'announcements.item3': '...',
        'announcements.item4': '...',
        'media.title': 'Фотоальбомы',
        'media.item1.caption': '...',
        'media.item2.caption': '...',
        'media.videoTitle': 'Видеозаписи',
        'media.video1.caption': '...',
        'footer.contactsTitle': 'Контакты',
        'footer.address1': 'Кыргызстан, 723500, г. Ош,',
        'footer.address2': 'ул. Осконалиева, 1,',
        'footer.address3': 'Профессиональный лицей №12',
        'footer.address4': 'Ошского Государственного университета',
        'footer.dept': 'Общий отдел: ...',
        'footer.fax': 'факс ...',
        'footer.pressTitle': 'Пресс-служба',
        'footer.admissionTitle': 'Приемная комиссия',
        'footer.info1': 'Ошский Государственный Университет',
        'footer.info2': 'Официальный сайт',
        'footer.info3': 'Профессиональный лицей №12'
      },
      kg: {
        siteTitle: '№12 кесиптик лицей',
        'nav.home': 'Башкы бет',
        'nav.department': 'Бөлүм',
        'nav.department.center': 'Алдыңкы тажрыйба борбору',
        'nav.department.humanities': 'Гуманитардык-педагогикалык адистиктер бөлүмү',
        'nav.department.technical': 'Техникалык адистиктер бөлүмү',
        'nav.department.retraining': 'Мугалимдердин квалификациясын жогорулатуу жана кайра даярдоо бөлүмү',
        'nav.international': 'Эл аралык байланыштар',
        'nav.contacts': 'Байланыштар',
        'nav.about': 'Биз жөнүндө СМИ',
        'nav.college': 'Лицей',
        'sidebar.license': 'Лицензия, сертификаттар',
        'sidebar.staff': 'Кызматкерлер',
        'sidebar.history': 'Тарыхы',
        'sidebar.admission': 'Абитуриент',
        'sidebar.engineering': 'Инженердик-педагогикалык курам',
        'sidebar.accreditation': 'Аккредитация',
        'sidebar.normdocs': 'Ченемдик документтер',
        'sidebar.mtb': 'МТБ',
        'sidebar.students': 'Окуучуларга',
        'heroBanner': '"',
        'directorLabel': 'Директор',
        'directorName': 'Калмаматов Бакалбай Айтиевич',
        'mini.camera': 'Сүрөт',
        'mini.gallery': 'Галерея',
        'news.title': 'Жаңылыктар',
        'news.item1.caption': '...',
        'news.item2.caption': '...',
        'news.item3.caption': '...',
        'news.item4.caption': '...',
        'announcements.title': 'Жарыялар',
        'announcements.item1': '...',
        'announcements.item2': '...',
        'announcements.item3': '...',
        'announcements.item4': '...',
        'media.title': 'Фотоальбомдор',
        'media.item1.caption': '...',
        'media.item2.caption': '...',
        'media.videoTitle': 'Окуу жайдын видеолору',
        'media.video1.caption': '...',
        'footer.contactsTitle': 'Байланыш',
        'footer.address1': 'Кыргызстан, 723500, Ош шаары,',
        'footer.address2': 'Осконалиев көчөсү, 1,',
        'footer.address3': 'Ош Мамлекеттик университетинин',
        'footer.address4': '№12 кесиптик лицейи',
        'footer.dept': 'Жалпы бөлүм: ...',
        'footer.fax': 'факс ...',
        'footer.pressTitle': 'Басма сөз кызматы',
        'footer.admissionTitle': 'Кабыл алуу комиссиясы',
        'footer.info1': 'Ош Мамлекеттик Университети',
        'footer.info2': 'Расмий сайт',
        'footer.info3': '№12 кесиптик лицей'
      }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const elements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
      const current = translations[lang];
      elements.forEach((element) => {
        const key = element.dataset.i18n;
        if (current[key]) {
          element.textContent = current[key];
        }
      });

      langButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.lang === lang);
      });

      document.documentElement.lang = lang;
    }

    langButtons.forEach((button) => {
      button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    const slides = [...document.querySelectorAll('.slide')];
    const dots = [...document.querySelectorAll('.dot')];
    let activeSlide = 0;

    function showSlide(index) {
      activeSlide = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('active', i === activeSlide));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === activeSlide));
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    setInterval(() => showSlide(activeSlide + 1), 4000);