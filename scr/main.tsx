import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandingPage } from './LandingPage'
import './index.css' // Se você tiver um arquivo de CSS global

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
)
