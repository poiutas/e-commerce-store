import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AboutPage from '../../features/about/About';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/Contact';
import HomePage from '../../features/home/Home';
import Header from './Header';
import 'react-toastify/dist/ReactToastify.css'
import ServerError from '../error/ServerError';
import NotFound from '../error/NotFound';

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
      <ToastContainer position="bottom-right" hideProgressBar/>
      <CssBaseline />
      <Header toggleFunction={toggleFunction} darkMode={darkMode}/>
      <Container>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/server-error' component={ServerError} />
        <Route component={NotFound} />
        </Switch>
        
      </Container>

    </ThemeProvider>
  );
}

export default App;
