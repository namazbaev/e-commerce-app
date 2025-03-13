const ProductCardComponent = {
    render(product) {
        return `
            <div class="product-card" data-id="${product.id}">
                ${product.discount ? `<div class="product-card__badge">-${product.discount}</div>` : ''}
                <button class="product-card__favorite ${product.isFavorite ? 'product-card__favorite--active' : ''}" data-id="${product.id}">❤️</button>
                <img src="${product.image}" alt="${product.title}" class="product-card__image">
                <div class="product-card__info">
                    <div class="product-card__title">${product.title}</div>
                    <div class="product-card__price">${product.priceFormatted}</div>
                </div>
            </div>
        `;
    },

    renderList(products) {
        return products.map(product => this.render(product)).join('');
    },

    initEventListeners() {
        document.addEventListener('click', (event) => {
            const favoriteButton = event.target.closest('.product-card__favorite');
            if (favoriteButton) {
                this.toggleFavorite(favoriteButton);
            }
        });
    },


    toggleFavorite(button) {
        button.classList.toggle('product-card__favorite--active');
        const productId = button.dataset.id;


        console.log(`Toggled favorite for product: ${productId}`);
    }
};