/**
 * Pasticceria Antica Dolceria - Core Data & Translations
 * 100% Autonomous & Standalone
 */

const AnticaData = {
  storeInfo: {
    name: "Pasticceria Antica Dolceria",
    tagline_it: "Frutta realistica · Alta pasticceria",
    tagline_en: "Realistic fruit · Haute patisserie",
    address: "Via Ambaraga 68, Mompiano, 25133 Brescia BS, Italia",
    addressShort: "Via Ambaraga 68, Mompiano, Brescia",
    phone: "+39 030 097 8038",
    phoneDisplay: "030 097 8038",
    email: "info@anticadolceria.it",
    hours_it: "05:30–21:00 · 7 giorni su 7",
    hours_en: "05:30–21:00 · 7 days a week",
    mapEmbedUrl: "https://www.google.com/maps?q=Antica+Dolceria+Brescia&output=embed",
    logo: "assets/images/logo.png",
    heroCover: "assets/images/hero_cover.jpg",
    videos: {
      hero: "assets/videos/hero.mp4",
      laboratory: "assets/videos/laboratory.mp4",
      cakes: "assets/videos/cakes.mp4"
    }
  },

  // Language dictionaries
  i18n: {
    it: {
      home: "Home",
      pastries: "Pasticceria",
      cakes: "Torte",
      coffee: "Caffè",
      about: "Chi siamo",
      gallery: "Galleria",
      contact: "Contatti",
      order: "Ordina ora",
      menu: "Menu completo",
      catering: "Catering",
      admin: "Gestione",
      language: "EN",
      hero: "Autentica pasticceria italiana, fresca ogni giorno.",
      sub: "Ricette tradizionali, ingredienti premium e sapori indimenticabili.",
      viewMenu: "Scopri il menu",
      featured: "Le nostre firme",
      featuredSub: "Piccole opere d’arte create ogni giorno nel laboratorio di Mompiano.",
      story: "L’arte della dolcezza",
      storyEyebrow: "La nostra storia",
      storyText: "La nostra pasticceria unisce la tradizione italiana a ingredienti premium per creare dolci, torte e dessert artigianali preparati freschi ogni giorno.",
      storySchool: "Formati presso la scuola Alberto Magri di Milano, portiamo a Mompiano una pasticceria che unisce tecnica, ricerca e materia prima d'eccellenza.",
      labTitle: "Il laboratorio",
      labSub: "Ogni creazione nasce da una ricerca meticolosa e dalla passione per l'alta pasticceria italiana.",
      why: "Perché sceglierci",
      daily: "Sfornato ogni giorno",
      handmade: "Ricette artigianali",
      premium: "Ingredienti premium",
      authentic: "Autentico gusto italiano",
      voices: "Dicono di noi",
      visit: "Vieni a trovarci",
      hours: "Orari",
      send: "Invia messaggio",
      sending: "Invio in corso...",
      sentSuccess: "Grazie! Il tuo messaggio è stato inviato.",
      newsletter: "Una lettera dalla Dolceria",
      newsletterSub: "Iscriviti per ricevere aggiornamenti sulle creazioni stagionali ed eventi speciali.",
      subscribe: "Iscriviti",
      add: "Aggiungi al carrello",
      added: "Aggiunto!",
      cart: "Il tuo ordine",
      cartTitle: "Carrello",
      checkout: "Procedi all'ordine",
      continueToCheckout: "Continua",
      empty: "Il carrello è vuoto",
      subtotal: "Subtotale",
      total: "Totale",
      all: "Tutto",
      customCakes: "Torte personalizzate",
      customCakesSub: "Realizziamo torte su misura per ogni occasione. Contattaci per una creazione esclusiva.",
      cateringTitle: "Dolci per i tuoi eventi",
      cateringSub: "Dalla colazione aziendale al buffet nuziale: curiamo ogni dettaglio con la stessa passione del laboratorio.",
      galleryTitle: "Atelier visivo",
      gallerySub: "Uno sguardo nel nostro mondo: paste, frutta realistica, caffè e aperitivi.",
      privacy: "Privacy Policy",
      terms: "Termini e Condizioni",
      rights: "Tutti i diritti riservati.",
      categories: {
        all: "Tutto",
        croissants: "Cornetti",
        pastries: "Pasticceria",
        cakes: "Torte",
        cookies: "Biscotti",
        desserts: "Dessert",
        coffee: "Caffè",
        tea: "Tè",
        cold_drinks: "Bevande fredde"
      },
      orderForm: {
        title: "Il tuo ordine",
        fulfillment: "Modalità di ritiro",
        pickup: "Ritiro in sede (Via Ambaraga 68)",
        delivery: "Consegna a domicilio",
        name: "Nome e Cognome",
        email: "Email",
        phone: "Telefono",
        address: "Indirizzo di consegna (se applicabile)",
        notes: "Note o richieste particolari",
        submit: "Conferma ordine",
        successTitle: "Grazie! Ordine confermato",
        successMsg: "Abbiamo ricevuto il tuo ordine. Ti contatteremo a breve per confermare i dettagli.",
        orderNumber: "Numero d'ordine"
      }
    },
    en: {
      home: "Home",
      pastries: "Pastries",
      cakes: "Cakes",
      coffee: "Coffee",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
      order: "Order now",
      menu: "Full menu",
      catering: "Catering",
      admin: "Management",
      language: "IT",
      hero: "Authentic Italian pastries, baked fresh every day.",
      sub: "Traditional recipes, premium ingredients, and unforgettable flavors.",
      viewMenu: "View menu",
      featured: "Our signatures",
      featuredSub: "Small works of art created every day in our Mompiano laboratory.",
      story: "The art of sweetness",
      storyEyebrow: "Our story",
      storyText: "Our Pasticceria combines Italian tradition with premium ingredients to create handcrafted pastries, cakes and desserts made fresh every day.",
      storySchool: "Trained at the Alberto Magri school in Milan, we bring to Mompiano a pastry craft that unites technique, research and excellent ingredients.",
      labTitle: "The laboratory",
      labSub: "Every creation is born from meticulous research and a passion for fine Italian pastry.",
      why: "Why choose us",
      daily: "Freshly baked daily",
      handmade: "Handmade recipes",
      premium: "Premium ingredients",
      authentic: "Authentic Italian taste",
      voices: "Guest stories",
      visit: "Come visit us",
      hours: "Opening hours",
      send: "Send message",
      sending: "Sending...",
      sentSuccess: "Thank you! Your message has been sent.",
      newsletter: "A letter from the Dolceria",
      newsletterSub: "Subscribe to receive updates on seasonal creations and special events.",
      subscribe: "Subscribe",
      add: "Add to cart",
      added: "Added!",
      cart: "Your order",
      cartTitle: "Shopping Cart",
      checkout: "Proceed to checkout",
      continueToCheckout: "Continue",
      empty: "Your cart is empty",
      subtotal: "Subtotal",
      total: "Total",
      all: "All",
      customCakes: "Custom cakes",
      customCakesSub: "We craft bespoke cakes for every occasion. Contact us for an exclusive creation.",
      cateringTitle: "Sweets for your events",
      cateringSub: "From corporate breakfast to wedding buffet: every detail crafted with the same passion as our laboratory.",
      galleryTitle: "Visual Atelier",
      gallerySub: "A glimpse into our world: pastries, realistic fruit, coffee and aperitivo.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      rights: "All rights reserved.",
      categories: {
        all: "All",
        croissants: "Croissants",
        pastries: "Pastries",
        cakes: "Cakes",
        cookies: "Cookies",
        desserts: "Dessert",
        coffee: "Coffee",
        tea: "Tea",
        cold_drinks: "Cold drinks"
      },
      orderForm: {
        title: "Your order",
        fulfillment: "Fulfillment method",
        pickup: "Store pickup (Via Ambaraga 68)",
        delivery: "Home delivery",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        address: "Delivery address (if applicable)",
        notes: "Notes or special requests",
        submit: "Confirm order",
        successTitle: "Thank you! Order confirmed",
        successMsg: "We have received your order. We will contact you shortly to confirm the details.",
        orderNumber: "Order Number"
      }
    }
  },

  // 12 Products from the original database with local assets and fallbacks
  products: [
    {
      id: "prod-1",
      name_it: "Torta agrumi",
      name_en: "Citrus Cake",
      category: "cakes",
      price: 28.0,
      image: "assets/images/product_citrus_cake.jpg",
      description_it: "Pan di Spagna soffice e composta di agrumi italiani.",
      description_en: "Soft sponge and Italian citrus preserve.",
      featured: false,
      available: true
    },
    {
      id: "prod-2",
      name_it: "Tartelletta ai frutti rossi",
      name_en: "Red Fruit Tartlet",
      category: "pastries",
      price: 4.8,
      image: "assets/images/product_red_fruit_tart.jpg",
      description_it: "Frolla, crema pasticcera e frutta fresca.",
      description_en: "Shortcrust, pastry cream and fresh fruit.",
      featured: false,
      available: true
    },
    {
      id: "prod-3",
      name_it: "Espresso italiano",
      name_en: "Italian Espresso",
      category: "coffee",
      price: 1.5,
      image: "assets/images/product_espresso.jpg",
      description_it: "Miscela intensa, estratta a regola d'arte.",
      description_en: "Rich blend, expertly extracted.",
      featured: false,
      available: true
    },
    {
      id: "prod-4",
      name_it: "Macaron assortiti",
      name_en: "Assorted Macarons",
      category: "cookies",
      price: 2.0,
      image: "assets/images/product_macarons.jpg",
      description_it: "Gusci leggeri e creme stagionali.",
      description_en: "Delicate shells with seasonal creams.",
      featured: false,
      available: true
    },
    {
      id: "prod-5",
      name_it: "Canestrelli artigianali",
      name_en: "Artisan Canestrelli",
      category: "cookies",
      price: 8.5,
      image: "assets/images/product_canestrelli.jpg",
      description_it: "Biscotti friabili al burro, confezionati a mano.",
      description_en: "Crumbly butter biscuits, hand packed.",
      featured: false,
      available: true
    },
    {
      id: "prod-6",
      name_it: "Mela realistica",
      name_en: "Realistic Apple",
      category: "desserts",
      price: 7.5,
      image: "assets/images/product_apple.jpg",
      description_it: "Mousse alla mela, vaniglia e cuore speziato.",
      description_en: "Apple mousse, vanilla and a spiced center.",
      featured: true,
      available: true
    },
    {
      id: "prod-7",
      name_it: "Tè selezione",
      name_en: "Tea Selection",
      category: "tea",
      price: 3.7,
      image: "assets/images/product_tea.jpg",
      description_it: "Pregiate foglie e infusi aromatici.",
      description_en: "Fine leaves and aromatic infusions.",
      featured: false,
      available: true
    },
    {
      id: "prod-8",
      name_it: "Aperitivo della casa",
      name_en: "House Aperitivo",
      category: "cold_drinks",
      price: 9.0,
      image: "assets/images/product_aperitivo.jpg",
      description_it: "Cocktail italiano con piccola pasticceria salata.",
      description_en: "Italian cocktail with savory pastries.",
      featured: false,
      available: true
    },
    {
      id: "prod-9",
      name_it: "Cornetto classico",
      name_en: "Classic Croissant",
      category: "croissants",
      price: 2.2,
      image: "assets/images/product_croissant.jpg",
      description_it: "Sfoglia fragrante al burro, dorata ogni mattina.",
      description_en: "Flaky butter pastry, baked golden every morning.",
      featured: true,
      available: true
    },
    {
      id: "prod-10",
      name_it: "Arachide realistica",
      name_en: "Realistic Peanut",
      category: "pastries",
      price: 7.5,
      image: "assets/images/product_peanut.jpg",
      description_it: "Crema pralinata, caramello e guscio croccante.",
      description_en: "Praline cream, caramel and a crisp shell.",
      featured: true,
      available: true
    },
    {
      id: "prod-11",
      name_it: "Pera realistica",
      name_en: "Realistic Pear",
      category: "desserts",
      price: 7.5,
      image: "assets/images/product_pear.jpg",
      description_it: "Mousse delicata alla pera e inserto di frutta.",
      description_en: "Delicate pear mousse with a fresh fruit center.",
      featured: true,
      available: true
    },
    {
      id: "prod-12",
      name_it: "Mango realistico",
      name_en: "Realistic Mango",
      category: "pastries",
      price: 7.5,
      image: "assets/images/product_mango.jpg",
      description_it: "Mousse al mango con cuore tropicale e glassa vellutata.",
      description_en: "Mango mousse with a tropical heart and velvet glaze.",
      featured: true,
      available: true
    }
  ],

  // Gallery items with local images
  gallery: [
    { id: 1, image: "assets/images/gallery_1.jpg", alt: "Antica Dolceria Creazione 1" },
    { id: 2, image: "assets/images/gallery_2.jpg", alt: "Antica Dolceria Creazione 2" },
    { id: 3, image: "assets/images/gallery_3.jpg", alt: "Antica Dolceria Creazione 3" },
    { id: 4, image: "assets/images/gallery_4.jpg", alt: "Antica Dolceria Creazione 4" },
    { id: 5, image: "assets/images/gallery_5.jpg", alt: "Antica Dolceria Creazione 5" },
    { id: 6, image: "assets/images/gallery_6.jpg", alt: "Antica Dolceria Creazione 6" },
    { id: 7, image: "assets/images/gallery_7.jpg", alt: "Antica Dolceria Creazione 7" },
    { id: 8, image: "assets/images/gallery_8.jpg", alt: "Antica Dolceria Creazione 8" },
    { id: 9, image: "assets/images/gallery_9.jpg", alt: "Antica Dolceria Creazione 9" }
  ],

  // Customer Reviews / Testimonials
  reviews: {
    it: [
      {
        author: "Elisa Capelli",
        text: "Aperitivi e colazioni di qualità, pane delizioso! Gentilezza e cordialità completano l’esperienza.",
        rating: 5
      },
      {
        author: "Arturo Angelo Arcano",
        text: "Una creazione eccezionale, unica e assolutamente da non perdere.",
        rating: 5
      },
      {
        author: "Sidra Zaid",
        text: "La frutta realistica è deliziosa e l’accoglienza generosa e gentile.",
        rating: 5
      }
    ],
    en: [
      {
        author: "Elisa Capelli",
        text: "Quality aperitifs and breakfasts, delicious bread! Kindness completes the experience.",
        rating: 5
      },
      {
        author: "Arturo Angelo Arcano",
        text: "An exceptional, unique creation that is absolutely not to be missed.",
        rating: 5
      },
      {
        author: "Sidra Zaid",
        text: "The realistic fruit is delicious and the welcome generous and kind.",
        rating: 5
      }
    ]
  },

  // Catering 4 Pillars
  cateringPillars: {
    it: [
      {
        icon: "cake",
        title: "Torte su misura",
        desc: "Per compleanni, anniversari e celebrazioni."
      },
      {
        icon: "sparkles",
        title: "Eventi & Catering",
        desc: "Tavoli dolci e aperitivi per privati e aziende."
      },
      {
        icon: "clock",
        title: "Pre-ordine",
        desc: "Ordina almeno 48 ore prima per le tue creazioni."
      },
      {
        icon: "phone",
        title: "Contattaci",
        desc: "Raccontaci la tua idea e la realizzeremo."
      }
    ],
    en: [
      {
        icon: "cake",
        title: "Bespoke cakes",
        desc: "For birthdays, anniversaries and celebrations."
      },
      {
        icon: "sparkles",
        title: "Events & catering",
        desc: "Dessert tables and aperitivo for private and corporate."
      },
      {
        icon: "clock",
        title: "Pre-order",
        desc: "Order at least 48 hours ahead for your creations."
      },
      {
        icon: "phone",
        title: "Contact us",
        desc: "Tell us your idea and we will bring it to life."
      }
    ]
  }
};

// Expose globally
window.AnticaData = AnticaData;
