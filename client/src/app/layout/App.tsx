import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../../features/about/About';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/Contact';
import HomePage from '../../features/home/Home';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode:  paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  function toggleFunction(){
    setDarkMode(prevState => !prevState)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleFunction={toggleFunction} darkMode={darkMode}/>
      <Container>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Container>

    </ThemeProvider>
  );
}

export default App;
