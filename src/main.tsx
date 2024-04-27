import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/landingPage.tsx'
import Login from './components/authentication/login.tsx'
import Register from './components/authentication/register.tsx'
import HomePage from './components/homePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/home",
    element: <HomePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
