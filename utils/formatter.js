/**
 * Formatters Utility Module
 * Utility functions for formatting data
 */
const Formatters = {
    /**
     * Format price with spaces as thousand separators
     * @param {number} price - The price to format
     * @return {string} Formatted price
     */
    formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formatLargePrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "/шт";
    }
};