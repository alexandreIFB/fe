import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';
import Header from '../Header';
import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
