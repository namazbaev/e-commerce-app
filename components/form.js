const FormComponent = {
    render() {
        return `
            <h3 class="form__title">Код подтверждения</h3>
            <p class="form__subtitle">Для подтверждения заказа. Мы вам отправили код на ваш номер +998 90 909 90 90</p>
            
            <div class="form__group">
                <label class="form__label">Код</label>
                <input type="text" class="form__input">
                <p class="form__description">Получить код повторно можно через: <span class="confirmation__code">1:52</span></p>
            </div>
            
            <button class="product__button product__button--primary" id="submit-order-button">Подтвердить заказ</button>
            <button class="product__button product__button--default" id="cancel-order-button">Отменить</button>
        `;
    }
};