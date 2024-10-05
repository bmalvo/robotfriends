import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Hello } from './Hello.tsx'
import 'tachyons'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hello greetings={ "Ninja"} />
    <App />
  </StrictMode>,
)
