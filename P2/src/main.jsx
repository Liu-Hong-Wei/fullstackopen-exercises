import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Countries from './ans/Countries'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Countries />
  </StrictMode>,
)
