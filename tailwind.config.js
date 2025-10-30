/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        'xs':{ max: '375px'},  
        'sm':{max: '640px' },
        'md':{max: '770px'},
      },
      fontFamily :{

        noto: ['Noto Sans', 'sans-serif' ],
      },
      colors :{    
  'custom-900': 'hsl(227, 75%, 14%)',
 'custom-800': 'hsl(226, 25%, 17%)',
 'custom-700': 'hsl(225, 23%, 24%)',
'custom-600': 'hsl(226, 11%, 37%)',
'custom-300': 'hsl(0, 0%, 78%)',
'custom-200':  'hsl(217, 61%, 90%)',
'custom-100':  'hsl(0, 0%, 93%)',
'custom-0': 'hsl(200, 60%, 99%)',
'red-custom-200': 'hsl(3, 86%, 64%)',
'red-custom-300':'hsl(3, 71%, 56%)',
'red-custom-400': 'hsl(3, 77%, 44%)',
 'bg-items': 'var(--bg-items)',
 'icon-bg' : 'var(--icon-bg)',
 'icon-hov': 'var(--icon-hov)',
 'btn-bg': 'var(--btn-bg)',
 'text-col': 'var(--text-col)',
 'toggle-bg-on' :'var(--toggle-bg-on)',
 'toggle-bg-off' :'var(--toggle-bg-off)', 
 'bg-ext' : 'var(--bg-ext)',
 'content-col': 'var( --div-text-col)',
 'active-btn':'var(--active-btn)',

     },
     backgroundImage :{
       'light-gradient': 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)',
       'dark-gradient': 'linear-gradient(180deg, #040918 0%, #091540 100%)',
       'custombg-body': 'var(--custombg-body)',
     }, 
    
     borderWidth:{
       default: '1px',
     },
      
    },
  },
  plugins: [],
}

