import './App.css';
import { useState, useEffect } from 'react';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    const store = localStorage.getItem('theme') || [];
    setTheme(JSON.parse(store));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className='App'>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Blog theme={theme} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
