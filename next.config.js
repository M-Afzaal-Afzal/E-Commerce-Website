// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa')

module.exports = withPlugins([
    [optimizedImages, {
        /* config for next-optimized-images */
    }],

    // your other plugins here

]);

module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})