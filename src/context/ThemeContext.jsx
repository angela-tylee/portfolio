import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
    useEffect(() => {
  
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        return;
      }
  
      const initialTheme =
        document.documentElement.getAttribute('data-bs-theme') || 'light';
      setTheme(initialTheme);
      localStorage.setItem('theme', initialTheme);
  
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}