if (localStorage.getItem("lang") == null) {
    var system_lang = navigator.language || navigator.userLanguage;
    if (system_lang !== 'ru') {
        localStorage.getItem('lang', 'en');
    }
}

function new_lang() {
    if (localStorage.getItem('lang') == "en") {
        localStorage.setItem('lang', "ru");
        lang_ru();
    } else {
        localStorage.setItem('lang', "en");
        lang_en();
    }
}

if (localStorage.getItem('lang') == "en") {
    lang_en();
} else {
    lang_ru();
}

function lang_ru() {
    document.documentElement.lang = 'ru';
    document.title = "Данияр Богданов";
    
    // menu
    document.getElementById('home_menu').innerHTML = 'Обо мне'; document.getElementById('mmenu1').innerHTML = 'Обо мне';
    document.getElementById('pf_menu').innerHTML = 'Проекты'; document.getElementById('mmenu2').innerHTML = 'Проекты';
    document.getElementById('contact_menu').innerHTML = 'Связаться'; document.getElementById('mmenu3').innerHTML = 'Связаться';
    // main block
    document.getElementById('hello').innerHTML = 'Привет!';
    document.getElementById('name').innerHTML = 'Меня зовут Данияр,';
    document.getElementById('i').innerHTML = 'Я &mdash; ';
    document.getElementById('webdev_bg').innerHTML = 'веб-разработчик';

    // projects block
    document.getElementById('name_pr_ru').style.display = 'block';
    document.getElementById('name_pr_en').style.display = 'none';
    document.getElementById('pr_button').innerHTML = 'ЕЩЁ';

    // about me block
    document.getElementById('name_ab_ru').style.display = 'block';
    document.getElementById('name_ab_en').style.display = 'none';
    document.getElementById('about_me_text').innerHTML = 'Я занимаюсь разработкой сайтов под ключ. Специализируюсь на создании сайтов-визиток для бизнеса. В свободное время реализую личные проекты и веду свой <a class="ab_link" href="https://t.me/webmentor" target="_blank">Телеграм канал</a> по веб-разработке.';
    document.getElementById('ab_table').src="img/ru_table.svg";
    document.getElementById('table_text').innerHTML = 'При необходимости я всегда готов изучить что-то новое :)';

    // contact me block
    document.getElementById('name_ct').src="img/contact_ru.svg";
    document.getElementById('ct_text').innerHTML = 'Напишите мне, обсудим проект и составим план.';

    // styles
    document.getElementById('link_anim').href ="css/anim_ru.css";
    document.getElementById('lang_lang').innerHTML = 'EN';
}

function lang_en() {
    document.documentElement.lang = 'en';
    document.title = "Dani Yar";

    // menu 
    document.getElementById('home_menu').innerHTML = 'About me'; document.getElementById('mmenu1').innerHTML = 'About me';
    document.getElementById('pf_menu').innerHTML = 'Projects'; document.getElementById('mmenu2').innerHTML = 'Projects';
    document.getElementById('contact_menu').innerHTML = 'Contact me'; document.getElementById('mmenu3').innerHTML = 'Contact me';

    // main block
    document.getElementById('hello').innerHTML = 'Hello!';
    document.getElementById('name').innerHTML = 'My name is Dani Yar,';
    document.getElementById('i').innerHTML = 'I am a ';
    document.getElementById('webdev_bg').innerHTML = 'web developer';

    // projects block
    document.getElementById('name_pr_en').style.display = 'block';
    document.getElementById('name_pr_ru').style.display = 'none';
    document.getElementById('pr_button').innerHTML = 'MORE';

    // about me block
    document.getElementById('name_ab_en').style.display = 'block';
    document.getElementById('name_ab_ru').style.display = 'none';
    document.getElementById('about_me_text').innerHTML = 'I am developing websites on a turnkey basis. I specialize in creating business card websites. In my free time, I implement personal projects and run my <a class="ab_link" href="https://t.me/webmentor" target="_blank">Telegram channel</a> for web development.';
    document.getElementById('ab_table').src="img/en_table.svg";
    document.getElementById('table_text').innerHTML = "I'm always willing to learn something new if needed :)";

    // contact me block
    document.getElementById('name_ct').src="img/contact_en.svg";
    document.getElementById('ct_text').innerHTML = 'Write to me if you want to inform about your project.';

    // styles
    document.getElementById('link_anim').href ="css/anim_en.css";
    document.getElementById('lang_lang').innerHTML = 'RU';
}
