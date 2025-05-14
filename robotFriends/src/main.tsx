import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import './index.css'
import 'tachyons'
import { App } from './containers/App'
import {searchRobots} from './reducers'

const store = createStore(searchRobots)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store}>
    <App  />
    </Provider>
  </StrictMode>,
)
