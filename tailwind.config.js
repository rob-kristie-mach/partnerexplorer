/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'utils/*.js',
        'nuxt.config.js'
    ]
},
  theme: {
    colors: {
      colors: {
        'primary': '#18788e',
        'primary-900': '#02314e',
        'accent' : '#E0BB6B',
        'grey': '#f3f3f3',
        'white': '#ffffff',
        'font' : '#313131'
      },
    },
    container: {
      center: true,
    },
    
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',

      },
      extend: {
        boxShadow: {
          'md': '0 12px 6px rgba(0,0,0,.06);',
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  content: [
    'node_modules/preline/dist/*.js',
  ],
  plugins: [
    require('preline/plugin'),
],
}