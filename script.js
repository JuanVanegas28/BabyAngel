/* =========================================================
   BABYANGEL — SCRIPT PRINCIPAL
   =========================================================
   Índice:
   1. Configuración (edita aquí tu número de WhatsApp)
   2. Datos de productos
   3. Render del catálogo
   4. Filtros de categoría
   5. Preguntas frecuentes (acordeón)
   6. Menú móvil
   7. Botones de cotización -> WhatsApp
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Configuración ---------- */
  // Cambia este número por el WhatsApp real del negocio (con indicativo de país, sin "+" ni espacios).
  const WHATSAPP_NUMBER = '573014562027';

  /* ---------- 2. Datos de productos ----------
     Para agregar, quitar o editar productos, modifica este arreglo.
     - "price" se deja vacío a propósito: escribe aquí el texto del precio, por ejemplo "Desde $90.000".
     - "badge" es la etiqueta pequeña que aparece sobre la imagen.
     - "overlay" (opcional) es el texto que aparece dentro del espacio de imagen reservado,
       tal como en el diseño original para algunos productos.
  */
  const PRODUCTS = [
    { code:'BA-001', category:'maternidad', categoryLabel:'Maternidad', badge:'Personalizable', tone:'pink',
      title:'Cojín materno o de lactancia',
      desc:'Apoyo cómodo para la lactancia y el descanso, personalizado con nombre, colores y bordado.',
      price:'', overlay:'', image:'assets/productos/ba-001-cojin-lactancia.gif' },

    { code:'BA-002', category:'baño', categoryLabel:'Baño', badge:'Kit coordinado', tone:'blue',
      title:'Kit de toalla, babero y sacagases',
      desc:'Set coordinado en nombre, colores y diseño para el cuidado diario del bebé.',
      price:'', overlay:'', image:'assets/productos/ba-002-kit-toalla-babero-sacagases.gif' },

    { code:'BA-003', category:'descanso', categoryLabel:'Descanso', badge:'Descanso supervisado', tone:'pink',
      title:'Nido para bebé o colecho',
      desc:'Espacio acolchado y acogedor, adaptado con nombre, temática, telas y detalles.',
      price:'', overlay:'', image:'assets/productos/ba-003-nido-bebe.gif' },

    { code:'BA-004', category:'baño', categoryLabel:'Baño', badge:'Algodón suave', tone:'blue',
      title:'Salida de baño para bebé',
      desc:'Suave y absorbente, con nombre, color y diseño adaptado al estilo elegido.',
      price:'', overlay:'', image:'assets/productos/ba-004-salida-bano-bebe.gif' },

    { code:'BA-005', category:'nacimiento', categoryLabel:'Nacimiento', badge:'Primeros días', tone:'pink',
      title:'Sabanita de cargar o salida de clínica',
      desc:'Pieza acolchada para cargar al bebé, personalizada con nombre, color y temática.',
      price:'', overlay:'', image:'assets/productos/ba-005-sabanita-cargar.gif' },

    { code:'BA-006', category:'decoración', categoryLabel:'Decoración', badge:'Espacio reservado', tone:'pink',
      title:'Cuadro de bienvenida',
      desc:'Elemento decorativo de 50 x 50 cm creado con el nombre, los colores y la temática del bebé.',
      price:'', overlay:'Cuadro de bienvenida personalizado', image:'assets/productos/ba-006-cuadro-bienvenida.gif' },

    { code:'BA-007', category:'ropa', categoryLabel:'Ropa', badge:'Espacio reservado', tone:'pink',
      title:'Mamelucos y camisetas',
      desc:'Prendas en algodón personalizadas con nombres, diseños o mensajes especiales.',
      price:'', overlay:'Mamelucos y camisetas', image:'assets/productos/ba-007-mamelucos-camisetas.gif' },

    { code:'BA-009', category:'dormitorio', categoryLabel:'Dormitorio', badge:'Hecho a la medida', tone:'blue',
      title:'Juego de cuna personalizado',
      desc:'Protectores, almohadones, colcha y trenzas coordinados en un mismo concepto.',
      price:'', overlay:'', image:'assets/productos/ba-009-juego-cuna.gif' },

    { code:'BA-011', category:'bolsos', categoryLabel:'Bolsos', badge:'Espacio reservado', tone:'blue',
      title:'Bolso tipo morral',
      desc:'Morral acolchado y funcional para las salidas y actividades de la familia.',
      price:'', overlay:'Bolso tipo morral', image:'assets/productos/ba-011-bolso-morral.gif' },

    { code:'BA-012', category:'bolsos', categoryLabel:'Bolsos', badge:'Espacio reservado', tone:'blue',
      title:'Bolso cuadrado personalizado',
      desc:'Formato práctico con tamaño y combinación de telas adaptables a cada cliente.',
      price:'', overlay:'Bolso cuadrado', image:'assets/productos/ba-012-bolso-cuadrado.gif' },

    { code:'BA-013', category:'organización', categoryLabel:'Organización', badge:'Espacio reservado', tone:'blue',
      title:'Pañalera ovalada',
      desc:'Diseño textil para organizar los artículos esenciales del bebé con estilo.',
      price:'', overlay:'Pañalera ovalada', image:'assets/productos/ba-013-panalera-ovalada.gif' },

    { code:'BA-014', category:'organización', categoryLabel:'Organización', badge:'Espacio reservado', tone:'blue',
      title:'Canasta para el bebé',
      desc:'Canasta decorativa para mantener organizados los productos de aseo y cuidado.',
      price:'', overlay:'Canasta organizadora', image:'assets/productos/ba-014-canasta-bebe.gif' },

    { code:'BA-015', category:'otros', categoryLabel:'Otros', badge:'Espacio reservado', tone:'pink',
      title:'Bolsa reutilizable',
      desc:'Bolsa en tela cruda para compras y uso cotidiano, con estampado personalizado.',
      price:'', overlay:'Bolsa reutilizable', image:'assets/productos/ba-015-bolsa-reutilizable.gif' },

    { code:'BA-016', category:'baño', categoryLabel:'Baño', badge:'Línea familiar', tone:'blue',
      title:'Salida de baño para jóvenes y adultos',
      desc:'Toalla de algodón personalizada con nombre, bordado y detalles de terminación.',
      price:'', overlay:'', image:'assets/productos/ba-016-salida-bano-jovenes-adultos.gif' },

    { code:'BA-017', category:'baño', categoryLabel:'Baño', badge:'Para todas las edades', tone:'blue',
      title:'Toalla personalizada',
      desc:'Nombre, diseño o motivo especial bordado para bebés, niños, jóvenes y adultos.',
      price:'', overlay:'', image:'assets/productos/ba-017-toalla-personalizada.gif' },

    { code:'BA-018', category:'kits', categoryLabel:'Kits', badge:'Regalo completo', tone:'pink',
      title:'Kit BabyAngel completo',
      desc:'Puede combinar colcha, cojines, sabanita, toalla, babero, sacagases y cojín materno.',
      price:'', overlay:'', image:'assets/productos/ba-018-kit-completo.gif' },

    { code:'BA-019', category:'decoración', categoryLabel:'Decoración', badge:'Formas y diseños', tone:'pink',
      title:'Cojines infantiles',
      desc:'Cojines en diferentes formas y diseños para dar un toque único a cada espacio.',
      price:'', overlay:'', image:'assets/productos/ba-019-cojines-infantiles.gif' },
  ];

  const imagePlaceholderSVG = `
    <svg class="icon-image" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="8.5" cy="10" r="1.7" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="M4 17l5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
    </svg>`;

  /* ---------- 3. Render del catálogo ---------- */
  const grid = document.getElementById('productsGrid');

  function renderProducts() {
    grid.innerHTML = PRODUCTS.map(p => `
      <article class="product-card" data-category="${p.category}" data-tone="${p.tone}">
        <div class="product-image">
          <span class="product-badge">${p.badge}</span>
          ${p.image ? `
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          ` : `
          <!-- IMAGEN PRODUCTO "${p.title}": reemplaza el contenido de este div por
               <img src="tu-imagen.jpg" alt="${p.title}"> -->
          <div class="image-placeholder">
            ${imagePlaceholderSVG}
            <span>${p.overlay ? 'Fotografía por incorporar<br>' + p.overlay : 'Agrega tu imagen aquí'}</span>
          </div>
          `}
        </div>
        <div class="product-body">
          <p class="product-meta">${p.code} · ${p.categoryLabel.toUpperCase()}</p>
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.desc}</p>
          <p class="product-price"><!-- PRECIO: escribe aquí, ej. "Desde $90.000" -->${p.price}</p>
          <button class="btn btn-quote" data-product="${p.title}">Cotizar este producto</button>
        </div>
      </article>
    `).join('');
  }

  renderProducts();

  /* ---------- 4. Filtros de categoría ---------- */
  const filterButtons = document.querySelectorAll('.filter-pill');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const value = btn.dataset.filter;
      const cards = document.querySelectorAll('.product-card');

      cards.forEach(card => {
        const show = value === 'todos' || card.dataset.category === value;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- 5. Preguntas frecuentes (acordeón) ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
      question.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ---------- 6. Menú móvil ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 7. Botones de cotización -> WhatsApp ---------- */
  function openWhatsApp(productName) {
    const message = productName
      ? `Hola, quiero cotizar: ${productName}`
      : 'Hola, quiero hacer un pedido personalizado en BabyAngel.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  }

  // Botones genéricos (Cotizar del menú, Hablar con una asesora, Empezar mi pedido, WhatsApp flotante)
  document.querySelectorAll('[data-quote-generic]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp();
    });
  });

  // Botones "Cotizar este producto" (delegado, porque las tarjetas se generan dinámicamente)
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-quote');
    if (!btn) return;
    openWhatsApp(btn.dataset.product);
  });

});
