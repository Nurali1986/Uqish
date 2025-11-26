import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.jsx' // ✅ Asosiy App.jsx ni import qilamiz


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App /> {/* ✅ Endi Home.jsx ishlaydi */}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
