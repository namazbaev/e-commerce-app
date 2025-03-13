const SellerProfileComponent = {
    render(seller) {
        return `
            <div class="seller-profile">
                <div class="seller-profile__header">
                    <h2 class="seller-profile__title">Продавец</h2>
                    <a href="${seller.website}" target="_blank" class="seller-profile__website-link">Перейти на сайт</a>
                </div>

                <div class="seller-profile__company">
                    <div class="seller-profile__logo">
                        <img width="80" height="56" src="${seller.logo}" alt="${seller.name}">
                    </div>
                    
                    <div class="seller-profile__details">
                        <h3 class="seller-profile__name">${seller.name}</h3>
                        <p class="seller-profile__location">${seller.location}</p>
                    </div>
                </div>
                
                <ul class="seller-profile__contact-list">
                    <li class="seller-profile__contact-item">
                        <div class="seller-profile__contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="seller-profile__contact-content">
                            <span class="seller-profile__contact-text">${seller.workingHours}</span>
                            <a href="#" class="seller-profile__contact-link">Весь график</a>
                        </div>
                    </li>
                    
                    <li class="seller-profile__contact-item">
                        <div class="seller-profile__contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.387 2.72501C18.192 2.72501 21.276 5.80901 21.276 9.61401M14.387 6.26501C16.236 6.26501 17.736 7.76401 17.736 9.61401M9.606 14.365C10.506 15.228 11.561 15.93 12.727 16.428L13.246 16.649L14.841 15.029C15.237 14.627 15.81 14.453 16.363 14.569L20.227 15.378C20.881 15.517 21.348 16.094 21.348 16.762V19.544C21.348 20.539 20.542 21.345 19.547 21.345H18.692C14.758 21.345 10.876 20.042 7.94 17.424C7.698 17.209 7.463 16.986 7.234 16.758L7.271 16.795C7.042 16.566 6.82 16.331 6.605 16.089C3.986 13.154 2.683 9.27201 2.683 5.33801V4.48301C2.683 3.48801 3.489 2.68201 4.484 2.68201H7.266C7.934 2.68201 8.511 3.14901 8.65 3.80301L9.46 7.66701C9.575 8.21901 9.402 8.79301 9 9.18901L7.38 10.784L7.601 11.303C8.099 12.468 8.742 13.465 9.606 14.365Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="seller-profile__contact-content">
                            <span class="seller-profile__contact-text">${seller.partialPhone}</span>
                            <a href="#" class="seller-profile__contact-link">показать номер</a>
                        </div>
                    </li>
                    
                    <li class="seller-profile__contact-item">
                        <div class="seller-profile__contact-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="seller-profile__contact-content">
                            <span class="seller-profile__contact-text link">${seller.websiteDisplay}</span>
                        </div>
                    </li>
                </ul>

                <div class="seller-profile__actions">
                    <button class="seller-profile__button seller-profile__button--primary">Все товары продавца</button>
                    <button class="seller-profile__button seller-profile__button--secondary">Заказать звонок</button>
                </div>
            </div>
        `;
    }
};