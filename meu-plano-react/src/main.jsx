import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cronograma from './Cronograma.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cronograma />
  </StrictMode>,
)
