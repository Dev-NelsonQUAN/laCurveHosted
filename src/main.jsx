import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './Components/Global/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store ={store}>
        <PersistGate loading = {<h1>Loading...</h1>} persistor={persistor}>
    <App />


        </PersistGate>

    </Provider>
)


