import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import walletReducer from './features/wallet'
import eatenSushisReducer from './features/eatenSushis'
import SushisReducer from './features/sushis'
import SushiIndexReducer from './features/sushiIndex'
//set up store first parameter is an object of reducers
//reduce is a function that takes info about the current states and an action you want to perform.
const store = configureStore({
  reducer: {
    wallet: walletReducer,
    sushis: SushisReducer,
    eatenSushis: eatenSushisReducer,
    sushiIndex: SushiIndexReducer,
  },
})

ReactDOM.render(
  <React.StrictMode>
    {/* determine which components have access to the store. in this case all of app and children will have access */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
