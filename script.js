/* ==========================================================================
   ПРОЕКТ «СПЕКТАКЛЬ» — script.js
   Структура файла (для будущего разделения на модули):
   NAVIGATION / PRELOADER / CHARACTERS / TIMELINE / LOCATIONS /
   CASE FILES (MATERIALS) / BOARD / MODALS / SECRET ELEMENTS / INIT
   ========================================================================== */

(function () {
  "use strict";

  /* ======================================================================
     DATA — легко расширяемые массивы. Позднее выносятся в отдельные файлы
     (characters.js, timeline.js, locations.js, materials.js)
     ====================================================================== */

  // CHARACTERS
  const characters = [
    {
      id: "SP-04-118",
      name: "Ветров",
      status: "В деле",
      role: "Ведёт расследование",
      brief: "Человек, который задаёт вопросы там, где все давно согласились молчать. Наблюдателен, методичен, слишком упорен для собственной безопасности.",
      full: "Появляется в деле не по назначению, а по совпадению — если совпадениям в этой истории вообще можно верить. Изучает материалы медленнее, чем требует ситуация, и быстрее, чем хотелось бы тем, кто эту ситуацию создал. Досье дополняется."
    },
    {
      id: "SP-01-002",
      name: "Лавров Борис Андреевич",
      status: "Фигурант",
      role: "Центральная фигура дела",
      brief: "Фигура, вокруг которой выстроена вся конструкция «Спектакля». Публично — один человек. В материалах дела — несколько версий одного человека.",
      full: "Каждый, кто говорит о Лаврове Борисе Андреевиче, описывает разного человека. Совпадает только одно: все они уверены, что знают его лучше остальных. Часть биографии подтверждена документально, часть — только устно, часть не подтверждена вовсе. Материал дополняется по мере поступления материалов."
    },
    {
      id: "SP-07-231",
      name: "Воронцов",
      status: "Наблюдение",
      role: "Связующее звено",
      brief: "Появляется в деле там, где, казалось бы, ему быть не следует. Слишком много знает для человека без официальной роли в происходящем.",
      full: "Формально не имеет отношения ни к одному из ключевых эпизодов дела. Фактически всплывает в каждом из них — на записи, в свидетельских показаниях, в чужих телефонных книгах. Является ли он частью замысла или его случайной жертвой — пока не установлено."
    },
    {
      id: "SP-00-000",
      name: "?????",
      status: "Не рассекречено",
      role: "Уровень доступа недостаточен",
      brief: "Материалы досье закрыты решением, принятым не следствием.",
      full: "Доступ к этому досье появится по мере развития дела. Проверьте позже — или дождитесь следующей главы."
    }
  ];

  // TIMELINE
  const timeline = [
    {
      ep: "ЭПИЗОД 01",
      title: "Получен материал",
      text: "Первый документ поступает в дело почти случайно — как случайно происходит всё, что впоследствии окажется спланированным. Никто ещё не понимает, что именно попало в руки следствия."
    },
    {
      ep: "ЭПИЗОД 02",
      title: "Обнаружена связь",
      text: "Два несвязанных на первый взгляд факта пересекаются в одной точке. Точка эта — не совпадение. Совпадений в деле «Спектакль», как окажется позже, не бывает вовсе."
    },
    {
      ep: "ЭПИЗОД 03",
      title: "След ведёт дальше",
      text: "Расследование выходит за границы, которые казались очевидными. Появляется ощущение, что за материалами дела стоит нечто большее, чем один эпизод и один город."
    },
    {
      ep: "ЭПИЗОД 04",
      title: "Материал не рассекречен",
      text: "Доступ к этому эпизоду закрыт. Появится по мере публикации следующих глав романа."
    }
  ];

  // LOCATIONS (MOSCOW)
  const locations = [
    {
      num: "МАТЕРИАЛ №014",
      title: "Никольская",
      caption: "Улица, где старая Москва делает вид, что не слышит новую.",
      text: "Одна из немногих улиц города, где прошлое и настоящее не спорят друг с другом, а существуют одновременно. Здесь начинается один из ключевых эпизодов дела — и здесь же он временно теряется из виду."
    },
    {
      num: "МАТЕРИАЛ №027",
      title: "Северная рампа",
      caption: "Место, которого формально нет на большинстве карт города.",
      text: "Название встречается в материалах дела чаще, чем в официальных документах Москвы. Что именно происходит на Северной рампе — и происходит ли вообще — установить пока не удалось."
    },
    {
      num: "МАТЕРИАЛ №033",
      title: "Кафе без названия",
      caption: "Столик у окна, за которым решают больше, чем за столом переговоров.",
      text: "Заведение, не значащееся ни в одном путеводителе, но фигурирующее в нескольких эпизодах дела. Постоянные посетители предпочитают не оставлять следов — но след всё же остаётся."
    },
    {
      num: "МАТЕРИАЛ №041",
      title: "Квартира на верхнем этаже",
      caption: "Адрес изъят из открытого доступа решением следствия.",
      text: "Место, где, по имеющимся данным, была принята часть решений, определивших ход дела. Точный адрес не публикуется. Материалы дополняются."
    }
  ];

  // CASE FILES (MATERIALS)
  const materials = [
    { num: "МАТЕРИАЛ №001", type: "Записка", title: "Без подписи", status: "open", text: "Три строки, написанные от руки. Почерк не установлен. Смысл — тем более." },
    { num: "МАТЕРИАЛ №002", type: "Фотография", title: "Снимок с Никольской", status: "open", text: "На обороте — дата, которая не совпадает с датой на самом снимке." },
    { num: "МАТЕРИАЛ №003", type: "Блокнот", title: "Страницы 12–14 вырваны", status: "open", text: "Оставшиеся записи носят характер расписания. Расписания чего — не указано." },
    { num: "МАТЕРИАЛ №004", type: "Номерок", title: "Гардеробный жетон №118", status: "locked", text: "МАТЕРИАЛ НЕ РАССЕКРЕЧЕН" },
    { num: "МАТЕРИАЛ №005", type: "Документ", title: "Выписка без печати", status: "locked", text: "ДОСТУП ЗАКРЫТ" },
    { num: "МАТЕРИАЛ №006", type: "Газетная вырезка", title: "Заметка на четвёртой полосе", status: "open", text: "Издание не подлежит проверке — тираж, вероятно, никогда не существовал." },
    { num: "МАТЕРИАЛ №007", type: "Аудиозапись", title: "37 секунд, фоновый шум", status: "locked", text: "МАТЕРИАЛ НЕ РАССЕКРЕЧЕН" },
    { num: "МАТЕРИАЛ №008", type: "Архивная справка", title: "Запрос отклонён", status: "locked", text: "ДОСТУП ЗАКРЫТ" }
  ];

  /* ======================================================================
     PRELOADER
     ====================================================================== */
  function initPreloader() {
    const preloader = document.getElementById("preloader");
    const lineEl = document.getElementById("preloaderLine");
    const statusEl = document.getElementById("preloaderStatus");
    if (!preloader) return;

    const alreadyShown = sessionStorage.getItem("spektakl_intro_shown");
    if (alreadyShown) {
      preloader.classList.add("hidden");
      preloader.style.display = "none";
      return;
    }

    const text = "Инициализация архива...";
    let i = 0;
    const typeSpeed = 34;

    function typeChar() {
      if (i <= text.length) {
        lineEl.textContent = text.slice(0, i);
        i++;
        setTimeout(typeChar, typeSpeed);
      } else {
        setTimeout(() => statusEl.classList.add("show"), 200);
        setTimeout(hidePreloader, 900);
      }
    }

    function hidePreloader() {
      preloader.classList.add("hidden");
      sessionStorage.setItem("spektakl_intro_shown", "1");
      setTimeout(() => { preloader.style.display = "none"; }, 700);
    }

    setTimeout(typeChar, 250);
  }

  /* ======================================================================
     NAVIGATION
     ====================================================================== */
  function initNavigation() {
    const nav = document.getElementById("mainNav");
    const burger = document.getElementById("navBurger");
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.querySelectorAll(".nav__link[data-section]");
    const mobileLinks = document.querySelectorAll(".mobile-menu a[data-section]");
    const sections = document.querySelectorAll("main section[id]");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-menu a").forEach((a) => {
      a.addEventListener("click", () => {
        burger.classList.remove("active");
        mobileMenu.classList.remove("open");
      });
    });

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((l) => l.classList.toggle("active", l.dataset.section === id));
            mobileLinks.forEach((l) => l.classList.toggle("active", l.dataset.section === id));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    window.addEventListener("scroll", () => {
      nav.style.background = window.scrollY > 40 ? "rgba(10, 11, 12, 0.92)" : "rgba(10, 11, 12, 0.72)";
    });
  }

  /* ======================================================================
     SCROLL REVEAL
     ====================================================================== */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
  }

  /* ======================================================================
     CHARACTERS
     ====================================================================== */
  function renderCharacters() {
    const grid = document.getElementById("charactersGrid");
    if (!grid) return;

    characters.forEach((c, idx) => {
      const card = document.createElement("div");
      card.className = "char-card reveal";
      card.style.transitionDelay = (idx * 0.06) + "s";
      const initial = c.name.charAt(0) === "?" ? "?" : c.name.charAt(0);
      card.innerHTML =
        '<div class="char-card__photo">' +
          '<span class="char-card__status-tag">' + c.status + '</span>' +
          '<span class="char-card__initial">' + initial + '</span>' +
        '</div>' +
        '<div class="char-card__body">' +
          '<div class="char-card__name">' + c.name + '</div>' +
          '<div class="char-card__role">' + c.role + '</div>' +
          '<p class="char-card__brief">' + c.brief + '</p>' +
          '<div class="char-card__dossier">ДОСЬЕ № ' + c.id + '</div>' +
        '</div>';
      card.addEventListener("click", () => openCharacterModal(c));
      grid.appendChild(card);
    });
  }

  function openCharacterModal(c) {
    const content = document.getElementById("characterModalContent");
    const initial = c.name.charAt(0) === "?" ? "?" : c.name.charAt(0);
    content.innerHTML =
      '<div class="dossier__header">' +
        '<div class="dossier__photo">' + initial + '</div>' +
        '<div>' +
          '<div class="dossier__name">' + c.name + '</div>' +
          '<div class="dossier__num">ДОСЬЕ № ' + c.id + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="dossier__row"><span class="dossier__row-label">СТАТУС</span><span class="dossier__row-value">' + c.status + '</span></div>' +
      '<div class="dossier__row"><span class="dossier__row-label">РОЛЬ В ДЕЛЕ</span><span class="dossier__row-value">' + c.role + '</span></div>' +
      '<p class="dossier__full">' + c.full + '</p>';
    openModal("characterModal");
  }

  /* ======================================================================
     TIMELINE
     ====================================================================== */
  function renderTimeline() {
    const list = document.getElementById("timelineList");
    if (!list) return;

    timeline.forEach((t, idx) => {
      const item = document.createElement("div");
      item.className = "timeline-item reveal";
      item.style.transitionDelay = (idx * 0.05) + "s";
      item.innerHTML =
        '<div class="timeline-item__dot"></div>' +
        '<div class="timeline-item__ep">' + t.ep + '</div>' +
        '<div class="timeline-item__title">' + t.title + '<span class="timeline-item__arrow">›</span></div>' +
        '<div class="timeline-item__body"><div class="timeline-item__body-inner">' + t.text + '</div></div>';
      item.addEventListener("click", () => item.classList.toggle("open"));
      list.appendChild(item);
    });
  }

  /* ======================================================================
     LOCATIONS (MOSCOW)
     ====================================================================== */
  function renderLocations() {
    const grid = document.getElementById("moscowGrid");
    if (!grid) return;

    locations.forEach((l, idx) => {
      const card = document.createElement("div");
      card.className = "loc-card reveal";
      card.style.transitionDelay = (idx * 0.06) + "s";
      card.innerHTML =
        '<div class="loc-card__img"></div>' +
        '<div class="loc-card__overlay">' +
          '<div class="loc-card__num">' + l.num + '</div>' +
          '<div class="loc-card__title">' + l.title + '</div>' +
          '<div class="loc-card__caption">' + l.caption + '</div>' +
        '</div>';
      card.addEventListener("click", () => openLocationModal(l));
      grid.appendChild(card);
    });
  }

  function openLocationModal(l) {
    const content = document.getElementById("locationModalContent");
    content.innerHTML =
      '<div class="loc-modal__num">' + l.num + '</div>' +
      '<div class="loc-modal__title">' + l.title + '</div>' +
      '<div class="loc-modal__img"></div>' +
      '<p class="loc-modal__text">' + l.text + '</p>';
    openModal("locationModal");
  }

  /* ======================================================================
     CASE FILES (MATERIALS)
     ====================================================================== */
  function renderMaterials() {
    const grid = document.getElementById("materialsGrid");
    if (!grid) return;

    materials.forEach((m, idx) => {
      const card = document.createElement("div");
      card.className = "material-card reveal";
      card.style.transitionDelay = (idx * 0.04) + "s";
      const isLocked = m.status === "locked";
      card.innerHTML =
        '<div class="material-card__num">' + m.num + '</div>' +
        '<div class="material-card__type">' + m.type + '</div>' +
        '<div class="material-card__title">' + m.title + '</div>' +
        '<span class="material-card__status' + (isLocked ? ' material-card__status--locked' : '') + '">' +
          (isLocked ? 'ДОСТУП ЗАКРЫТ' : 'ДОСТУПНО') +
        '</span>';
      card.addEventListener("click", () => openMaterialModal(m));
      grid.appendChild(card);
    });
  }

  function openMaterialModal(m) {
    const content = document.getElementById("materialModalContent");
    const isLocked = m.status === "locked";
    content.innerHTML =
      '<div class="mat-modal__num">' + m.num + ' · ' + m.type.toUpperCase() + '</div>' +
      '<div class="mat-modal__title">' + m.title + '</div>' +
      (isLocked
        ? '<p class="mat-modal__locked">' + m.text + '</p>'
        : '<p class="mat-modal__text">' + m.text + '</p>');
    openModal("materialModal");
  }

  /* ======================================================================
     BOARD — доска расследования со связями
     ====================================================================== */
  function renderBoard() {
    const nodesWrap = document.getElementById("boardNodes");
    const svg = document.getElementById("boardLines");
    if (!nodesWrap || !svg) return;

    const nodes = [
      { label: "ВЕТРОВ", x: 8, y: 10, rot: -2 },
      { label: "ЛАВРОВ Б.А.", x: 62, y: 6, rot: 3 },
      { label: "ВОРОНЦОВ", x: 34, y: 46, rot: -1 },
      { label: "НИКОЛЬСКАЯ", x: 4, y: 72, rot: 2 },
      { label: "СЕВЕРНАЯ РАМПА", x: 70, y: 60, rot: -3 },
      { label: "МАТЕРИАЛ №004", x: 46, y: 8, rot: 1 }
    ];

    const connections = [
      [0, 2], [1, 2], [2, 3], [2, 4], [1, 5], [0, 5]
    ];

    nodes.forEach((n, i) => {
      const el = document.createElement("div");
      el.className = "board-node board-node--pin";
      el.style.left = n.x + "%";
      el.style.top = n.y + "%";
      el.style.setProperty("--rot", n.rot + "deg");
      el.textContent = n.label;
      el.dataset.idx = i;
      nodesWrap.appendChild(el);
    });

    function drawLines() {
      const rect = nodesWrap.getBoundingClientRect();
      svg.setAttribute("viewBox", "0 0 " + rect.width + " " + rect.height);
      svg.innerHTML = "";
      connections.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b];
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", (na.x / 100) * rect.width);
        line.setAttribute("y1", (na.y / 100) * rect.height + 20);
        line.setAttribute("x2", (nb.x / 100) * rect.width);
        line.setAttribute("y2", (nb.y / 100) * rect.height + 20);
        svg.appendChild(line);
      });
    }

    setTimeout(drawLines, 100);
    window.addEventListener("resize", drawLines);
  }

  /* ======================================================================
     MODALS
     ====================================================================== */
  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function initModals() {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.querySelectorAll("[data-close]").forEach((el) => {
        el.addEventListener("click", () => closeModal(modal));
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal.active").forEach((m) => closeModal(m));
      }
    });
  }

  /* ======================================================================
     SECRET ELEMENTS
     ====================================================================== */
  function initSecretElements() {
    const caseId = document.getElementById("caseId");
    const hiddenLogTrigger = document.getElementById("hiddenLogTrigger");
    const easterEgg = document.getElementById("secretEasterEgg");
    let caseClicks = 0;
    let eggClicks = 0;

    const systemLogLines = [
      "> ПРОВЕРКА ЦЕЛОСТНОСТИ ДЕЛА СП-01...",
      "> НАЙДЕНО НЕСООТВЕТСТВИЕ В ЗАПИСИ 118X",
      "> ДОСТУП К ОРИГИНАЛУ ОГРАНИЧЕН",
      "> ЗАПИСЬ СОЗДАНА ПОЛЬЗОВАТЕЛЕМ: НЕИЗВЕСТНО",
      "> СПЕКТАКЛЬ УЖЕ НАЧАЛСЯ."
    ];

    function typeSystemLog() {
      const el = document.getElementById("systemLogText");
      el.textContent = "";
      let lineIdx = 0;
      let charIdx = 0;

      function step() {
        if (lineIdx >= systemLogLines.length) return;
        const line = systemLogLines[lineIdx];
        if (charIdx <= line.length) {
          el.textContent = systemLogLines.slice(0, lineIdx).join("\n") +
            (lineIdx > 0 ? "\n" : "") + line.slice(0, charIdx);
          charIdx++;
          setTimeout(step, 22);
        } else {
          lineIdx++;
          charIdx = 0;
          setTimeout(step, 260);
        }
      }
      step();
    }

    function triggerSecretLog() {
      openModal("systemModal");
      typeSystemLog();
    }

    if (caseId) {
      caseId.addEventListener("click", () => {
        caseClicks++;
        if (caseClicks >= 3) {
          caseClicks = 0;
          triggerSecretLog();
        }
      });
    }

    if (hiddenLogTrigger) {
      hiddenLogTrigger.addEventListener("click", triggerSecretLog);
    }

    if (easterEgg) {
      easterEgg.addEventListener("click", () => {
        eggClicks++;
        if (eggClicks >= 4) {
          eggClicks = 0;
          easterEgg.textContent = "СПЕКТАКЛЬ УЖЕ НАЧАЛСЯ";
          easterEgg.classList.add("flicker");
          setTimeout(() => {
            easterEgg.textContent = "© ПРОЕКТ «СПЕКТАКЛЬ» · АРХИВ ДЕЛА СП-01";
            easterEgg.classList.remove("flicker");
          }, 4000);
        }
      });
    }
  }

  /* ======================================================================
     PARALLAX (лёгкое движение фона hero)
     ====================================================================== */
  function initParallax() {
    const bg = document.getElementById("heroBg");
    if (!bg) return;
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      bg.style.transform = "translate(" + x + "px, " + y + "px)";
    });
  }

  /* ======================================================================
     INIT
     ====================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initNavigation();
    renderCharacters();
    renderTimeline();
    renderLocations();
    renderMaterials();
    renderBoard();
    initReveal();
    initModals();
    initSecretElements();
    initParallax();
  });
})();
