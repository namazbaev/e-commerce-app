const ProductsSectionComponent = {
    render(title, products, showMoreLink = true) {
        return `
            <section class="products-section">
                <div class="products-section__header">
                    <h2 class="products-section__title">${title}</h2>
                    ${showMoreLink ? `
                        <div class="products-section__more">
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.33333 3.84016L12.4044 8.91127C13.0033 9.51016 13.0033 10.4902 12.4044 11.089L7.33333 16.1602" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    ` : ''}
                </div>
                
                <div class="products-section__grid">
                    ${ProductCardCompactComponent.renderList(products)}
                </div>
            </section>
        `;
    }
};