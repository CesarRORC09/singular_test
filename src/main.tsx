import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SequencesApp from './SequencesApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SequencesApp />
  </StrictMode>,
)
