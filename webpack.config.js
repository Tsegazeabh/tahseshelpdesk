const path = require('path');
module.exports = {
    resolve: {
        alias: {
            '@components': path.resolve('resources/js/components'),
            '@layouts': path.resolve('resources/js/layouts'),
            '@composable': path.resolve('resources/js/composables'),
            '@pages': path.resolve('resources/js/Pages'),
            '@router': path.resolve('resources/js/router'),
            '@store': path.resolve('resources/js/store')
        }
    }
};
