import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/landingPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
