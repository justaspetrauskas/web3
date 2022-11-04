import { App } from './App'

import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)

import './style.css'
import { TransactionProvider } from './context/TransactionContext'

root.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
)
