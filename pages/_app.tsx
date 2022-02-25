import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Manrope'].join(','),
    body1: {
      fontSize: '15px',
      fontWeight: '500',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: '600',
    },
    h5: {
      fontSize: '22px',
      fontWeight: '600',
      lineHeight: '30.05px',
    },
  },
  palette: {
    primary: {
      main: '#587BE0',
      light: '#E0EDFF',
      contrastText: '#FCFCFC',
    },
    secondary: {
      light: '#f7e9ff',
      main: '#885FFF',
      contrastText: '#ffcc00',
    },
    success: {
      main: '#18D7A9',
      light: '#B072FF',
    },
    grey: {
      50: '#F5F5F5',
      100: '#DFDFE0',
      200: '#BEBEC2',
      300: '#A0A0A2',
      400: '#6F6E73',
      500: '#414047',
      600: '#33373B',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
