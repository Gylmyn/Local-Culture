import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{},
      textColor:{

      },
      colors:{
        primary : {
          '50' : '#F0F6FE',
          '100': '#DCEBFD',
          '200': '#C2DCFB',
          '300': '#98C7F8',
          '400': '#67A9F3',
          '500': '#4388EE',
          '600': '#2D6AE3',
          '700': '#2556D0',
          '800': '#21409A',
          '900': '#233E85',
          '950': '#',
       },
        secondary : {
          '50' : '#FDF4EF',
          '100': '#FBE4D9',
          '200': '#F5C6B3',
          '300': '#EF9F82',
          '400': '#E66747',
          '500': '#E14A2E',
          '600': '#D33323',
          '700': '#AF251F',
          '800': '#8C2020',
          '900': '#711D1D',
          '950': '#3D0D0E',
        },
        neutral : {
          '50' : '#F6F7F9',
          '100': '#ECEEF2',
          '200': '#D5D9E2',
          '300': '#FFFFFF',
          '400': '#8695AA',
          '500': '#64748B',
          '600': '#526077',
          '700': '#434E61',
          '800': '#3A4252',
          '900': '#343A46',
          '950': '#23272E',
        },
        danger : {
          '50' : '#FFF0F0',
          '100': '#FFDDDD',
          '200': '#FFC0C0',
          '300': '#FF9494',
          '400': '#FF5757',
          '500': '#FF2323',
          '600': '#FF0505',
          '700': '#D70000',
          '800': '#B10303',
          '900': '#920A0A',
          '950': '#500000',
        },
        success : {
          '50' : '#EEFFF0',
          '100': '#D6FFDE',
          '200': '#B0FFC0',
          '300': '#73FF90',
          '400': '#43F967',
          '500': '#05E231',
          '600': '#00BC24',
          '700': '#029320',
          '800': '#08731F',
          '900': '#095E1D',
          '950': '#00350C',
        },
        warning : {
          '50' : '#FFFEE7',
          '100': '#FFFEC1',
          '200': '#FFF886',
          '300': '#FFEC41',
          '400': '#FFDB0D',
          '500': '#FFCC00',
          '600': '#D19500',
          '700': '#A66A02',
          '800': '#89530A',
          '900': '#74430F',
          '950': '#442304',
        }
      },
      fontSize:{
        '3XS' : '10px',
        '2XS' : '12px',
        'XS'  : '14px',
        'S'   : '16px',
        'M'   : '18px',
        'L'   : '24px',
        'XL'  : '32px',
        '2XL' : '36px',
        '3XL' : '40px',
        '4XL' : '72px',
      },
      fontWeight:{
       
      },
      height: {
        'small' : '36px',
        'medium' : '40px',
        'large' : '46px',
        'xlarge' : '54px',
      },
      // width: {
      //   'small' : '114px',
      //   'medium' : '126px',
      //   'large' : '141px',
      //   'xlarge' : '153px',
      // },
      fontFamily:{
        'poppins': [ 'Poppins-Medium.ttf'],
      }
    },
  },
  plugins: [nextui()],
}
export default config
