const App = {
    init() {
        this.renderProductGallery();
        this.renderMainProduct();
        this.renderProductDescription();
        this.renderProductSpecs();
        this.renderPaymentMethods();
        this.renderDeliveryMethods();
        this.renderSellerProfile();
        this.renderSimilarProducts();
        this.renderRecommendedProducts();
        this.renderTagsSearches();
        this.renderOrderForm();
        this.renderOrderConfirmation();

        ProductCardComponent.initEventListeners();
        DrawerComponent.init('order-modal');

        document.addEventListener('click', (e) => {
            const favoriteButton = e.target.closest('.product__favorite');
            if (favoriteButton) {
                favoriteButton.classList.toggle('product-card__favorite--active');
            }
        });
    },

    renderProductSpecs() {
        const specsList = document.getElementById('specs-list');

        specsList.innerHTML = '';

        ProductsData.mainProduct.specifications.forEach(spec => {
            const specItem = document.createElement('div');
            specItem.className = 'specs__item';

            const labelElement = document.createElement('div');
            labelElement.className = 'specs__label';
            labelElement.textContent = spec.label;

            const valueElement = document.createElement('div');
            valueElement.className = 'specs__value';
            valueElement.textContent = spec.value;

            specItem.appendChild(labelElement);
            specItem.appendChild(valueElement);
            specsList.appendChild(specItem);
        });
    },

    renderPaymentMethods() {
        const paymentList = document.getElementById('payment-list');

        paymentList.innerHTML = '';

        ProductsData.paymentMethods.forEach(method => {
            const listItem = document.createElement('li');
            listItem.className = 'payment__item';

            const dash = document.createElement('span');
            dash.className = 'payment__item-dash';
            dash.textContent = '-';

            const text = document.createTextNode(' ' + method);

            listItem.appendChild(dash);
            listItem.appendChild(text);
            paymentList.appendChild(listItem);
        });
    },

    renderDeliveryMethods() {
        const deliveryList = document.getElementById('delivery-list');

        deliveryList.innerHTML = '';

        ProductsData.deliveryMethods.forEach(method => {
            const listItem = document.createElement('li');
            listItem.className = 'delivery__item';

            const dash = document.createElement('span');
            dash.className = 'delivery__item-dash';
            dash.textContent = '-';

            const text = document.createTextNode(' ' + method);

            listItem.appendChild(dash);
            listItem.appendChild(text);
            deliveryList.appendChild(listItem);
        });
    },


    renderSellerProfile(){
        const sellerProfile = document.getElementById('seller-profile');
        sellerProfile.innerHTML = SellerProfileComponent.render(ProductsData.seller);
    },

    renderTagsSearches() {
        const trendsList = document.getElementById('trendsList');

        trendsList.innerHTML = '';

        ProductsData.searchTags.forEach(search => {
            const link = document.createElement('a');
            link.className = 'trends__item';
            link.href = '#';
            link.textContent = search;

            trendsList.appendChild(link);
        });
    },

    renderProductGallery() {
        const container = document.getElementById('product-gallery-container');
        if (!container) return;

        const product = this.getProductData();

        container.innerHTML = ProductGalleryComponent.render(
            'product-main-gallery',
            product.images
        );

        ProductGalleryComponent.init();

        const gallery = document.getElementById('product-main-gallery');

        gallery.addEventListener('favoriteToggle', (e) => {
            console.log('Product favorite state:', e.detail.isFavorite);
        });

        gallery.addEventListener('slideChange', (e) => {
            console.log('Slide changed to:', e.detail.index);
        });
    },

    getProductData() {
        return {
            id: 'macbook-air-m1',
            title: 'Apple MacBook Air M1',
            images: [
                'https://brostore.uz/cdn/shop/files/4_ca56b8ba-7788-4fd4-8a93-d545c43d0dc4_610x_crop_center.png?v=1730728707',
                'https://images.uzum.uz/cus76pjvgbkm5ehg56m0/original.jpg',
                'https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/27/f9/27f9c07712196d54b3813d23862a53df/241101150049292861.webp',
                'https://brostore.uz/cdn/shop/files/4_ca56b8ba-7788-4fd4-8a93-d545c43d0dc4_610x_crop_center.png?v=1730728707',
                'https://images.uzum.uz/cus76pjvgbkm5ehg56m0/original.jpg',
            ],
            price: 12850000,
            inStock: true
        };
    },

    renderMainProduct() {
        const container = document.getElementById('main-product-container');
        container.innerHTML = MainProductComponent.render(ProductsData.mainProduct);
    },

    renderProductDescription() {
        const container = document.getElementById('product-sections-container');

        container.innerHTML = `
            <section class="product section">
                <h2 class="section__title">Описание</h2>
                <div class="section__content">
                    <p class="section__text">${ProductsData.mainProduct.description}</p>
                </div>
            </section>
        `
    },

    renderSimilarProducts() {
        const container = document.getElementById('similar-products-container');
        container.innerHTML = ProductsSectionComponent.render(
            'Похожие товары продавца',
            ProductsData.similarProducts,
            true
        );
    },

    renderRecommendedProducts() {
        const container = document.getElementById('recommended-products-container');
        container.innerHTML = ProductsSectionComponent.render(
            'Рекомендуем',
            ProductsData.similarProducts,
            true
        );
    },

    renderOrderForm() {
        const container = document.getElementById('order-form');
        container.innerHTML = FormComponent.render();
    },

    renderOrderConfirmation() {
        const container = document.getElementById('order-confirmation');
        container.innerHTML = ConfirmationComponent.render(ProductsData.confirmationData);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});