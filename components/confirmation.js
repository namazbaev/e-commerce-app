const ConfirmationComponent = {
    render(data) {
        return `
            <div class="confirmation__seller">
                <div class="confirmation__seller-logo">
                    <img src="${data.seller.logo}" alt="${data.seller.name}" style="max-width: 100%; max-height: 100%;">
                </div>
                <div class="confirmation__seller-info">
                    <h3 class="confirmation__seller-name">${data.seller.name}</h3>
                    <p class="confirmation__seller-address">${data.seller.address}</p>
                </div>
            </div>
            
            <div class="confirmation__success">
                <div class="confirmation__success-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_1267)">
                                                <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#32BA7C"/>
                                                <path d="M20.5047 24.4795C21.388 25.3628 21.388 26.877 20.5047 27.7602L18.6751 29.5899C17.7918 30.4732 16.2776 30.4732 15.3943 29.5899L7.3817 21.5142C6.49842 20.6309 6.49842 19.1167 7.3817 18.2334L9.21135 16.4038C10.0946 15.5205 11.6088 15.5205 12.4921 16.4038L20.5047 24.4795Z" fill="white"/>
                                            <path d="M27.5079 10.5363C28.3912 9.65299 29.9054 9.65299 30.7887 10.5363L32.6183 12.3659C33.5016 13.2492 33.5016 14.7634 32.6183 15.6467L18.7382 29.4637C17.8549 30.347 16.3407 30.347 15.4574 29.4637L13.6278 27.6341C12.7445 26.7508 12.7445 25.2366 13.6278 24.3533L27.5079 10.5363Z" fill="white"/>
                                        </g>
                                    <defs>
                                <clipPath id="clip0_1_1267">
                            <rect width="40" height="40" fill="white"/>
                        </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 class="confirmation__order-number">Номер заказа: ${data.orderNumber}</h3>
                <p class="confirmation__message">${data.message}</p>
            </div>
            
            <div class="confirmation__details">
                ${data.details.map(detail => `
                    <div class="confirmation__detail-row">
                        <div class="confirmation__detail-label">
                            <span class="confirmation__detail-icon">${detail.icon}</span>
                            <span>${detail.label}</span>
                        </div>
                        ${detail.isLink
            ? `<a href="${detail.url || '#'}" class="confirmation__detail-link">${detail.value}</a>`
            : `<div class="confirmation__detail-value">${detail.value}</div>`
        }
                    </div>
                `).join('')}
            </div>
            
            <button class="confirmation__view-all">Все товары продавца</button>
        `;
    }
};