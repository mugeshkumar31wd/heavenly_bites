// Heavenly Bites Premium Cake Shop Script

// ==========================================
// 1. PRODUCT CATALOG DATABASE
// ==========================================
const PRODUCTS = [
    // --- Anniversary Cakes ---
    {
        id: "anniversary-1",
        name: "Royal Pink Rose Cake",
        price: 699,
        rating: 4.8,
        weight: "1.0 kg",
        description: "Elegant layered cake decorated with delicate buttercream pink roses.",
        category: "Anniversary Cakes",
        flavor: "Fruit",
        badge: "Bestseller",
        image: "assets/images/anniversary.webp"
    },
    {
        id: "anniversary-2",
        name: "Golden Dream Anniversary",
        price: 1099,
        rating: 4.9,
        weight: "1.5 kg",
        description: "Double tier white fondant cake decorated with gold dust highlights.",
        category: "Anniversary Cakes",
        flavor: "Premium",
        badge: "New Arrival",
        image: "assets/images/anniversary2.jpg"
    },
    {
        id: "anniversary-3",
        name: "White Romance Heart",
        price: 1499,
        rating: 4.7,
        weight: "2.0 kg",
        description: "Stunning heart-shaped cake featuring intricate lace icing patterns.",
        category: "Anniversary Cakes",
        flavor: "Vanilla",
        badge: "15% OFF",
        image: "assets/images/anniversary3.jpg"
    },
    {
        id: "anniversary-4",
        name: "Blossoming Love Cake",
        price: 999,
        rating: 4.6,
        weight: "1.0 kg",
        description: "Soft pink gradient frosting adorned with handmade edible flowers.",
        category: "Anniversary Cakes",
        flavor: "Fruit",
        badge: "",
        image: "assets/images/anniversary4.jpg"
    },
    {
        id: "anniversary-5",
        name: "Silver Fondant Pearl",
        price: 699,
        rating: 4.5,
        weight: "1.0 kg",
        description: "Chic modern design with silver edible pearls and satin ribbon base.",
        category: "Anniversary Cakes",
        flavor: "Premium",
        badge: "",
        image: "assets/images/anniversary5.jpg"
    },
    {
        id: "anniversary-6",
        name: "Red Velvet Splendor",
        price: 599,
        rating: 4.7,
        weight: "1.0 kg",
        description: "Rich red velvet layers sandwiched with delicious whipped cream cheese frosting.",
        category: "Anniversary Cakes",
        flavor: "Premium",
        badge: "Bestseller",
        image: "assets/images/anniversary6.jpg"
    },

    // --- Cartoon Cakes ---
    {
        id: "cartoon-1",
        name: "Tom & Jerry Funhouse",
        price: 799,
        rating: 4.7,
        weight: "1.0 kg",
        description: "Whimsical cake decorated with hand-sculpted Tom & Jerry toppers.",
        category: "Cartoon Cakes",
        flavor: "Fruit",
        badge: "Bestseller",
        image: "assets/images/cartoon.jpg"
    },
    {
        id: "cartoon-2",
        name: "Pikachu Thunder Cake",
        price: 699,
        rating: 4.8,
        weight: "1.0 kg",
        description: "Bright yellow Pikachu face cake featuring electric chocolate details.",
        category: "Cartoon Cakes",
        flavor: "Vanilla",
        badge: "",
        image: "assets/images/cartoon2.jpg"
    },
    {
        id: "cartoon-3",
        name: "Doraemon Magic Cake",
        price: 499,
        rating: 4.6,
        weight: "1.0 kg",
        description: "Cute sky-blue cake styled like Doraemon's famous smiling face.",
        category: "Cartoon Cakes",
        flavor: "Vanilla",
        badge: "",
        image: "assets/images/cartoon3.jpg"
    },
    {
        id: "cartoon-4",
        name: "Barbie Portrait Cake",
        price: 399,
        rating: 4.5,
        weight: "0.5 kg",
        description: "High definition edible print of classic Barbie on delicious cream frosting.",
        category: "Cartoon Cakes",
        flavor: "Vanilla",
        badge: "10% OFF",
        image: "assets/images/cartoon4.jpg"
    },
    {
        id: "cartoon-5",
        name: "Doraemon Playful Sky",
        price: 499,
        rating: 4.6,
        weight: "1.0 kg",
        description: "Spacious playground theme cake featuring Doraemon and friends.",
        category: "Cartoon Cakes",
        flavor: "Fruit",
        badge: "",
        image: "assets/images/cartoon5.webp"
    },
    {
        id: "cartoon-6",
        name: "Cute Panda Cream",
        price: 399,
        rating: 4.8,
        weight: "0.5 kg",
        description: "Adorable fluffy chocolate panda cake designed for kids birthdays.",
        category: "Cartoon Cakes",
        flavor: "Chocolate",
        badge: "New Arrival",
        image: "assets/images/cartoon6.webp"
    },

    // --- Doll Cakes ---
    {
        id: "doll-1",
        name: "Princess Pink Barbie",
        price: 999,
        rating: 4.9,
        weight: "1.5 kg",
        description: "A gorgeous 3D doll cake with an edible flowing gown of pink buttercream stars.",
        category: "Doll Cakes",
        flavor: "Vanilla",
        badge: "Bestseller",
        image: "assets/images/doll-img.jpg"
    },
    {
        id: "doll-2",
        name: "Royal Blue Gown Doll",
        price: 1499,
        rating: 4.8,
        weight: "2.0 kg",
        description: "Exquisite blue gown cake featuring hand-painted white frosting accents.",
        category: "Doll Cakes",
        flavor: "Premium",
        badge: "",
        image: "assets/images/doll-img2.jpg"
    },
    {
        id: "doll-3",
        name: "Frozen Elsa Sparkle",
        price: 699,
        rating: 4.7,
        weight: "1.0 kg",
        description: "Snowflake frosted doll gown inspired by Disney's Queen Elsa.",
        category: "Doll Cakes",
        flavor: "Fruit",
        badge: "New Arrival",
        image: "assets/images/doll-img3.jpg"
    },

    // --- Customized Cakes ---
    {
        id: "custom-1",
        name: "Classic Photo Cake",
        price: 599,
        rating: 4.7,
        weight: "1.0 kg",
        description: "Upload your favorite memory and we will print it in edible ink on cream base.",
        category: "Customized Cakes",
        flavor: "Vanilla",
        badge: "",
        image: "assets/images/customized1.webp"
    },
    {
        id: "custom-2",
        name: "Chocolate Photo Delight",
        price: 599,
        rating: 4.6,
        weight: "1.0 kg",
        description: "Edible print cake layered with rich premium dark chocolate fudge frosting.",
        category: "Customized Cakes",
        flavor: "Chocolate",
        badge: "",
        image: "assets/images/customized2.webp"
    },
    {
        id: "custom-3",
        name: "Premium Frame Photo",
        price: 699,
        rating: 4.8,
        weight: "1.2 kg",
        description: "Custom photo print framed with luxury golden-colored chocolate borders.",
        category: "Customized Cakes",
        flavor: "Chocolate",
        badge: "",
        image: "assets/images/customized3.webp"
    },
    {
        id: "custom-4",
        name: "Fluttering Butterflies",
        price: 799,
        rating: 4.9,
        weight: "1.2 kg",
        description: "Elegant pastel pink cake decorated with colorful floating butterflies.",
        category: "Customized Cakes",
        flavor: "Fruit",
        badge: "Bestseller",
        image: "assets/images/butterfly.jpg"
    },
    {
        id: "custom-5",
        name: "Balloon Fiesta Birthday",
        price: 499,
        rating: 4.5,
        weight: "1.0 kg",
        description: "Vibrant birthday cake adorned with balloon toppers and sugar sprinkles.",
        category: "Customized Cakes",
        flavor: "Chocolate",
        badge: "",
        image: "assets/images/birthday.jpg"
    },
    {
        id: "custom-6",
        name: "Surprise Heart Pinata",
        price: 399,
        rating: 4.7,
        weight: "0.5 kg",
        description: "Hard chocolate shell heart cake. Comes with a hammer to break and discover chocolate fillings.",
        category: "Customized Cakes",
        flavor: "Chocolate",
        badge: "15% OFF",
        image: "assets/images/surprise.png"
    },

    // --- Normal Cakes ---
    {
        id: "normal-1",
        name: "Classic Black Forest",
        price: 599,
        rating: 4.8,
        weight: "1.0 kg",
        description: "Decadent chocolate layers packed with dark cherries and whipped chocolate shavings.",
        category: "Normal Cakes",
        flavor: "Chocolate",
        badge: "Bestseller",
        image: "assets/images/black-forest.webp"
    },
    {
        id: "normal-2",
        name: "Elegant White Forest",
        price: 599,
        rating: 4.6,
        weight: "1.0 kg",
        description: "Vanilla sponge layered with vanilla whipped cream and topped with white chocolate flakes.",
        category: "Normal Cakes",
        flavor: "Vanilla",
        badge: "",
        image: "assets/images/white-forest.jpg"
    },
    {
        id: "normal-3",
        name: "Deluxe Vanilla Sponge",
        price: 399,
        rating: 4.5,
        weight: "0.5 kg",
        description: "Light, moist sponge covered with smooth aromatic vanilla buttercream.",
        category: "Normal Cakes",
        flavor: "Vanilla",
        badge: "",
        image: "assets/images/vanilla.png"
    },

    // --- Brownies ---
    {
        id: "brownie-1",
        name: "Loaded Nut Fudge Brownies",
        price: 399,
        rating: 4.8,
        weight: "6 Pcs",
        description: "Ultra-fudgy chocolate brownies loaded with roasted walnuts and almond pieces.",
        category: "Brownies",
        flavor: "Brownies",
        badge: "Bestseller",
        image: "assets/images/nuts.jpg"
    },
    {
        id: "brownie-2",
        name: "Sizzling Hot Brownie",
        price: 499,
        rating: 4.7,
        weight: "6 Pcs",
        description: "Classic dense chewy brownies that taste divine when warmed up.",
        category: "Brownies",
        flavor: "Brownies",
        badge: "",
        image: "assets/images/choco-brownie.jpg"
    },
    {
        id: "brownie-3",
        name: "Triple Chocolate Overload",
        price: 599,
        rating: 4.9,
        weight: "6 Pcs",
        description: "Brownies baked with white, milk, and dark chocolate chunks inside.",
        category: "Brownies",
        flavor: "Brownies",
        badge: "New Arrival",
        image: "assets/images/triplechoco.jpg"
    }
];

// ==========================================
// 2. STATE INITIALIZATION (localStorage)
// ==========================================
let cart = JSON.parse(localStorage.getItem("hb_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("hb_wishlist")) || [];
let activeCategoryFilter = "All";
let activeFlavorFilter = "All";
let activeSort = "popular";
let activeSearchQuery = "";

// ==========================================
// 3. DOCUMENT LOAD EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Initial Render of Menu
    renderProducts();
    updateCartCount();
    updateWishlistCount();

    // Check for URL parameters to open cart automatically
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('openCart') === 'true') {
        setTimeout(openCartDrawer, 300); // Small delay to allow drawer elements to initialize smoothly
    }

    // Setup Navigation Hamburger Menu
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("nav-links");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            if (menuToggle) menuToggle.classList.remove("active");
        });
    });

    // Sticky Navbar shadow on scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Search bar event
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            activeSearchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }

    // Category Button Filters
    const catFilters = document.querySelectorAll(".category-pill");
    catFilters.forEach(pill => {
        pill.addEventListener("click", () => {
            catFilters.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            activeCategoryFilter = pill.getAttribute("data-category");
            renderProducts();
        });
    });

    // Flavor Radio Filters
    const flavorFilters = document.querySelectorAll(".flavor-btn");
    flavorFilters.forEach(btn => {
        btn.addEventListener("click", () => {
            flavorFilters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFlavorFilter = btn.getAttribute("data-flavor");
            renderProducts();
        });
    });

    // Sort Dropdown Change
    const sortSelect = document.getElementById("sort-select");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            activeSort = e.target.value;
            renderProducts();
        });
    }

    // Setup Shopping Cart Sidebar Drawer Toggles
    const cartBtn = document.getElementById("cart-nav-btn");
    const cartClose = document.getElementById("close-cart");
    const cartDrawer = document.getElementById("cart-drawer");
    const cartOverlay = document.getElementById("cart-overlay");

    if (cartBtn && cartDrawer && cartOverlay) {
        cartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    }
    if (cartClose) {
        cartClose.addEventListener("click", closeCartDrawer);
    }
    if (cartOverlay) {
        cartOverlay.addEventListener("click", closeCartDrawer);
    }

    // Setup Wishlist Modal/Sidebar Toggles
    const wishlistBtn = document.getElementById("wishlist-nav-btn");
    const wishlistClose = document.getElementById("close-wishlist");
    const wishlistDrawer = document.getElementById("wishlist-drawer");
    const wishlistOverlay = document.getElementById("wishlist-overlay");

    if (wishlistBtn && wishlistDrawer && wishlistOverlay) {
        wishlistBtn.addEventListener("click", (e) => {
            e.preventDefault();
            openWishlistDrawer();
        });
    }
    if (wishlistClose) {
        wishlistClose.addEventListener("click", closeWishlistDrawer);
    }
    if (wishlistOverlay) {
        wishlistOverlay.addEventListener("click", closeWishlistDrawer);
    }

    // Setup Cake Customizer Event Listeners
    setupCustomizer();

    // Start Scroll-Reveal / Stats counter
    setupScrollTriggerAnimations();

    // Special Offers Countdown Timer
    startOffersCountdown();

    // Auto Testimonial Carousel
    startTestimonialCarousel();

    // FAQ Accordion logic
    setupFAQAccordion();

    // Forms Handlers
    setupForms();
});

// ==========================================
// 4. RENDERING & FILTERING MENU ITEMS
// ==========================================
function renderProducts() {
    const grid = document.getElementById("menu-grid");
    if (!grid) return;

    // Filter by Category, Flavor, and Search Query
    let filtered = PRODUCTS.filter(p => {
        const matchesCategory = (activeCategoryFilter === "All" || p.category === activeCategoryFilter);
        const matchesFlavor = (activeFlavorFilter === "All" || p.flavor.toLowerCase() === activeFlavorFilter.toLowerCase());
        const matchesSearch = p.name.toLowerCase().includes(activeSearchQuery) || 
                              p.description.toLowerCase().includes(activeSearchQuery) ||
                              p.category.toLowerCase().includes(activeSearchQuery);
        
        return matchesCategory && matchesFlavor && matchesSearch;
    });

    // Sort Results
    if (activeSort === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        // Default Sort by popularity (Rating descending)
        filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-cookie-bite"></i>
                <p>No delicious cakes found matching those filters. Try searching for something else!</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const isWishlisted = wishlist.includes(product.id);
        const badgeHTML = product.badge ? `<span class="badge ${product.badge.toLowerCase().replace(/\s/g, '-').replace('%', '')}">${product.badge}</span>` : '';
        
        return `
            <div class="product-card">
                <div class="card-img-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    ${badgeHTML}
                    <button class="wishlist-btn-overlay ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')" title="Add to Wishlist">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <div class="category-tag">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    
                    <div class="meta-row">
                        <span class="weight-tag"><i class="fa-solid fa-weight-hanging"></i> ${product.weight}</span>
                        <span class="rating-tag"><i class="fa-solid fa-star"></i> ${product.rating.toFixed(1)}</span>
                    </div>
                    
                    <p class="product-desc">${product.description}</p>
                    
                    <div class="price-row">
                        <span class="price-val">₹${product.price}</span>
                        <span class="flavor-tag-small">${product.flavor}</span>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        <button class="buy-now-btn" onclick="buyNow('${product.id}')">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// 5. SHOPPING CART LOGIC
// ==========================================
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Check if product is already in cart
    const existingIndex = cart.findIndex(item => item.id === productId && !item.isCustomized);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            weight: product.weight,
            flavor: product.flavor,
            quantity: 1,
            isCustomized: false
        });
    }

    saveCart();
    updateCartCount();
    renderCartItems();
    showToast(`"${product.name}" added to Cart!`, "success");
}

function buyNow(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Check if already in cart
    const existingIndex = cart.findIndex(item => item.id === productId && !item.isCustomized);
    if (existingIndex === -1) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            weight: product.weight,
            flavor: product.flavor,
            quantity: 1,
            isCustomized: false
        });
        saveCart();
        updateCartCount();
        renderCartItems();
    }
    openCartDrawer();
}

function changeCartQty(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        showToast("Item removed from Cart.", "info");
    } else {
        showToast("Cart quantity updated.", "success");
    }
    saveCart();
    updateCartCount();
    renderCartItems();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCartItems();
    showToast("Item removed from Cart.", "info");
}

function renderCartItems() {
    const container = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("cart-total-price");
    const checkoutForm = document.getElementById("checkout-form-container");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-view">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Your cart is empty!</p>
                <button class="explore-btn-cart" onclick="closeCartDrawer(); window.location.hash='#menu';">Explore Cakes</button>
            </div>
        `;
        if (totalEl) totalEl.textContent = "₹0";
        if (checkoutForm) checkoutForm.style.display = "none";
        return;
    }

    let totalPrice = 0;
    container.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        let customizationMeta = "";
        if (item.isCustomized) {
            customizationMeta = `
                <div class="custom-meta-info">
                    <strong>Text:</strong> ${item.customDetails.nameOnCake || 'None'}<br>
                    <strong>Msg:</strong> ${item.customDetails.message || 'None'}<br>
                    <strong>Delivery:</strong> ${item.customDetails.deliveryDate}<br>
                    ${item.customDetails.refImage ? '<span class="green-badge">✓ Reference Photo</span>' : ''}
                </div>
            `;
        }

        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <span class="cart-item-info">${item.flavor} | ${item.weight}</span>
                    ${customizationMeta}
                    <div class="cart-item-pricing">
                        <span class="cart-item-price">₹${item.price}</span>
                        <div class="quantity-control">
                            <button class="qty-btn" onclick="changeCartQty(${index}, -1)">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="changeCartQty(${index}, 1)">+</button>
                        </div>
                    </div>
                </div>
                <button class="remove-cart-item-btn" onclick="removeCartItem(${index})" title="Remove item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    }).join('');

    if (totalEl) totalEl.textContent = `₹${totalPrice}`;
    if (checkoutForm) checkoutForm.style.display = "block";
}

function openCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer && overlay) {
        renderCartItems();
        drawer.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    if (drawer && overlay) {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function saveCart() {
    localStorage.setItem("hb_cart", JSON.stringify(cart));
}

function updateCartCount() {
    const badges = document.querySelectorAll(".cart-count-badge");
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    badges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? "flex" : "none";
    });
}

// Checkout Form Submission Handlers
const cartCheckoutForm = document.getElementById("cart-checkout-form");
if (cartCheckoutForm) {
    cartCheckoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            showToast("Your cart is empty!", "error");
            return;
        }

        const name = document.getElementById("checkout-name").value.trim();
        const phone = document.getElementById("checkout-phone").value.trim();
        const address = document.getElementById("checkout-address").value.trim();

        if (!name || !phone || !address) {
            showToast("Please fill in your shipping details.", "error");
            return;
        }

        showToast("Processing order...", "info");

        // Simulate payment/order dispatch
        setTimeout(() => {
            showToast("🎉 Order placed successfully! Thank you for ordering from Heavenly Bites.", "success");
            cart = [];
            saveCart();
            updateCartCount();
            closeCartDrawer();
            cartCheckoutForm.reset();
        }, 1500);
    });
}

// ==========================================
// 6. WISHLIST LOGIC
// ==========================================
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast("Removed from Wishlist.", "info");
    } else {
        wishlist.push(productId);
        showToast("Saved to Wishlist ❤️", "success");
    }
    saveWishlist();
    updateWishlistCount();
    renderProducts();
    renderWishlistItems();
}

function saveWishlist() {
    localStorage.setItem("hb_wishlist", JSON.stringify(wishlist));
}

function updateWishlistCount() {
    const badges = document.querySelectorAll(".wishlist-count-badge");
    badges.forEach(badge => {
        badge.textContent = wishlist.length;
        badge.style.display = wishlist.length > 0 ? "flex" : "none";
    });
}

function openWishlistDrawer() {
    const drawer = document.getElementById("wishlist-drawer");
    const overlay = document.getElementById("wishlist-overlay");
    if (drawer && overlay) {
        renderWishlistItems();
        drawer.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeWishlistDrawer() {
    const drawer = document.getElementById("wishlist-drawer");
    const overlay = document.getElementById("wishlist-overlay");
    if (drawer && overlay) {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function renderWishlistItems() {
    const container = document.getElementById("wishlist-items-container");
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-wishlist-view">
                <i class="fa-regular fa-heart"></i>
                <p>Your wishlist is empty!</p>
                <button class="explore-btn-cart" onclick="closeWishlistDrawer(); window.location.hash='#menu';">Find Cakes</button>
            </div>
        `;
        return;
    }

    container.innerHTML = wishlist.map(id => {
        const item = PRODUCTS.find(p => p.id === id);
        if (!item) return '';
        
        return `
            <div class="wishlist-item">
                <img src="${item.image}" alt="${item.name}" class="wishlist-item-img">
                <div class="wishlist-item-details">
                    <h4 class="wishlist-item-name">${item.name}</h4>
                    <span class="wishlist-item-price">₹${item.price}</span>
                    <button class="wishlist-add-cart-btn" onclick="wishlistToCart('${item.id}')">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
                <button class="remove-wishlist-item-btn" onclick="toggleWishlist('${item.id}')" title="Remove">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;
    }).join('');
}

function wishlistToCart(productId) {
    addToCart(productId);
    // Remove from wishlist
    toggleWishlist(productId);
    renderWishlistItems();
}

// ==========================================
// 7. CAKE CUSTOMIZER & PREVIEW LOGIC
// ==========================================
let referenceImageBase64 = null;

function setupCustomizer() {
    const nameInput = document.getElementById("custom-name");
    const flavorSelect = document.getElementById("custom-flavor");
    const weightSelect = document.getElementById("custom-weight");
    const msgText = document.getElementById("custom-message");
    const dateInput = document.getElementById("custom-date");
    const refImageInput = document.getElementById("custom-image");

    // Preview DOM elements
    const previewName = document.getElementById("prev-name-text");
    const previewMessage = document.getElementById("prev-msg-text");
    const previewWeight = document.getElementById("prev-weight-badge");
    const previewCake = document.getElementById("cake-preview-3d");
    const previewImageContainer = document.getElementById("prev-ref-image-container");
    const previewRefImg = document.getElementById("prev-ref-img");

    // Dynamic color matching for flavors
    const flavorColors = {
        chocolate: { primary: "#5d3a37", icing: "#4a2c2a", base: "#371e1c" },
        vanilla: { primary: "#fff8f0", icing: "#ffe3d1", base: "#e3c2b0" },
        strawberry: { primary: "#ffd1dc", icing: "#ffb7b2", base: "#e09ba5" },
        mango: { primary: "#ffc300", icing: "#ffd066", base: "#e6a100" },
        pineapple: { primary: "#fff4a3", icing: "#fff9d4", base: "#d9be2b" },
        redvelvet: { primary: "#800020", icing: "#f5f5f5", base: "#540013" }
    };

    // Update Text Overlay
    if (nameInput && previewName) {
        nameInput.addEventListener("input", (e) => {
            previewName.textContent = e.target.value || "Name on Cake";
        });
    }

    // Update Message Preview
    if (msgText && previewMessage) {
        msgText.addEventListener("input", (e) => {
            previewMessage.textContent = e.target.value ? `"${e.target.value}"` : "Gift message displays here";
        });
    }

    // Update Weight Tag
    if (weightSelect && previewWeight) {
        weightSelect.addEventListener("change", (e) => {
            previewWeight.textContent = e.target.value;
        });
    }

    // Update Cake Color based on Flavor
    if (flavorSelect && previewCake) {
        flavorSelect.addEventListener("change", (e) => {
            const val = e.target.value.toLowerCase().replace(/\s/g, '');
            const palette = flavorColors[val] || flavorColors.vanilla;
            
            // Set CSS custom variables on the preview cake container
            previewCake.style.setProperty("--cake-color", palette.primary);
            previewCake.style.setProperty("--icing-color", palette.icing);
            previewCake.style.setProperty("--base-color", palette.base);
        });
    }

    // Validate Reference Image upload (only allowing image types, blocking audio/video)
    if (refImageInput) {
        refImageInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) {
                // reset preview
                if (previewRefImg) previewRefImg.src = "";
                if (previewImageContainer) previewImageContainer.style.display = "none";
                referenceImageBase64 = null;
                return;
            }

            // Strictly check MIME type and extension
            const fileType = file.type;
            const fileName = file.name.toLowerCase();
            const allowedExtensions = [".png", ".jpeg", ".jpg", ".webp", ".gif", ".svg"];
            const isImage = fileType.startsWith("image/");
            const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));

            // Block common audio/video types as a fallback
            const isAudioVideo = fileType.startsWith("audio/") || fileType.startsWith("video/") || 
                                 fileName.endsWith(".mp3") || fileName.endsWith(".mp4") || 
                                 fileName.endsWith(".wav") || fileName.endsWith(".mov");

            if (!isImage || !hasValidExtension || isAudioVideo) {
                showToast("Invalid file type! Please upload an image file (PNG, JPG, JPEG, WEBP). Audio and Video files are strictly blocked.", "error");
                refImageInput.value = ""; // clear input
                if (previewRefImg) previewRefImg.src = "";
                if (previewImageContainer) previewImageContainer.style.display = "none";
                referenceImageBase64 = null;
                return;
            }

            // Create temporary object URL for instant preview rendering
            const reader = new FileReader();
            reader.onload = function(event) {
                referenceImageBase64 = event.target.result;
                if (previewRefImg) previewRefImg.src = referenceImageBase64;
                if (previewImageContainer) previewImageContainer.style.display = "block";
                showToast("Reference image loaded successfully!", "success");
            };
            reader.readAsDataURL(file);
        });
    }

    // Customizer Add to Cart Trigger
    const customizerForm = document.getElementById("cake-customizer-form");
    if (customizerForm) {
        customizerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = nameInput.value.trim();
            const flavor = flavorSelect.value;
            const weight = weightSelect.value;
            const message = msgText.value.trim();
            const date = dateInput.value;

            if (!date) {
                showToast("Please select a delivery date.", "error");
                return;
            }

            // Calculate Customized Price:
            // Base price for custom cake = ₹799
            // + Extra price per kg (1.0kg baseline, +₹400 per additional kg)
            let basePrice = 799;
            const numericalWeight = parseFloat(weight);
            if (numericalWeight > 1) {
                basePrice += Math.round((numericalWeight - 1) * 400);
            }

            const customProduct = {
                id: "custom-" + Date.now(), // Generate unique temp ID
                name: `Customized Cake (${flavor})`,
                price: basePrice,
                image: referenceImageBase64 || "assets/images/customized1.webp",
                weight: weight,
                flavor: flavor,
                quantity: 1,
                isCustomized: true,
                customDetails: {
                    nameOnCake: name,
                    flavor: flavor,
                    weight: weight,
                    message: message,
                    deliveryDate: date,
                    refImage: referenceImageBase64
                }
            };

            cart.push(customProduct);
            saveCart();
            updateCartCount();
            openCartDrawer();
            showToast("Customized cake added to your Cart!", "success");

            // Reset form
            customizerForm.reset();
            if (previewName) previewName.textContent = "Name on Cake";
            if (previewMessage) previewMessage.textContent = "Gift message displays here";
            if (previewWeight) previewWeight.textContent = "1.0 kg";
            if (previewCake) {
                previewCake.style.setProperty("--cake-color", "#fff8f0"); // vanilla
                previewCake.style.setProperty("--icing-color", "#ffe3d1");
                previewCake.style.setProperty("--base-color", "#e3c2b0");
            }
            if (previewRefImg) previewRefImg.src = "";
            if (previewImageContainer) previewImageContainer.style.display = "none";
            referenceImageBase64 = null;
        });
    }
}

// ==========================================
// 8. SCROLL TRIGGER ANIMATIONS & STATISTICS
// ==========================================
function setupScrollTriggerAnimations() {
    // 1. Stats Counter Animation using Intersection Observer
    const statsSection = document.querySelector(".statistics-section");
    const countElements = document.querySelectorAll(".stat-num");
    
    if (statsSection && countElements.length > 0) {
        let animated = false;

        const startCounting = () => {
            countElements.forEach(el => {
                const target = parseInt(el.getAttribute("data-target"));
                const duration = 2000; // 2 seconds animation
                let current = 0;
                
                // Adjust step sizes for large numbers to smooth performance
                const increment = Math.ceil(target / (duration / 16)); 

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target.toLocaleString() + (el.id === "stat-years" ? "" : "+");
                        clearInterval(timer);
                    } else {
                        el.textContent = current.toLocaleString() + "+";
                    }
                }, 16); // ~60fps refresh rate
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    startCounting();
                    animated = true;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(statsSection);
    }

    // 2. Scroll Reveal Animations (fade-in-up class check)
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");
    if (scrollRevealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    revealObserver.unobserve(entry.target); // trigger once
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        scrollRevealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }
}

// ==========================================
// 9. COUNTDOWN TIMER FOR OFFERS
// ==========================================
function startOffersCountdown() {
    const timerDays = document.getElementById("timer-days");
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    if (!timerHours) return;

    // Reset countdown target to midnight of the current day (perpetual daily offers)
    function getMidnightTarget() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        return tomorrow.getTime();
    }

    let countDownDate = getMidnightTarget();

    const updateTimer = () => {
        const now = new Date().getTime();
        let distance = countDownDate - now;

        // If timer expires, reset to next midnight
        if (distance < 0) {
            countDownDate = getMidnightTarget();
            distance = countDownDate - now;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (timerDays) timerDays.textContent = String(days).padStart(2, "0");
        timerHours.textContent = String(hours).padStart(2, "0");
        timerMinutes.textContent = String(minutes).padStart(2, "0");
        timerSeconds.textContent = String(seconds).padStart(2, "0");
    };

    updateTimer();
    setInterval(updateTimer, 1000);
}

// ==========================================
// 10. AUTO SLIDING TESTIMONIALS CAROUSEL
// ==========================================
function startTestimonialCarousel() {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".review-card");
    const nextBtn = document.querySelector(".carousel-arrow.next");
    const prevBtn = document.querySelector(".carousel-arrow.prev");
    
    if (!track || cards.length === 0) return;

    let currentIndex = 0;
    const slideWidth = 100; // Slide in percentage widths

    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlidePosition();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlidePosition();
    };

    // Auto-slide interval
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Event listeners for arrows
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            nextSlide();
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            prevSlide();
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// ==========================================
// 11. FAQ ACCORDION LOGIC
// ==========================================
function setupFAQAccordion() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    
    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            
            // Toggle active state on current item
            const isActive = item.classList.contains("active");
            
            // Close other items
            document.querySelectorAll(".accordion-item").forEach(otherItem => {
                otherItem.classList.remove("active");
                otherItem.querySelector(".accordion-content").style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

// ==========================================
// 12. FORMS & VALIDATION HANDLERS
// ==========================================
function setupForms() {
    // 1. Contact Form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const subject = document.getElementById("contact-subject").value.trim();
            const message = document.getElementById("contact-message").value.trim();

            if (!name || !email || !subject || !message) {
                showToast("Please fill in all the contact form fields.", "error");
                return;
            }

            if (!validateEmail(email)) {
                showToast("Please enter a valid email address.", "error");
                return;
            }

            // Success simulation
            showToast("Sending message... ✉️", "info");
            setTimeout(() => {
                showToast("Thank you, your message has been sent successfully!", "success");
                contactForm.reset();
            }, 1500);
        });
    }

    // 2. Newsletter Form
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("newsletter-email");
            const email = emailInput.value.trim();

            if (!email) {
                showToast("Please enter your email.", "error");
                return;
            }

            if (!validateEmail(email)) {
                showToast("Please enter a valid email address.", "error");
                return;
            }

            // Save temporarily in localStorage (e.g. key: hb_subscribers)
            let subscribers = JSON.parse(localStorage.getItem("hb_subscribers")) || [];
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem("hb_subscribers", JSON.stringify(subscribers));
            }

            showToast("Subscribed! Checking your inbox for updates. 🍰", "success");
            newsletterForm.reset();
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// ==========================================
// 13. UTILITY TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "success") {
    // Create toast container if it doesn't exist
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    // Create toast element
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let iconClass = "fa-check-circle";
    if (type === "error") iconClass = "fa-circle-xmark";
    if (type === "info") iconClass = "fa-info-circle";

    toast.innerHTML = `
        <i class="fa-solid ${iconClass}"></i>
        <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger reveal transition
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    // Auto-remove after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}
