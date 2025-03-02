import React from 'react';
import { Layout } from "../stories/Layout/Layout";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { ThemeProvider } from "../providers/ThemeProvider";
import './App.css';
import './theme/theme-light.scss';
import './theme/theme-dark.scss';

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <Layout></Layout>
        </ThemeProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
