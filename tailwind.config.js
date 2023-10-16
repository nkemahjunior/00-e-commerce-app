/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(homme)/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '600': "600px",
        'phones': { 'max': "767px" },
        '350':  "350px" ,
        '760': "760",
        '1400':"1400px",
        '1535': { 'max': "1535px" },
      },



      keyframes: {
        slide: {
          '0%':{transform : 'translateX(4rem)'},
          
          '80%':{transform : 'translateX(-2rem)'},
          '100%':{transform : 'translateX(0rem)'},

        },
        // slide: {
        //   '0%':{borderBottomWidth : '1px'},
        //   '10%':{borderBottomWidth : '5px'},
          
        //   '50%':{borderBottomWidth : '0px'},
        //   '100%':{borderBottomWidth : '0px'},

        // },

      },
      animation:{
        slide:'slide 0.5s 0.1s infinite'
      }


    },
  },
  plugins: [], 
};
