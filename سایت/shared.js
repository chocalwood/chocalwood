document.addEventListener('DOMContentLoaded', () => {
    // --- Welcome Toast ---
    const showWelcomeToast = !sessionStorage.getItem('welcomeToastShown');
    if (showWelcomeToast) {
        const toast = document.createElement('div');
        toast.className = 'welcome-toast';
        toast.textContent = 'به فروشگاه چوکال خوش آمدید!';
        document.body.appendChild(toast);
        sessionStorage.setItem('welcomeToastShown', 'true');
    }

    // --- Global Favorites ---
    let globalFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Create Favorites Button and Panel
    const favoritesButton = document.createElement('div');
    favoritesButton.className = 'global-favorites-btn';
    favoritesButton.innerHTML = `<span>علاقه مندی های من</span><span class="count">0</span>`;

    const panelOverlay = document.createElement('div');
    panelOverlay.className = 'favorites-panel-overlay';

    const panel = document.createElement('div');
    panel.className = 'favorites-panel';
    panel.innerHTML = `
        <div class="favorites-panel-header">
            لیست علاقه‌مندی‌ها
            <button class="favorites-panel-close">&times;</button>
        </div>
        <div class="favorites-panel-body">
            <!-- Favorite items will be injected here -->
        </div>
    `;

    panelOverlay.appendChild(panel);
    document.body.appendChild(favoritesButton);
    document.body.appendChild(panelOverlay);

    const favoritesCountSpan = favoritesButton.querySelector('.count');
    const panelBody = panel.querySelector('.favorites-panel-body');

    // --- Functions ---
    const updateFavoritesPanel = () => {
        favoritesCountSpan.textContent = globalFavorites.length;
        panelBody.innerHTML = ''; // Clear previous items

        if (globalFavorites.length === 0) {
            panelBody.innerHTML = '<div class="empty-favorites-panel">لیست شما خالی است.</div>';
            return;
        }

        // Use the centralized product database
        globalFavorites.forEach(productId => {
            const product = allProducts[productId];
            if (product) {
                const item = document.createElement('div');
                item.className = 'favorite-item';
                item.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" onclick="openProductModal('${product.id}')">
                    <div class="favorite-item-info" onclick="openProductModal('${product.id}')">
                        <h5>${product.name}</h5>
                        <p>${product.type}</p>
                    </div>
                    <button class="favorite-item-remove" data-id="${productId}">&times;</button>
                `;
                panelBody.appendChild(item);
            }
        });
    };

    const togglePanel = (show) => {
        if (show) {
            updateFavoritesPanel();
            panelOverlay.classList.add('show');
        } else {
            panelOverlay.classList.remove('show');
        }
    };

    // --- Event Listeners ---
    favoritesButton.addEventListener('click', () => togglePanel(true));
    panelOverlay.addEventListener('click', (e) => {
        if (e.target === panelOverlay || e.target.classList.contains('favorites-panel-close')) {
            togglePanel(false);
        }
    });

    panelBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('favorite-item-remove')) {
            const productId = e.target.dataset.id;
            globalFavorites = globalFavorites.filter(id => id !== productId);
            localStorage.setItem('favorites', JSON.stringify(globalFavorites));
            updateFavoritesPanel(); // Refresh panel
            // Also update the favorite buttons on the page if they exist
            const favButtonOnPage = document.querySelector(`.favorite-btn[data-product="${productId}"]`);
            if (favButtonOnPage) {
                favButtonOnPage.classList.remove('active');
                favButtonOnPage.innerHTML = '♡';
            }
        }
    });
    
    // Initial Load
    updateFavoritesPanel();

    // Expose a global function to update favorites from other scripts
    window.updateGlobalFavorites = () => {
        globalFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        updateFavoritesPanel();
    };

    // --- Modal for Product Images ---
    const createModal = () => {
        const modal = document.createElement('div');
        modal.id = 'globalProductModal';
        modal.style.cssText = `
            position: fixed; inset: 0; background: rgba(0,0,0,0.9);
            display: flex; align-items: center; justify-content: center;
            z-index: 2000; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        `;
        modal.innerHTML = `
            <div style="position: relative; max-width: 90%; max-height: 90%;">
                <button style="position: absolute; top: -15px; right: -15px; background: #ff6b6b; color: white; width: 40px; height: 40px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer;">&times;</button>
                <img src="" style="max-width: 100%; max-height: 80vh; border-radius: 10px; cursor: zoom-in; transition: transform 0.3s ease;">
            </div>
        `;
        document.body.appendChild(modal);

        const img = modal.querySelector('img');
        const closeBtn = modal.querySelector('button');

        closeBtn.onclick = () => {
            modal.style.opacity = '0';
            modal.style.pointerEvents = 'none';
        };
        img.onclick = () => img.style.transform = img.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
        
        return modal;
    };

    const productModal = createModal();

    window.openProductModal = (productId) => {
        const product = allProducts[productId];
        if (product) {
            const img = productModal.querySelector('img');
            img.src = product.image;
            img.alt = product.name;
            img.style.transform = 'scale(1)';
            productModal.style.opacity = '1';
            productModal.style.pointerEvents = 'auto';
        }
    };
});