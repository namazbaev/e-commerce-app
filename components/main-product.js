const MainProductComponent = {
    render(product) {
        // Format the price with a formatter
        const currencyType = "сум"
        const formattedPrice = Formatters.formatLargePrice(product.price);
        const [wholePart, unitPart] = formattedPrice.split('/');

        return `
            <div class="product-header">
                <h1 class="product-header__title">${product.title}</h1>
                
                <div class="product-header__info">
                    <div class="${product.inStock ? 'product-header__availability--in-stock' : 'product-header__availability'}">
                        ${product.inStock ? 'В наличии' : 'Нет в наличии'}
                    </div>
                    <div class="product-header__code">Код ${product.code}</div>
                </div>
                
                <div class="product-header__price-container">
                    <h2 class="product-header__price">
                        ${wholePart} <span class="product-header__price-unit">${currencyType}/${unitPart}</span>
                    </h2>
                </div>
                
                <div class="product-header__actions">
                    <button class="product-header__button product-header__button--primary" id="buy-button">
                        ${product.inStock ? 'Купить' : 'Уточнить наличие'}
                    </button>
                    <button class="product-header__button product-header__button--chat">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.83984 10.6976L8.84165 10.6947M12 10.6976L12.0018 10.6947M15.1602 10.6976L15.162 10.6947M17 5.35797H7C5.343 5.35797 4 6.70097 4 8.35797V13.022C4 14.679 5.343 16.022 7 16.022H8.315L8.327 19.863L12.798 16.022H17C18.657 16.022 20 14.679 20 13.022V8.35797C20 6.70097 18.657 5.35797 17 5.35797Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }
};