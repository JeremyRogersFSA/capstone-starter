import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
const app = createRoot(root)
app.render(
  <StrictMode>
    <App />
  </StrictMode>
)
