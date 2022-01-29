import { createTheme } from '@mui/material/styles';
import PoppinsBoldWoff2 from '../assets/fonts/Poppins-Bold.woff2';
import PoppinsBoldWoff from '../assets/fonts/Poppins-Bold.woff';
import PoppinsRegularWoff2 from '../assets/fonts/Poppins-Regular.woff2';
import PoppinsRegularWoff from '../assets/fonts/Poppins-Regular.woff';
import AbelRegularWoff2 from '../assets/fonts/Abel-Regular.woff2';
import AbelRegularWoff from '../assets/fonts/Abel-Regular.woff';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24CCA7',
    },
    secondary: {
      main: '#FF6596',
      dark: '#4A56E2'
    },
  },
  typography: {
    fontFamily: 'Abel, Poppins, sans-serif',
    fontSize: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          src: url(${PoppinsBoldWoff2}) format('woff2'),
            url(${PoppinsBoldWoff}) format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Poppins';
          src: url(${PoppinsRegularWoff2}) format('woff2'),
            url(${PoppinsRegularWoff}) format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Abel';
          src: url(${AbelRegularWoff2}) format('woff2'),
            url(${AbelRegularWoff}) format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '300px',
          height: '50px',
          textTransform: 'uppercase',
          borderRadius: '20px'
        },
        outlined: {
          borderColor: '#4A56E2',
          color: '#4A56E2',
          '&:hover': {
            borderColor: '#4A56E2',
            color: '#4A56E2',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
          }
        }
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontFamily: 'Poppins',
            fontSize: 30,
            lineHeight: 1.5,
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0)',
          backdropFilter: 'blur(50px)',
          borderRadius: '20px'
        },
      }
    }
  },
});

export default theme;