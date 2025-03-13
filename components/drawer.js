const DrawerComponent = {

    init(modalId) {
        this.modal = document.getElementById(modalId);
        this.bindEvents();
    },

    bindEvents() {
        const closeButtons = this.modal.querySelectorAll('#close-modal, #back-button');
        closeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideModal();
            });
        });

        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'buy-button') {
                this.showModal();
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'submit-order-button') {
                this.handleOrderSubmit();
            }
        });
    },

    showModal() {
        this.modal.classList.add('modal--visible');
        document.body.style.overflow = 'hidden';
    },

    hideModal() {
        this.modal.classList.remove('modal--visible');
        document.body.style.overflow = '';
    },

    handleOrderSubmit() {
        const orderForm = document.getElementById('order-form');
        const orderConfirmation = document.getElementById('order-confirmation');
        
        orderForm.style.display = 'none';
        orderConfirmation.style.display = 'block';
    }
};