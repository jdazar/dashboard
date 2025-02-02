import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/themes.css'
import './index.css'
import './styles/react-grid-layout.css'
import { GlobalContextProvider } from './context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
)
