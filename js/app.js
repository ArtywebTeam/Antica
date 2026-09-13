/**
 * Pasticceria Antica Dolceria - Core Application Controller
 * Handles Bilingual translation (IT/EN), Dark/Light theme, Shopping Cart, Drawers & Modals
 */

const AnticaApp = {
  lang: localStorage.getItem('ad-lang') || 'it',
  theme: localStorage.getItem('ad-theme') || 'light',
  cart: JSON.parse(localStorage.getItem('ad-cart') || '[]'),

  init() {
    this.applyTheme(this.theme);
    this.applyLanguage(this.lang);
    this.setupEventListeners();
    this.renderCartUI();
  },

  // ================= THEME MANAGEMENT =================
  applyTheme(theme) {
    this.theme = theme;
    localStorage.setItem('ad-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark' 
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
  },

  toggleTheme() {
    this.applyTheme(this.theme === 'dark' ? 'light' : 'dark');
  },

  // ================= LANGUAGE MANAGEMENT =================
  applyLanguage(lang) {
    this.lang = lang;
    localStorage.setItem('ad-lang', lang);
    const t = AnticaData.i18n[lang];

    // Update language switch button text
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
      langBtn.textContent = lang === 'it' ? 'EN' : 'IT';
    }

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.getNestedTranslation(t, key);
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Re-render product/gallery grids if on relevant pages
    if (typeof window.renderPageDynamicContent === 'function') {
      window.renderPageDynamicContent(lang);
    }

    this.renderCartUI();
  },

  toggleLanguage() {
    this.applyLanguage(this.lang === 'it' ? 'en' : 'it');
  },

  getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
  },

  // ================= SHOPPING CART =================
  addToCart(productId) {
    const product = AnticaData.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.saveCart();
    this.renderCartUI();
    this.showToast(this.lang === 'it' ? `"${product.name_it}" aggiunto al carrello` : `"${product.name_en}" added to cart`);
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.renderCartUI();
  },

  updateQuantity(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveCart();
      this.renderCartUI();
    }
  },

  saveCart() {
    localStorage.setItem('ad-cart', JSON.stringify(this.cart));
  },

  getCartCount() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  },

  getCartTotal() {
    return this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  },

  renderCartUI() {
    const count = this.getCartCount();
    const total = this.getCartTotal();
    const t = AnticaData.i18n[this.lang];

    // Badges
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });

    // Cart items container inside drawer
    const list = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-amount');
    
    if (totalEl) {
      totalEl.textContent = `€ ${total.toFixed(2)}`;
    }

    if (list) {
      if (this.cart.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding: 3rem 1rem; color: var(--text-muted);">${t.empty}</div>`;
      } else {
        list.innerHTML = this.cart.map(item => `
          <div class="cart-item">
            <img src="${item.image}" alt="${this.lang === 'it' ? item.name_it : item.name_en}" class="cart-item-img">
            <div class="cart-item-details">
              <div class="cart-item-name">${this.lang === 'it' ? item.name_it : item.name_en}</div>
              <div class="cart-item-price">€ ${item.price.toFixed(2)}</div>
              <div class="cart-item-qty">
                <button class="qty-btn" onclick="AnticaApp.updateQuantity('${item.id}', -1)">-</button>
                <span style="font-weight:600; min-width:20px; text-align:center;">${item.quantity}</span>
                <button class="qty-btn" onclick="AnticaApp.updateQuantity('${item.id}', 1)">+</button>
                <button class="qty-btn" onclick="AnticaApp.removeFromCart('${item.id}')" style="margin-left:auto; border-color:transparent; color:#c00;">✕</button>
              </div>
            </div>
          </div>
        `).join('');
      }
    }
  },

  openCart() {
    const overlay = document.getElementById('cart-drawer-overlay');
    if (overlay) overlay.classList.add('open');
  },

  closeCart() {
    const overlay = document.getElementById('cart-drawer-overlay');
    if (overlay) overlay.classList.remove('open');
  },

  // ================= LIGHTBOX MODAL =================
  openLightbox(src) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    if (modal && img) {
      img.src = src;
      modal.classList.add('open');
    }
  },

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.remove('open');
  },

  // ================= TOAST NOTIFICATIONS =================
  showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  },

  // ================= MOBILE NAVIGATION =================
  toggleMobileNav() {
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) {
      drawer.classList.toggle('open');
    }
  },

  closeMobileNav() {
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) {
      drawer.classList.remove('open');
    }
  },

  // ================= EVENT LISTENERS =================
  setupEventListeners() {
    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCart();
        this.closeLightbox();
        this.closeMobileNav();
      }
    });

    // Close on click outside drawer
    const overlay = document.getElementById('cart-drawer-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeCart();
      });
    }

    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
          this.closeLightbox();
        }
      });
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  AnticaApp.init();
});
