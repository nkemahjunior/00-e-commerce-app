/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/(homme)/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        '400': '400px',
        '580': '580px',
        '600' :'600px',
        'phones' : {'max':'767px'},
        '760' : '760',
        '1535' : {'max':'1535px'}
      },
    },
  },
  plugins: [],
}
