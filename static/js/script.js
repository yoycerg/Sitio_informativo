document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. HEADER: sombra al hacer scroll
  ============================================================= */
  const header = document.querySelector('.site-header');
  const onScrollHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader);

  /* ============================================================
     2. MENÚ MÓVIL (hamburguesa)
  ============================================================= */
  const hamburger = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  hamburger.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  });

  // Cerrar el menú al elegir una opción
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });

  /* ============================================================
     3. SCROLL SUAVE + RESALTE DE ENLACE ACTIVO
  ============================================================= */
  const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setActiveLink = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  /* ============================================================
     4. TARJETAS "VER MÁS" — expandir/colapsar detalle
  ============================================================= */
  document.querySelectorAll('.feature-item .ver-mas').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.feature-item');
      const expanded = card.classList.toggle('expanded');
      btn.innerHTML = expanded
        ? 'Ver menos <i class="fa-solid fa-arrow-up"></i>'
        : 'Ver más <i class="fa-solid fa-arrow-right"></i>';
    });
  });

  /* ============================================================
     5. CARRUSEL DE GALERÍA
  ============================================================= */
  const track = document.getElementById('galleryTrack');
  const viewport = track ? track.parentElement : null;
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const dotsWrap = document.getElementById('carouselDots');

  if (track && viewport) {
    const slides = Array.from(track.children);
    let perView = getPerView();
    let page = 0;

    function getPerView() {
      const w = window.innerWidth;
      if (w <= 600) return 2;
      if (w <= 1100) return 3;
      return 4;
    }

    function totalPages() {
      return Math.max(1, Math.ceil(slides.length / perView));
    }

    function buildDots() {
      dotsWrap.innerHTML = '';
      for (let i = 0; i < totalPages(); i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      }
      updateDots();
    }

    function updateDots() {
      Array.from(dotsWrap.children).forEach((d, i) => {
        d.classList.toggle('active', i === page);
      });
    }

    function update() {
      const slideWidth = viewport.clientWidth / perView;
      const offset = page * slideWidth * perView;
      track.style.transform = `translateX(-${offset}px)`;
      track.querySelectorAll('figure').forEach(fig => {
        fig.style.width = `${slideWidth}px`;
      });
      updateDots();
    }

    function goTo(i) {
      const max = totalPages() - 1;
      page = Math.min(Math.max(i, 0), max);
      update();
    }

    prevBtn.addEventListener('click', () => {
      const max = totalPages() - 1;
      goTo(page === 0 ? max : page - 1); // ciclo infinito
    });

    nextBtn.addEventListener('click', () => {
      const max = totalPages() - 1;
      goTo(page === max ? 0 : page + 1); // ciclo infinito
    });

    // Deslizar con touch/swipe
    let startX = 0;
    viewport.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    viewport.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 40) {
        diff < 0 ? nextBtn.click() : prevBtn.click();
      }
    });

    window.addEventListener('resize', () => {
      perView = getPerView();
      page = 0;
      buildDots();
      update();
    });

    buildDots();
    update();

    // Auto-play suave, se detiene si el usuario interactúa
    let autoplay = setInterval(() => nextBtn.click(), 5000);
    [prevBtn, nextBtn, viewport].forEach(el => {
      el.addEventListener('pointerdown', () => clearInterval(autoplay));
    });
  }

  /* ============================================================
     6. BOTÓN "DESCARGAR FICHA TÉCNICA" — genera un archivo real
  ============================================================= */
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const contenido = `FICHA TÉCNICA — MOBI-BIN 03 (ROBOT RECOLECTOR)
================================================

ESPECIFICACIONES TÉCNICAS
--------------------------------
Dimensiones (L x A x H):   250 x 190 x 210 mm
Peso aproximado:           2.5 kg
Material del chasis:       Madera contrachapada 3 mm
Capacidad de carga:        2 x 3 Litros
Fuente de alimentación:    Batería 12V - 2200 mAh
Autonomía estimada:        2 - 3 horas
Velocidad máxima:          0.6 m/s
Sensores:                  Ultrasónico, IR, Encoder
Control:                   Autónomo / Remoto
Microcontrolador:          Arduino UNO

CARACTERÍSTICAS
--------------------------------
- Navegación autónoma con detección de obstáculos
- Clasificación automática de residuos reciclables y no reciclables
- Capacidad de carga en dos contenedores independientes
- Control remoto y manual
- Diseño modular y escalable

CONTACTO
--------------------------------
proyecto.mobibin03@gmail.com
Proyecto de Ingeniería y Robótica

© 2025 Mobi-Bin 03. Todos los derechos reservados.
`;
      const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ficha-tecnica-mobibin03.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('Ficha técnica descargada correctamente ✓');
    });
  }

  /* ============================================================
     7. TOAST DE NOTIFICACIÓN
  ============================================================= */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // Botones "Ver más" del footer de specs y "Conoce más"
  document.querySelectorAll('.specs-btn, .hero-cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href');
      if (!href || href === '#') e.preventDefault();
    });
  });

  /* ============================================================
     8. BOTÓN VOLVER ARRIBA
  ============================================================= */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============================================================
     9. TILT SUAVE EN LA IMAGEN DEL HERO AL MOVER EL MOUSE
  ============================================================= */
  const heroImageWrap = document.querySelector('.hero-image-wrap');
  const heroImage = document.querySelector('.hero-image');
  if (heroImageWrap && heroImage && window.matchMedia('(hover: hover)').matches) {
    heroImageWrap.addEventListener('mousemove', (e) => {
      const rect = heroImageWrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroImage.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    heroImageWrap.addEventListener('mouseleave', () => {
      heroImage.style.transform = 'rotateY(0) rotateX(0)';
    });
  }

  /* ============================================================
     10. ANIMACIÓN DE ENTRADA AL HACER SCROLL (fade + slide up)
  ============================================================= */
  const revealEls = document.querySelectorAll('.feature-item, .panel, .hero-callout');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }

});