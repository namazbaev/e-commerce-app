class ProductGallery {
    constructor(element, images, options = {}) {
        this.container = element;
        this.images = images;
        this.options = {
            initialSlide: 0,
            autoplay: false,
            autoplayInterval: 3000,
            ...options
        };

        this.currentSlide = this.options.initialSlide;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.autoplayInterval = null;
        this.isFavorite = false;

        this.init();
    }
    init() {
        this.render();
        this.slides = this.container.querySelectorAll('.product-gallery__slide');
        this.dots = this.container.querySelectorAll('.product-gallery__dot');
        this.favoriteButton = this.container.querySelector('.product-gallery__favorite');
        this.swipeArea = this.container.querySelector('.product-gallery__swipe-area');

        this.bindEvents();
        this.goToSlide(this.currentSlide);

        if (this.options.autoplay) {
            this.startAutoplay();
        }
    }

    render() {
        const slidesHtml = this.images.map((image, index) => `
            <div class="product-gallery__slide" data-index="${index}">
                <img 
                    src="${image}" 
                    class="product-gallery__image"
                    alt="Product image ${index + 1}" 
                    loading="${index === 0 ? 'eager' : 'lazy'}"
                />
            </div>
        `).join('');

        const dotsHtml = this.images.map((_, index) => `
            <div class="product-gallery__dot" data-index="${index}"></div>
        `).join('');

        this.container.innerHTML = `
            <div class="product-gallery">
                <div class="product-gallery__container">
                    ${slidesHtml}
                    <button class="product-gallery__favorite" aria-label="Add to favorites">
                        <svg viewBox="0 0 24 24" class="product-gallery__favorite-icon">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <div class="product-gallery__swipe-area"></div>
                </div>
                <div class="product-gallery__pagination">
                    ${dotsHtml}
                </div>
            </div>
        `;
    }

    bindEvents() {
        this.dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.dataset.index);
                this.goToSlide(index);
            });
        });

        // Favorite button click
        this.favoriteButton.addEventListener('click', () => {
            this.toggleFavorite();
        });

        // Touch events for swipe
        this.swipeArea.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.swipeArea.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        // Mouse events for desktop (optional)
        let isDragging = false;

        this.swipeArea.addEventListener('mousedown', (e) => {
            isDragging = true;
            this.touchStartX = e.screenX;
            this.swipeArea.style.cursor = 'grabbing';
        });

        this.swipeArea.addEventListener('mouseup', (e) => {
            if (isDragging) {
                this.touchEndX = e.screenX;
                this.handleSwipe();
                isDragging = false;
                this.swipeArea.style.cursor = 'grab';
            }
        });

        this.swipeArea.addEventListener('mouseleave', () => {
            isDragging = false;
            this.swipeArea.style.cursor = 'grab';
        });

        // Pause autoplay on hover/touch
        this.container.addEventListener('mouseenter', () => {
            if (this.options.autoplay) {
                this.stopAutoplay();
            }
        });

        this.container.addEventListener('mouseleave', () => {
            if (this.options.autoplay) {
                this.startAutoplay();
            }
        });
    }

    goToSlide(index) {
        if (index < 0) {
            index = this.slides.length - 1;
        } else if (index >= this.slides.length) {
            index = 0;
        }

        // Update slides
        this.slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('product-gallery__slide--active');
            } else {
                slide.classList.remove('product-gallery__slide--active');
            }
        });

        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('product-gallery__dot--active');
            } else {
                dot.classList.remove('product-gallery__dot--active');
            }
        });

        this.currentSlide = index;

        // Dispatch event for external listeners
        const event = new CustomEvent('slideChange', {
            detail: { index: this.currentSlide }
        });
        this.container.dispatchEvent(event);
    }

    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.goToSlide(this.currentSlide - 1);
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchEndX - this.touchStartX;

        if (diff > swipeThreshold) {
            this.prevSlide();
        } else if (diff < -swipeThreshold) {
            this.nextSlide();
        }
    }

    toggleFavorite() {
        this.isFavorite = !this.isFavorite;

        if (this.isFavorite) {
            this.favoriteButton.classList.add('product-gallery__favorite--active');
        } else {
            this.favoriteButton.classList.remove('product-gallery__favorite--active');
        }

        // Dispatch event for external listeners
        const event = new CustomEvent('favoriteToggle', {
            detail: { isFavorite: this.isFavorite }
        });
        this.container.dispatchEvent(event);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.options.autoplayInterval);
    }

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }

    /**
     * Destroy the gallery instance
     */
    destroy() {
        this.stopAutoplay();

        // Remove event listeners (would need to store references to bound functions)
        // Clear HTML
        this.container.innerHTML = '';
    }
}

/**
 * Helper component for easy initialization
 */
const ProductGalleryComponent = {
    /**
     * Initialize ProductGallery instances for all galleries on the page
     */
    init() {
        const galleries = document.querySelectorAll('[data-product-gallery]');

        galleries.forEach(gallery => {
            const imagesJson = gallery.dataset.images;
            let images = [];

            try {
                images = JSON.parse(imagesJson);
            } catch (e) {
                console.error('Invalid image data for product gallery', e);
            }

            if (images.length > 0) {
                // Get options
                const options = {
                    autoplay: gallery.dataset.autoplay === 'true',
                    initialSlide: parseInt(gallery.dataset.initialSlide || 0)
                };

                // Initialize gallery
                new ProductGallery(gallery, images, options);
            }
        });
    },

    /**
     * Render a product gallery
     * @param {String} containerId - ID for the container element
     * @param {Array} images - Array of image URLs
     * @return {String} HTML for the gallery
     */
    render(containerId, images) {
        const imagesJson = JSON.stringify(images).replace(/"/g, '&quot;');

        return `
            <div 
                id="${containerId}" 
                data-product-gallery 
                data-images="${imagesJson}"
            ></div>
        `;
    }
};