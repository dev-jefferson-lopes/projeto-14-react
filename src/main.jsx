import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/filme/:id",
    element: <Filme />,
  },
  {
    path: "/header",
    element: <Header />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
