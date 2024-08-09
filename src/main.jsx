import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './Error-page.jsx'
import App from './App.jsx'
import Acceuil from './pages/Acceuil/index.jsx'
import WebSite from './pages/WebSite/index.jsx'
import DesignBranding from './pages/DesignBranding/index.jsx'
import Marketing from './pages/Marketing/index.jsx'
import Apropos from './pages/Apropos/index.jsx'
import Contact from './pages/Contact/index.jsx'
import './index.css'
import Realisation from './pages/Realisation/index.jsx'
import HpPrestige from './pages/Realisation/HpPrestige/index.jsx'


const rooter= createBrowserRouter([
     {
      path: "/agence-tech/" ,
      element: <App/> ,
      errorElement: <ErrorPage/>,
      children:[
        {
          index:true,
          element:<Acceuil/>,
        },
        {
          path:"/agence-tech/web-design",
          element:<WebSite/>,
        },
        {
          path:"/agence-tech/design-branding",
          element:<DesignBranding/>,
         },
        {
          path:"/agence-tech/marketing",
          element:<Marketing/>,
        },
        {
          path:"/agence-tech/realisation",
          element:<Realisation/>,
        },
        {
          path:"/agence-tech/realisation/hp-prestige",
          element:<HpPrestige/>,
        },
        {
          path:"/agence-tech/realisation/eve-event-glorie",
          element:<Realisation/>,
        },
        {
          path:"/agence-tech/apropos",
          element:<Apropos/>,
        },
        {
          path:"/agence-tech/contact",
          element:<Contact/>,
        },
      ]
        } 
],
// {basename: "/agence-tech"}
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={rooter} />
  </React.StrictMode>,
)
