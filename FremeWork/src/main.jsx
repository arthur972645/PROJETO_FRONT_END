import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import Article from './Article/Article'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Article/>
  </React.StrictMode>,
)
