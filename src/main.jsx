import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
  import Global from './style/GlobalStyled'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Global/> 
  </React.StrictMode>,
)
