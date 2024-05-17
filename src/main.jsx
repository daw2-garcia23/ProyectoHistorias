import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './Componentes/GlobalContext.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <DataProvider>
    <NextUIProvider>
      <main className="purple-dark text-foreground">
        <App />
      </main>
    </NextUIProvider>
    </DataProvider>
  </React.StrictMode>,
);