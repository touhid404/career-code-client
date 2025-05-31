import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './router/router.jsx'
import AuthPtovider from './contexts/AuthContexts/AuthPtovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthPtovider>
    <RouterProvider router={router}></RouterProvider>

    </AuthPtovider>
  </StrictMode>,
)
