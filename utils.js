/**
 * utils - General Purpose Utility Functions
 * Author: ArenaDelMobile
 * License: Custom
 */

const utils = {
    /**
     * Generates a random string of a given length.
     * @param {number} length - Length of the string.
     * @returns {string}
     */
    randomString(length) {
        if (typeof length !== 'number' || length <= 0) {
            console.error('[utils] Invalid length.');
            return '';
        }
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },

    /**
     * Checks if a value is considered empty.
     * @param {any} value - The value to check.
     * @returns {boolean}
     */
    isEmpty(value) {
        return (
            value === undefined ||
            value === null ||
            (typeof value === 'string' && value.trim() === '') ||
            (Array.isArray(value) && value.length === 0) ||
            (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0)
        );
    },

    /**
     * Debounces a function so it only executes after a delay without new calls.
     * @param {Function} func - Function to debounce.
     * @param {number} delay - Delay in milliseconds.
     * @returns {Function}
     */
    debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }
};

// Example usage:
// console.log(utils.randomString(10)); // Random alphanumeric string
// console.log(utils.isEmpty({})); // true
// const log = () => console.log('Debounced');
// const debouncedLog = utils.debounce(log, 500);
// debouncedLog();

module.exports = utils;
