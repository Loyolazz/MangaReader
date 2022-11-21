import React from 'react';
import Router from './routes/Router';
import { ThemeProvider } from './themes/theme';

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}