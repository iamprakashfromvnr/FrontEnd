/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#D7B95F',
        light:'#ffffff',
        dark:'#000000',
        gray:'#737791',
        input:'#818390',
        deluge:'#2C2640',
        bordergray:'#D1D1D1',
        porpoise:'#DADADA',
        lowOrange:'#EC8727',
        icecastle:'#D5F0FC',
        highBlue:'#1F166F',
        bunnytail:'#FFE2F5',
        medgreen:'#6DAf45',
        youngcorn:'#BBFCFC',
        selectbg:'#F9FAFB',
        cancel:'#737797',
        combadge:'#d7b95f',
        comIcon:'#07b055',
        incomIcon:'#ff5656',
        totalPurple:'#7d07FF',
        supersilver:'#eeeeee',
        backgreen:'#35a90d',
        bred:'#Df4343',
        strawberry:'#fe8484',
        particom:'#e8bb61',
        overdue:'#ff8700',
        lightcoral:'#FE8484',
        mayablue:'#6FD3FF',
        bilobaflower:'#B77EF5',
        splash:'#F7D693',
        sulu:'#B8EF8C',
        perano:'#96ABF5',
        turquoiseblue:'#6FD6D6'
      },
      fontFamily:{
        pop:['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}