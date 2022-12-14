<?

  // Читаем куку языка
  $lang = @$_COOKIE['lang'];
  if (!$lang) {
    // Если куки нет, ставим дефолтную
    // Ещё лучше - определять язык пользователя автоматически
    $lang = 'ru';
  }

  $titleRU = 'Дизайн-бюро Артёма Горбунова';
  $titleEN = 'Artem Gorbunov Design Bureau';

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">

  <!-- Заголовок в зависимости от языка -->
  <title><?= $lang == 'ru' ? $titleRU : $titleEN; ?></title>

  <meta name="title-ru" content="<?= $titleRU; ?>" id="title-ru">
  <meta name="title-en" content="<?= $titleEN; ?>" id="title-en">

  <style>
      /*
      .en :lang(ru),
      .ru :lang(en) {
        display: none;
      }
      */
      /*
      .en *[lang=ru],
      .ru *[lang=en] {
        display: none
      }
      */

      /* Скрываем "не тот" язык */
    .en .ru,
    .ru .en {
      display: none;
    }

      /* Переключалки языка */
    .lang-switcher {
      border-bottom: 1px dashed;
      cursor: pointer;
    }
    .lang-switcher:hover {
      color: #b33;
    }
      /* Выделяем активную переключалку тоже с помощью классов родителя */
    .en .lang-switcher--en,
    .ru .lang-switcher--ru {
      color: #000;
      border-bottom: none;
      font-weight: bold;
      cursor: default;
    }

      /* Оформление страницы */
    body {
      font-family: Verdana, Arial, sans-serif;
      font-size: 13px;
      line-height: 16px;
    }

    A.back {
      text-decoration: none;
    }

    A.back U {
      text-decoration: underline;
    }

    A:link {
      color: #0c4f72;
    }

    A:hover {
      color: #b33;
    }

    .text {
      max-width: 45em;
    }
  </style>
</head>

<body class="<?= $lang; ?>">

<p>
  <a class="back" href="../../">&larr; <u>Совет 02.08.2012</u></a>
</p>

<br><br>

<p>Смените язык и обновите страницу, язык будет сохранён:</p>

<div>
  <span class="lang-switcher lang-switcher--ru" id="switcher-ru">RU</span>
  <span class="lang-switcher lang-switcher--en" id="switcher-en">EN</span>
</div>

<br>

<div class="text">
  <div class="ru" lang="ru">
    <h1>О ООО</h1>
    <p>Дизайн-бюро Артёма Горбунова занимается дизайном информационных сайтов и&nbsp;интранетов, проектированием пользовательских интерфейсов компьютерных программ, приборов и&nbsp;предметов. Бюро разрабатывает системы навигации в&nbsp;общественных местах.</p>
    <p>Дизайн пользовательского интерфейса&nbsp;—
      самая передовая область коммерческого дизайна, которая определяет успех или неудачу современных высокотехнологичных продуктов. Компании, которые это пока не&nbsp;осознали,
      не&nbsp;успели стать нашими клиентами.</p>
    <p>Наш конёк&nbsp;— представление сложной по&nbsp;содержанию и&nbsp;структуре информации
      в&nbsp;форме, максимально способствующей восприятию и&nbsp;анализу, избегающей двусмысленностей, многословности, текстового и&nbsp;графического шума. Это не&nbsp;мешает нам создавать современный дизайн, решающий бизнес-задачи клиентов. Красота информационного дизайна рождается при одинаково бережном внимании к&nbsp;форме и&nbsp;содержанию.
      Мы применяем наши принципы дизайна к&nbsp;любому носителю информации&nbsp;— будь то веб-страница, экран мобильного телефона, разворот буклета или схема здания для посетителей.</p>
    <p>Бюро не&nbsp;делает полуфабрикатов и&nbsp;прототипов, потому что мы хотим
      отвечать за&nbsp;результат и&nbsp;увидеть под ним свою подпись.
      Поэтому во&nbsp;всех наших проектах создается конечный дизайн,
      готовый к&nbsp;внедрению.</p>
    <br>
    <p>Опыт основателя бюро Артёма Горбунова используется при разработке
      образовательных программ в&nbsp;области информационного дизайна и&nbsp;пользовательского интерфейса&nbsp;— в&nbsp;2007 году
      открыт Учебный центр Артёма&nbsp;Горбунова.</p>
  </div>

  <div class="en" lang="en">
    <h1>In the сompany’s сompany</h1>
    <p>Artem Gorbunov Design Bureau creates information-rich websites and intranets, human interface of&nbsp;software, gadgets and electronic devices. The bureau also develops wayfinding systems at&nbsp;public venues. </p>
    <p>Human inteface is&nbsp;the most progressive area of&nbsp;commercial design. It&nbsp;determines success or&nbsp;failure of&nbsp;today’s high-tech products. Companies unfamiliar with that notion haven’t yet become our clients.</p>
    <p>We&nbsp;are good at&nbsp;delivering complex and rich information in&nbsp;forms that help its perception and analysis, avoiding ambiguity, wordiness, visual clutter and chartjunk. This still allows&nbsp;us to&nbsp;create modern designs that suit the client’s business needs. The beauty of&nbsp;information design is&nbsp;born in&nbsp;careful work with both form and content. We&nbsp;apply our design principles to&nbsp;any medium: be&nbsp;that a&nbsp;web page, a&nbsp;screen of&nbsp;a&nbsp;mobile phone, a&nbsp;floor plan, a&nbsp;trade center directory or&nbsp;a&nbsp;booklet.</p>
    <p>We&nbsp;strive to&nbsp;go&nbsp;beyond designing isolated objects or&nbsp;interfaces. Our main interest lays in&nbsp;creating efficient systems that make identity, gadgets, interfaces and services work together for businesses and customers. This multi-faceted approach lets&nbsp;us solve problems outside the reach of&nbsp;a&nbsp;single identity studio or&nbsp;a&nbsp;dedicated usability team.</p>
    <br>
    <p>The experience of&nbsp;bureau’s founder Artem Gorbunov is&nbsp;used at&nbsp;developing training programs in&nbsp;information design and human interface. Artem Gorbunov’s Training Center opened in&nbsp;2007.</p>
  </div>

  <p>
    <a href="">Скачайте lang.php</a> для изучения
  </p>
</div>

<br><br>

<script>
  (function(){
    var body = document.getElementsByTagName('body')[0];

    var switcherRU = document.getElementById('switcher-ru');
    var switcherEN = document.getElementById('switcher-en');

    // Заранее считаем срок хранения кук
    var expires = new Date();
    expires.setDate(expires.getDate() + 366);
    expires.toUTCString();

    // Русский и английский заголовки
    var titleRU = document.getElementById('title-ru');
    var titleEN = document.getElementById('title-en');
    var title = {
      ru: titleRU.getAttribute('content'),
      en: titleEN.getAttribute('content')
    }

    var switchLang = function() {
      var lang = this.id
      lang = lang.replace('switcher-', '');

      // Меняем класс для BODY
      body.className = lang;

      // Записываем куки
      document.cookie = [
        'lang=' + lang
        ,'; expires=' + expires // используем expires, max-age не поддерживается в ИЕ
        ,'; path=/'
        ,'; domain=' + document.location.host
      ].join('');
      document.title = title[lang];
    }

    switcherRU.onclick = switchLang;
    switcherEN.onclick = switchLang;
  })();
</script>

</body>
</html>