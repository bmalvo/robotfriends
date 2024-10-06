import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'tachyons'
import { robots } from './robots'
import { CardArray } from './CardArray'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardArray robots={ robots} />
  </StrictMode>,
)
