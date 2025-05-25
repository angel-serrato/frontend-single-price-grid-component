import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'; // Import normalize.css first
import './index.css';  // Then your custom index
import SinglePrice from './SinglePrice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SinglePrice />
  </StrictMode>,
)
