import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'tachyons'
import { Card } from './Card'
import { robots } from './robots'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {robots.map(robot => <Card id={robot.id} name={robot.name} email={ robot.email} />)}
  </StrictMode>,
)
