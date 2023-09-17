module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
      },
      flex: {
        '0.7': '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        primary: '#FFFFFF',
        secColor: '#E5E5E5',
        navColor: '#BEBEBE',
      },
      backgroundColor: {
        mainColor: 'linear-gradient(180deg, #171923 0%, #0E0F12 100%)',
        secondaryColor: 'linear-gradient(180deg, #1E1F24 0%, #16171C 100%)',
        tertiaryColor: 'linear-gradient(180deg, #2D2E33 0%, #232426 100%)',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(-200px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
        'slide-fwd': {
          '0%': {
            transform: 'translateZ(0px)',
          },
          '100%': {
            transform: 'translateZ(160px)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-15px)',
          },
          '60%': {
            transform: 'translateY(-5px)',
          },
        },
        'scale-up': {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'cursor-blink': {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'fade-out-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd': 'slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'fade-in': 'fade-in 0.5s ease-out',
        spin: 'spin 1s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        bounce: 'bounce 1s ease-in-out infinite',
        'scale-up': 'scale-up 0.5s ease-in-out',
        'cursor-blink': 'cursor-blink 0.7s infinite',
        'fade-out': 'fade-out 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        transform: 'transform',
      },
      cursor: {
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
        pointer: 'pointer',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
