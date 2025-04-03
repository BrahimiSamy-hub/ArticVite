import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './assets/css/tailwind.css'
import './assets/css/material.css'
import ScrollToTop from './components/scroll-to-top'
import Switcher from './components/switcher'
import i18n from './i18n'
import { I18nextProvider } from 'react-i18next'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
        <ScrollToTop />
        <Switcher />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
