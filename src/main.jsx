import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './assets/components/About.jsx';
import Products from './assets/components/Products.jsx';
import Team from './assets/components/Team.jsx';
import Checkout from './assets/components/Checkout.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "products",
    element: <Products/>,
  },
  {
    path: "team",
    element: <Team/>,
  },
  {
    path: "checkout",
    element: <Checkout/>,
  },
]); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
