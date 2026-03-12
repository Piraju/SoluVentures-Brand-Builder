import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandingPage } from './LandingPage' // Sem o caminho "/src", pois já estão na mesma pasta

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
)
