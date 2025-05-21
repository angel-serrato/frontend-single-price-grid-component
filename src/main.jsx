import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SinglePrice from './SinglePrice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SinglePrice />
  </StrictMode>,
)
