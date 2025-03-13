/**
 * Compact Product Card Component
 * Displays a product in a compact card format with image, title, price
 */
const ProductCardCompactComponent = {
    /**
     * Get CSS class for availability status
     * @param {String} status - Availability status
     * @return {String} CSS class
     */
    getAvailabilityClass(status) {
        switch(status) {
            case 'order':
                return 'product-card-compact__availability--order';
            case 'out':
                return 'product-card-compact__availability--out';
            default:
                return '';
        }
    },

    /**
     * Get text for availability status
     * @param {String} status - Availability status
     * @return {String} Text to display
     */
    getAvailabilityText(status) {
        switch(status) {
            case 'in':
                return 'В наличии';
            case 'order':
                return 'Под заказ';
            case 'out':
                return 'Нет в наличии';
            default:
                return 'В наличии';
        }
    },

    /**
     * Render a compact product card
     * @param {Object} product - The product data
     * @return {string} HTML for the compact product card
     */
    render(product) {
        const currencyType = ' сум'
        const availabilityClass = this.getAvailabilityClass(product.availability);
        const availabilityText = this.getAvailabilityText(product.availability);

        return `
            <div class="product-card-compact" data-id="${product.id}">
                ${product.discount ? `<div class="product-card-compact__discount">-${product.discount}</div>` : ''}
                
                <div class="product-card-compact__image-container">
                    <img src="${product.image}" alt="${product.title}" class="product-card-compact__image">
                    <button class="product-card-compact__favorite ${product.isFavorite ? 'product-card-compact__favorite--active' : ''}" data-id="${product.id}">
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.004 15.9242C6.684 15.0899 1.5 11.6096 1.5 5.71067C1.5 3.10674 3.492 1 5.948 1C7.404 1 8.692 1.74157 9.5 2.88764C10.308 1.74157 11.604 1 13.052 1C15.508 1 17.5 3.10674 17.5 5.71067C17.5 11.6096 12.316 15.0899 9.996 15.9242C9.724 16.0253 9.276 16.0253 9.004 15.9242Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div class="product-card-compact__content">
                    <h3 class="product-card-compact__title">${product.title}</h3>
                    <p class="product-card-compact__availability ${availabilityClass}">${availabilityText}</p>
                    <p class="product-card-compact__price">${Formatters.formatPrice(product.price)} <span class="product-card-compact__currency-type">${currencyType}</span></p>
                </div>
                <div class="product-card-compact__seller-info">
                        <p class="product-card-compact__seller">${product.seller.name}</p>
                        <p class="product-card-compact__location">${product.seller.location}</p>
                    </div>
            </div>
        `;
    },

    /**
     * Render a list of compact product cards
     * @param {Array} products - Array of product data
     * @return {string} HTML for the list of compact product cards
     */
    renderList(products) {
        return products.map(product => this.render(product)).join('');
    },

    /**
     * Initialize event listeners for compact product cards
     */
    initEventListeners() {
        document.addEventListener('click', (event) => {
            const favoriteButton = event.target.closest('.product-card-compact__favorite');
            if (favoriteButton) {
                this.toggleFavorite(favoriteButton);
            }
        });
    },

    /**
     * Toggle favorite state of a product
     * @param {HTMLElement} button - The favorite button
     */
    toggleFavorite(button) {
        button.classList.toggle('product-card-compact__favorite--active');
        const productId = button.dataset.id;

        // Here we would normally update the state and possibly make an API call
        console.log(`Toggled favorite for product: ${productId}`);
    }
};