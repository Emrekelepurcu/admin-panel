import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/_app.scss'
import './index.scss'
import App from './App'

import { store } from '@/state/store'
import { Provider } from 'react-redux'

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <Provider store={store(window)}>
      <App />
    </Provider>
  </React.StrictMode>
)
