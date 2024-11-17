import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "todo-0", name: "CNIT 103 - Hardware", completed: true },
  { id: "todo-1", name: "CNIT 131 – Internet & Intro to HTML, CSS", completed: false },
  { id: "todo-2", name: "CNIT 106 – Introduction to Networks", completed: false },
  { id: "todo-3", name: "CNIT 120 – Network Security", completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)
