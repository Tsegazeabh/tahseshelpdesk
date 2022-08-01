const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
// to remove unused styles by scanning them on the following files
            content: [
            './resources/js/**/*.vue',
            './resources/sass/**/*.scss',
            './resources/css/**/*.css',
        ],
    theme: {
        extend: {
            borderRadius:{
                'fine': '30px',
                'large': '12px',
            },
            colors:{
                transparent: 'transparent',
                current: 'currentColor',
                primary: '#56935D',
                secondary: '#006E90',
        
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
