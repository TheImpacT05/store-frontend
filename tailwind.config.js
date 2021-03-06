/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    colors: {
      'transparent': 'transparent',
      'black': '#22292f',

      'black-100': '#000',
      'white-100': '#fff',
      'white-5': 'rgba(255,255,255,0.05)',
      'white-10': 'rgba(255,255,255,0.1)',
      'white-20': 'rgba(255,255,255,0.2)',
      'white-30': 'rgba(255,255,255,0.3)',
      'white-40': 'rgba(255,255,255,0.4)',
      'white-50': 'rgba(255,255,255,0.5)',
      'white-60': 'rgba(255,255,255,0.6)',
      'white-70': 'rgba(255,255,255,0.7)',
      'white-80': 'rgba(255,255,255,0.8)',
      'white-90': 'rgba(255,255,255,0.9)',

      gray: {
        '': '#2d3748',
        5: 'rgba(74,85,104,0.05)',
        10: 'rgba(74,85,104,0.1)',

        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
        1000: '#0d101a',
      },

      blue: {
        '': '#266299',
        5: 'rgba(43,108,176,0.05)',
        10: 'rgba(43,108,176,0.10)',

        100: '#dbeffa',
        200: '#c4e5f8',
        300: '#97cff2',
        400: '#6cb5ea',
        500: '#4a9bde',
        600: '#3882c7',
        700: '#2b6cb0',
        800: '#2a6092',
        900: '#21577f',
        950: '#1b4666',
        1000: '#183c59',
      },

      green: {
        '': '#276749',
        5: 'rgba(47,133,90,0.05)',
        10: 'rgba(47,133,90,0.1)',

        100: '#ddf4e7',
        200: '#ccf5d9',
        300: '#aae9c0',
        400: '#7fd29c',
        500: '#64b982',
        600: '#49a272',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
        950: '#1b412f',
        1000: '#173627',
      },

      orange: {
        '': '#964427',
        5: 'rgba(175,86,44,0.05)',
        10: 'rgba(175,86,44,0.10)',

        100: '#fbefda',
        200: '#f9e4bd',
        300: '#f9d19a',
        400: '#ecaf6a',
        500: '#da8a49',
        600: '#c46c36',
        700: '#af562c',
        800: '#964427',
        900: '#813822',
        950: '#722f1d',
        1000: '#65271a',
      },

      purple: {
        '': '#58409c',
        5: 'rgba(107,80,183,0.05)',
        10: 'rgba(107,80,183,0.1)',

        100: '#ede2f9',
        200: '#e9d8fd',
        300: '#d4baf7',
        400: '#bb9bf3',
        500: '#a17fe6',
        600: '#8466d1',
        700: '#6b50b7',
        800: '#58409c',
        900: '#423584',
        950: '#333072',
        1000: '#2c2960',
      },

      red: {
        '': '#9b2c2c',
        5: 'rgba(197,48,48,0.05)',
        10: 'rgba(197,48,48,0.1)',


        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
        950: '#621b18',
        1000: '#3b0d0c',
      },

      pink: {
        '': '#97266D',

        100: '#FFF5F7',
        200: '#FED7E2',
        300: '#FBB6CE',
        400: '#F687B3',
        500: '#ED64A6',
        600: '#D53F8C',
        700: '#B83280',
        800: '#97266D',
        900: '#702459',
        950: '#5c2444',
      },

      teal: {
        '': '#285E61',
        10: 'rgba(44,122,123,0.11)',


        100: '#E6FFFA',
        200: '#B2F5EA',
        300: '#81E6D9',
        400: '#4FD1C5',
        500: '#38B2AC',
        600: '#319795',
        700: '#2C7A7B',
        800: '#285E61',
        900: '#234E52',
        950: '#1f3a3e',
      },

      indigo: {
        1: 'rgb(79, 54, 243, 0.05)',
        2: 'rgb(79, 54, 243, 0.10)',
        3: 'rgb(79, 54, 243, 0.15)',
        4: 'rgb(79, 54, 243, 0.20)',
        5: 'rgb(79, 54, 243, 0.25)',
        6: 'rgb(79, 54, 243, 0.30)',
        7: 'rgb(79, 54, 243, 0.35)',
        8: 'rgb(79, 54, 243, 0.40)',
        9: 'rgb(79, 54, 243, 0.45)',
        10: 'rgb(79, 54, 243, 0.50)',
        11: 'rgb(79, 54, 243, 0.55)',
        12: 'rgb(79, 54, 243, 0.60)',
        13: 'rgb(79, 54, 243, 0.65)',
        14: 'rgb(79, 54, 243, 0.70)',
        15: 'rgb(79, 54, 243, 0.75)',
        16: 'rgb(79, 54, 243, 0.80)',
        17: 'rgb(79, 54, 243, 0.85)',
        18: 'rgb(79, 54, 243, 0.90)',
        19: 'rgb(79, 54, 243, 0.95)',

        100: 'hsl(250, 56%, 95%)',
        150: 'hsl(250, 57%, 93%)',
        200: 'hsl(250, 58%, 90%)',
        250: 'hsl(250, 59%, 85%)',
        300: 'hsl(250, 60%, 80%)',
        350: 'hsl(250, 61%, 75%)',
        400: 'hsl(251, 62%, 70%)',
        450: 'hsl(251,63%,65%)',
        500: 'hsl(251,64%,60%)',
        550: 'hsl(252,65%,55%)',
        600: 'hsl(253, 66%, 52%)',
        650: 'hsl(253, 68%, 47%)',
        700: 'hsl(253, 71%, 42%)',
        750: 'hsl(253, 74%, 37%)',
        800: 'hsl(253, 77%,32%)',
        850: 'hsl(253, 80%,27%)',
        900: 'hsl(253, 82%,22%)',
        950: 'hsl(253, 86%, 17%)',
        1000: 'hsl(253, 89%, 12%)',
      },

      yellow: {
        '': '#975A16',

        100: '#FFFFF0',
        200: '#FEFCBF',
        300: '#FAF089',
        400: '#F6E05E',
        500: '#ECC94B',
        600: '#D69E2E',
        700: '#B7791F',
        800: '#975A16',
        900: '#744210',
        950: '#602f10',
      },
    },

    screens: {
      'xs': '411px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1260px', // 1280px - 20px
      'xl': '1420px', // 1440px - 20px
      'xxl': '1580px', // 1600px - 20px
      'xxxl': '1900px', // 1920px - 20px
    },

    fontFamily: {
      'sans': [
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      'serif': [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      'mono': [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },

    fontSize: {
      '0': '0',

      'xxs': '11px',
      'xs': '12px',
      'sm': '13px',
      'md': '14px',
      'lg': '15px',
      'xl': '16px',
      'xxl': '17px',
      'xxxl': '18px',
      '4xl': '19px',

      '1.5rem': '24px',
      '2rem': '32px',
    },

    fontWeight: {
      // 'hairline': 100,
      // 'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },

    lineHeight: {
      'none': 1,
      'tight': 1.25,
      'normal': 1.5,
      'loose': 2,
    },

    letterSpacing: {
      'tight': '-0.05em',
      'normal': '0',
      'wide': '0.07em',
    },

    textColor: theme => theme('colors'),

    backgroundColor: theme => theme('colors'),

    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },

    borderWidth: {
      default: '.5px',
      '0': '0',
      '1/2': '.5px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },

    borderColor:
      theme => ({
        default:
          theme('colors.gray.400'),
        ...theme('colors'),
      }),

    borderRadius: {
      'none': '0',
      'xs': '3.5px',
      'sm': '5px',
      default: '6.5px !important',
      'lg': '8px',
      'xl': '14px',
      'xxl': '20px',
      'xxxl': '74px',
      'full': '9999px',
    },

    extend: {
      width: {
        'auto': 'auto',
        '0': '0',

        '1px': '1px',
        '2px': '2px',

        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '26': '6.5rem',
        '28': '7rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.75rem',
        '32': '8rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '36': '9rem',
        '37': '9.25rem',
        '38': '9.5rem',
        '39': '9.75rem',
        '40': '10rem',
        '41': '10.25rem',
        '42': '10.5rem',
        '43': '10.75rem',
        '44': '11rem',
        '45': '11.25rem',
        '46': '11.5rem',
        '47': '11.75rem',
        '48': '12rem',
        '49': '12.25rem',
        '50': '12.5rem',
        '51': '12.75rem',
        '52': '13rem',
        '53': '13.25rem',
        '54': '13.5rem',
        '55': '13.75rem',
        '56': '14rem',
        '57': '14.25rem',
        '58': '14.5rem',
        '59': '14.75rem',
        '60': '15rem',
        '61': '15.25rem',
        '62': '15.5rem',
        '63': '15.75rem',
        '64': '16rem',
        '65': '16.25rem',
        '66': '16.5rem',
        '67': '16.75rem',
        '68': '17rem',
        '69': '17.25rem',
        '70': '17.5rem',
        '71': '17.75rem',
        '72': '18rem',

        '73': '19rem',
        '74': '20rem',
        '75': '21rem',
        '76': '22rem',
        '77': '23rem',
        '78': '24rem',
        '79': '25rem',
        '80': '26rem',
        '81': '27rem',
        '82': '28rem',
        '83': '29rem',
        '84': '30rem',
        '85': '31rem',
        '86': '32rem',
        '87': '33rem',
        '88': '34rem',
        '89': '35rem',
        '90': '36rem',

        '91': '38rem',
        '92': '40rem',
        '93': '42rem',
        '94': '44rem',
        '95': '46rem',
        '96': '48rem',
        '97': '49rem',
        '98': '50rem',
        '99': '52rem',
        '100': '54rem',

        '0/100': '0%',
        '5/100': '5%',
        '10/100': '10%',
        '15/100': '15%',
        '20/100': '20%',
        '25/100': '25%',
        '30/100': '30%',
        '35/100': '35%',
        '40/100': '40%',
        '45/100': '45%',
        '50/100': '50%',
        '55/100': '55%',
        '60/100': '60%',
        '65/100': '65%',
        '70/100': '70%',
        '75/100': '75%',
        '80/100': '80%',
        '85/100': '85%',
        '90/100': '90%',
        '95/100': '95%',

        'full': '100%',
      },
    },

    height: {
      'auto': 'auto',
      '0': '0',
      '1px': '1px',
      '2px': '2px',

      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '26': '6.5rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.5rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.5rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '43': '10.75rem',
      '44': '11rem',
      '45': '11.25rem',
      '46': '11.5rem',
      '47': '11.75rem',
      '48': '12rem',
      '49': '12.25rem',
      '50': '12.5rem',
      '51': '12.75rem',
      '52': '13rem',
      '53': '13.25rem',
      '54': '13.5rem',
      '55': '13.75rem',
      '56': '14rem',
      '57': '14.25rem',
      '58': '14.5rem',
      '59': '14.75rem',
      '60': '15rem',
      '61': '15.25rem',
      '62': '15.5rem',
      '63': '15.75rem',
      '64': '16rem',
      '65': '16.25rem',
      '66': '16.5rem',
      '67': '16.75rem',
      '68': '17rem',
      '69': '17.25rem',
      '70': '17.5rem',
      '71': '17.75rem',
      '72': '18rem',

      '73': '19rem',
      '74': '20rem',
      '75': '21rem',
      '76': '22rem',
      '77': '23rem',
      '78': '24rem',
      '79': '25rem',
      '80': '26rem',
      '81': '27rem',
      '82': '28rem',
      '83': '29rem',
      '84': '30rem',
      '85': '31rem',
      '86': '32rem',
      '87': '33rem',
      '88': '34rem',
      '89': '35rem',
      '90': '36rem',

      '91': '38rem',
      '92': '40rem',
      '93': '42rem',
      '94': '44rem',
      '95': '46rem',
      '96': '48rem',
      '97': '49rem',
      '98': '50rem',
      '99': '52rem',
      '100': '54rem',

      '0/100': '0%',
      '5/100': '5%',
      '10/100': '10%',
      '15/100': '15%',
      '20/100': '20%',
      '25/100': '25%',
      '30/100': '30%',
      '35/100': '35%',
      '40/100': '40%',
      '45/100': '45%',
      '50/100': '50%',
      '55/100': '55%',
      '60/100': '60%',
      '65/100': '65%',
      '70/100': '70%',
      '75/100': '75%',
      '80/100': '80%',
      '85/100': '85%',
      '90/100': '90%',
      '95/100': '95%',

      'full': '100%',
    },

    minWidth: {
      'auto': 'auto',
      '0': '0',
      '1px': '1px',
      '2px': '2px',

      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '26': '6.5rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.5rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.5rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '43': '10.75rem',
      '44': '11rem',
      '45': '11.25rem',
      '46': '11.5rem',
      '47': '11.75rem',
      '48': '12rem',
      '49': '12.25rem',
      '50': '12.5rem',
      '51': '12.75rem',
      '52': '13rem',
      '53': '13.25rem',
      '54': '13.5rem',
      '55': '13.75rem',
      '56': '14rem',
      '57': '14.25rem',
      '58': '14.5rem',
      '59': '14.75rem',
      '60': '15rem',
      '61': '15.25rem',
      '62': '15.5rem',
      '63': '15.75rem',
      '64': '16rem',
      '65': '16.25rem',
      '66': '16.5rem',
      '67': '16.75rem',
      '68': '17rem',
      '69': '17.25rem',
      '70': '17.5rem',
      '71': '17.75rem',
      '72': '18rem',

      '73': '19rem',
      '74': '20rem',
      '75': '21rem',
      '76': '22rem',
      '77': '23rem',
      '78': '24rem',
      '79': '25rem',
      '80': '26rem',
      '81': '27rem',
      '82': '28rem',
      '83': '29rem',
      '84': '30rem',
      '85': '31rem',
      '86': '32rem',
      '87': '33rem',
      '88': '34rem',
      '89': '35rem',
      '90': '36rem',

      '91': '38rem',
      '92': '40rem',
      '93': '42rem',
      '94': '44rem',
      '95': '46rem',
      '96': '48rem',
      '97': '49rem',
      '98': '50rem',
      '99': '52rem',
      '100': '54rem',

      '0/100': '0%',
      '5/100': '5%',
      '10/100': '10%',
      '15/100': '15%',
      '20/100': '20%',
      '25/100': '25%',
      '30/100': '30%',
      '35/100': '35%',
      '40/100': '40%',
      '45/100': '45%',
      '50/100': '50%',
      '55/100': '55%',
      '60/100': '60%',
      '65/100': '65%',
      '70/100': '70%',
      '75/100': '75%',
      '80/100': '80%',
      '85/100': '85%',
      '90/100': '90%',
      '95/100': '95%',

      'full': '100%',
    },

    minHeight: {
      'auto': 'auto',
      '0': '0',
      '1px': '1px',
      '2px': '2px',

      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '26': '6.5rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.5rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.5rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '43': '10.75rem',
      '44': '11rem',
      '45': '11.25rem',
      '46': '11.5rem',
      '47': '11.75rem',
      '48': '12rem',
      '49': '12.25rem',
      '50': '12.5rem',
      '51': '12.75rem',
      '52': '13rem',
      '53': '13.25rem',
      '54': '13.5rem',
      '55': '13.75rem',
      '56': '14rem',
      '57': '14.25rem',
      '58': '14.5rem',
      '59': '14.75rem',
      '60': '15rem',
      '61': '15.25rem',
      '62': '15.5rem',
      '63': '15.75rem',
      '64': '16rem',
      '65': '16.25rem',
      '66': '16.5rem',
      '67': '16.75rem',
      '68': '17rem',
      '69': '17.25rem',
      '70': '17.5rem',
      '71': '17.75rem',
      '72': '18rem',

      '73': '19rem',
      '74': '20rem',
      '75': '21rem',
      '76': '22rem',
      '77': '23rem',
      '78': '24rem',
      '79': '25rem',
      '80': '26rem',
      '81': '27rem',
      '82': '28rem',
      '83': '29rem',
      '84': '30rem',
      '85': '31rem',
      '86': '32rem',
      '87': '33rem',
      '88': '34rem',
      '89': '35rem',
      '90': '36rem',

      '91': '38rem',
      '92': '40rem',
      '93': '42rem',
      '94': '44rem',
      '95': '46rem',
      '96': '48rem',
      '97': '49rem',
      '98': '50rem',
      '99': '52rem',
      '100': '54rem',

      '0/100': '0%',
      '5/100': '5%',
      '10/100': '10%',
      '15/100': '15%',
      '20/100': '20%',
      '25/100': '25%',
      '30/100': '30%',
      '35/100': '35%',
      '40/100': '40%',
      '45/100': '45%',
      '50/100': '50%',
      '55/100': '55%',
      '60/100': '60%',
      '65/100': '65%',
      '70/100': '70%',
      '75/100': '75%',
      '80/100': '80%',
      '85/100': '85%',
      '90/100': '90%',
      '95/100': '95%',

      'full': '100%',
    },

    maxWidth: {
      'auto': 'auto',
      '0': '0',
      '1px': '1px',
      '2px': '2px',

      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '26': '6.5rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.5rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.5rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '43': '10.75rem',
      '44': '11rem',
      '45': '11.25rem',
      '46': '11.5rem',
      '47': '11.75rem',
      '48': '12rem',
      '49': '12.25rem',
      '50': '12.5rem',
      '51': '12.75rem',
      '52': '13rem',
      '53': '13.25rem',
      '54': '13.5rem',
      '55': '13.75rem',
      '56': '14rem',
      '57': '14.25rem',
      '58': '14.5rem',
      '59': '14.75rem',
      '60': '15rem',
      '61': '15.25rem',
      '62': '15.5rem',
      '63': '15.75rem',
      '64': '16rem',
      '65': '16.25rem',
      '66': '16.5rem',
      '67': '16.75rem',
      '68': '17rem',
      '69': '17.25rem',
      '70': '17.5rem',
      '71': '17.75rem',
      '72': '18rem',

      '73': '19rem',
      '74': '20rem',
      '75': '21rem',
      '76': '22rem',
      '77': '23rem',
      '78': '24rem',
      '79': '25rem',
      '80': '26rem',
      '81': '27rem',
      '82': '28rem',
      '83': '29rem',
      '84': '30rem',
      '85': '31rem',
      '86': '32rem',
      '87': '33rem',
      '88': '34rem',
      '89': '35rem',
      '90': '36rem',

      '91': '38rem',
      '92': '40rem',
      '93': '42rem',
      '94': '44rem',
      '95': '46rem',
      '96': '48rem',
      '97': '49rem',
      '98': '50rem',
      '99': '52rem',
      '100': '54rem',

      '0/100': '0%',
      '5/100': '5%',
      '10/100': '10%',
      '15/100': '15%',
      '20/100': '20%',
      '25/100': '25%',
      '30/100': '30%',
      '35/100': '35%',
      '40/100': '40%',
      '45/100': '45%',
      '50/100': '50%',
      '55/100': '55%',
      '60/100': '60%',
      '65/100': '65%',
      '70/100': '70%',
      '75/100': '75%',
      '80/100': '80%',
      '85/100': '85%',
      '90/100': '90%',
      '95/100': '95%',

      'full': '100%',
    },

    maxHeight: {
      'auto': 'auto',
      '0': '0',
      '1px': '1px',
      '2px': '2px',

      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '26': '6.5rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.5rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.5rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '43': '10.75rem',
      '44': '11rem',
      '45': '11.25rem',
      '46': '11.5rem',
      '47': '11.75rem',
      '48': '12rem',
      '49': '12.25rem',
      '50': '12.5rem',
      '51': '12.75rem',
      '52': '13rem',
      '53': '13.25rem',
      '54': '13.5rem',
      '55': '13.75rem',
      '56': '14rem',
      '57': '14.25rem',
      '58': '14.5rem',
      '59': '14.75rem',
      '60': '15rem',
      '61': '15.25rem',
      '62': '15.5rem',
      '63': '15.75rem',
      '64': '16rem',
      '65': '16.25rem',
      '66': '16.5rem',
      '67': '16.75rem',
      '68': '17rem',
      '69': '17.25rem',
      '70': '17.5rem',
      '71': '17.75rem',
      '72': '18rem',

      '73': '19rem',
      '74': '20rem',
      '75': '21rem',
      '76': '22rem',
      '77': '23rem',
      '78': '24rem',
      '79': '25rem',
      '80': '26rem',
      '81': '27rem',
      '82': '28rem',
      '83': '29rem',
      '84': '30rem',
      '85': '31rem',
      '86': '32rem',
      '87': '33rem',
      '88': '34rem',
      '89': '35rem',
      '90': '36rem',

      '91': '38rem',
      '92': '40rem',
      '93': '42rem',
      '94': '44rem',
      '95': '46rem',
      '96': '48rem',
      '97': '49rem',
      '98': '50rem',
      '99': '52rem',
      '100': '54rem',

      '0/100': '0%',
      '5/100': '5%',
      '10/100': '10%',
      '15/100': '15%',
      '20/100': '20%',
      '25/100': '25%',
      '30/100': '30%',
      '35/100': '35%',
      '40/100': '40%',
      '45/100': '45%',
      '50/100': '50%',
      '55/100': '55%',
      '60/100': '60%',
      '65/100': '65%',
      '70/100': '70%',
      '75/100': '75%',
      '80/100': '80%',
      '85/100': '85%',
      '90/100': '90%',
      '95/100': '95%',

      'full': '100%',
    },

    padding: {
      'auto': 'auto',
      '0': '0',
      '1px': '1px',
      '2px': '2px',

      '1/2': '0.125rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '26': '6.5rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.5rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.5rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '43': '10.75rem',
      '44': '11rem',
      '45': '11.25rem',
      '46': '11.5rem',
      '47': '11.75rem',
      '48': '12rem',
      '49': '12.25rem',
      '50': '12.5rem',
      '51': '12.75rem',
      '52': '13rem',
      '53': '13.25rem',
      '54': '13.5rem',
      '55': '13.75rem',
      '56': '14rem',
      '57': '14.25rem',
      '58': '14.5rem',
      '59': '14.75rem',
      '60': '15rem',
      '61': '15.25rem',
      '62': '15.5rem',
      '63': '15.75rem',
      '64': '16rem',
      '65': '16.25rem',
      '66': '16.5rem',
      '67': '16.75rem',
      '68': '17rem',
      '69': '17.25rem',
      '70': '17.5rem',
      '71': '17.75rem',
      '72': '18rem',

      '73': '19rem',
      '74': '20rem',
      '75': '21rem',
      '76': '22rem',
      '77': '23rem',
      '78': '24rem',
      '79': '25rem',
      '80': '26rem',
      '81': '27rem',
      '82': '28rem',
      '83': '29rem',
      '84': '30rem',
      '85': '31rem',
      '86': '32rem',
      '87': '33rem',
      '88': '34rem',
      '89': '35rem',
      '90': '36rem',

      '91': '38rem',
      '92': '40rem',
      '93': '42rem',
      '94': '44rem',
      '95': '46rem',
      '96': '48rem',
      '97': '49rem',
      '98': '50rem',
      '99': '52rem',
      '100': '54rem',

      '0/100': '0%',
      '5/100': '5%',
      '10/100': '10%',
      '15/100': '15%',
      '20/100': '20%',
      '25/100': '25%',
      '30/100': '30%',
      '35/100': '35%',
      '40/100': '40%',
      '45/100': '45%',
      '50/100': '50%',
      '55/100': '55%',
      '60/100': '60%',
      '65/100': '65%',
      '70/100': '70%',
      '75/100': '75%',
      '80/100': '80%',
      '85/100': '85%',
      '90/100': '90%',
      '95/100': '95%',

      'full': '100%',
    },

    margin: {
      'auto': 'auto',
      '0': '0',
      '1px': '1px',
      '2px': '2px',

      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '18': '4.5rem',
      '20': '5rem',
      '22': '5.5rem',
      '24': '6rem',
      '26': '6.5rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '33': '8.25rem',
      '34': '8.5rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.5rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '43': '10.75rem',
      '44': '11rem',
      '45': '11.25rem',
      '46': '11.5rem',
      '47': '11.75rem',
      '48': '12rem',
      '49': '12.25rem',
      '50': '12.5rem',
      '51': '12.75rem',
      '52': '13rem',
      '53': '13.25rem',
      '54': '13.5rem',
      '55': '13.75rem',
      '56': '14rem',
      '57': '14.25rem',
      '58': '14.5rem',
      '59': '14.75rem',
      '60': '15rem',
      '61': '15.25rem',
      '62': '15.5rem',
      '63': '15.75rem',
      '64': '16rem',
      '65': '16.25rem',
      '66': '16.5rem',
      '67': '16.75rem',
      '68': '17rem',
      '69': '17.25rem',
      '70': '17.5rem',
      '71': '17.75rem',
      '72': '18rem',

      '73': '19rem',
      '74': '20rem',
      '75': '21rem',
      '76': '22rem',
      '77': '23rem',
      '78': '24rem',
      '79': '25rem',
      '80': '26rem',
      '81': '27rem',
      '82': '28rem',
      '83': '29rem',
      '84': '30rem',
      '85': '31rem',
      '86': '32rem',
      '87': '33rem',
      '88': '34rem',
      '89': '35rem',
      '90': '36rem',

      '91': '38rem',
      '92': '40rem',
      '93': '42rem',
      '94': '44rem',
      '95': '46rem',
      '96': '48rem',
      '97': '49rem',
      '98': '50rem',
      '99': '52rem',
      '100': '54rem',

      '0/100': '0%',
      '5/100': '5%',
      '10/100': '10%',
      '15/100': '15%',
      '20/100': '20%',
      '25/100': '25%',
      '30/100': '30%',
      '35/100': '35%',
      '40/100': '40%',
      '45/100': '45%',
      '50/100': '50%',
      '55/100': '55%',
      '60/100': '60%',
      '65/100': '65%',
      '70/100': '70%',
      '75/100': '75%',
      '80/100': '80%',
      '85/100': '85%',
      '90/100': '90%',
      '95/100': '95%',

      'full': '100%',

      '-px': '-1px',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-15': '-3.75rem',
      '-16': '-4rem',
      '-20': '-5rem',
      '-24': '-6rem',
      '-32': '-8rem',
      '-64': '-16rem',

      '-70': '-21rem',
    },

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      'md': '0 4px 8px 0 rgba(26, 26, 67, .05), 0 2px 4px 0 rgba(50, 50, 93, .5)',
      'lg': '0 0px 30px 0 rgba(26, 26, 67, 0.17), 0 0px 15px 0 rgba(50, 50, 93, 0.45)',
      'xl': '0px 0px 5px 0 rgba(26, 26, 67, .05), 0px 40px 125px -25px rgba(50, 50, 93, .5), 0px 40px 75px -37.5px rgba(0, 0, 0, .6)',
      'xl-2': '0px 0px 5px 0 rgba(26, 26, 67, 0.17), 0px 30px 110px -25px rgba(50, 50, 93, 0.45), 0px 40px 75px -37.5px rgba(0, 0, 0, 0.4)',

      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline-sm': '0 0 0 1px rgba(52,144,220,0.5)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'none': 'none',

      'top': '0 -15px 30px 0 rgba(26, 26, 67, 0.1), 0 -5px 15px 0 rgba(50, 50, 93, 0.35)',
      'btn': '0px 5px 4px -2px #a0aec0',
      'selection': '0 4px 8px 0 rgba(26, 26, 67, .05), 0 2px 4px 0 rgba(50, 50, 93, 0.26), 0 -4px 8px 0 rgba(26, 26, 67, .05), 0 -2px 4px 0 rgba(50, 50, 93, 0.18)',

      'right': '1px 1px 5px 0 rgba(26,26,67,.05), 39px 62.5px 125px -25px rgba(50,50,93,.5), 23.4px 37.5px 75px -37.5px rgba(0,0,0,.6)',
      'right-2': '1px 1px 5px 0 rgba(26, 26, 67, 0.04), 39px 62.5px 125px -25px rgba(50, 50, 93, .4), 23.4px 37.5px 100px -37.5px hsla(0, 0%, 0%, 0.5)',
      'right-3': '5px 5px 10px 0 rgba(26, 26, 67, 0.05), 39px 62.5px 150px -25px rgba(50, 50, 93, 0.12), 23.4px 37.5px 100px -37.5px hsla(0, 0%, 0%, 0.15)',

      'left': '1px 1px 5px 0 rgba(26, 26, 67, 0.05), -39px 62.5px 125px -25px rgba(50, 50, 93, 0.5), -23.4px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)',
      'left-2': '1px 1px 5px 0 rgba(26, 26, 67, 0.04), -39px 62.5px 125px -25px rgba(50, 50, 93, .4), -23.4px 37.5px 100px -37.5px hsla(0, 0%, 0%, 0.5)',
      'left-3': '5px 5px 10px 0 rgba(26, 26, 67, 0.05), -39px 62.5px 150px -25px rgba(50, 50, 93, 0.12), -23.4px 37.5px 100px -37.5px hsla(0, 0%, 0%, 0.15)',
    },
    zIndex: {
      'auto': 'auto',
      '0': 0,
      '1': 1,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '100': 100,
      '101': 101,
    },
    opacity: {
      '0': '0',
      '5': '.05',
      '10': '.1',
      '15': '.15',
      '20': '.20',
      '25': '.25',
      '30': '.3',
      '35': '.35',
      '40': '.4',
      '45': '.45',
      '50': '.5',
      '55': '.55',
      '60': '.6',
      '65': '.65',
      '70': '.7',
      '75': '.75',
      '80': '.80',
      '85': '.85',
      '90': '.90',
      '95': '.95',
      '100': '1',
    },

    stroke: {
      'current': 'currentColor',
    },
  },
  variants: {
    appearance: [],
    backgroundAttachment: [],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: [],
    borderColor: ['hover', 'focus', 'group-hover'],
    borderRadius: ['responsive'],
    borderStyle: [],
    borderWidth: ['responsive', 'hover', 'focus'],
    cursor: [],
    display: ['responsive', 'hover'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: [],
    fontFamily: [],
    fontWeight: ['hover', 'focus', 'group-hover'],
    height: ['responsive', 'hover', 'group-hover'],
    lineHeight: [],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['group-hover', 'responsive', 'hover'],
    maxHeight: ['group-hover'],
    maxWidth: ['responsive', 'group-hover'],
    minHeight: ['responsive', 'group-hover'],
    minWidth: [],
    objectFit: [],
    objectPosition: [],
    opacity: ['hover', 'focus', 'active', 'group-hover'],
    outline: ['focus'],
    overflow: [],
    padding: ['responsive', 'hover'],
    pointerEvents: [],
    position: ['responsive'],
    inset: [],
    resize: [],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: ['hover', 'focus'],
    stroke: [],
    tableLayout: [],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fontSize: ['responsive', 'hover'],
    fontStyle: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive', 'hover', 'focus'],
    letterSpacing: [],
    userSelect: [],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive', 'hover', 'group-hover'],
    zIndex: [],
  },
  corePlugins: {
    //
  },
  plugins: [
    //
  ],
}
