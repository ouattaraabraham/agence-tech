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

const rooter= createBrowserRouter([
     {
      path: "/" ,
      element: <App/> ,
      errorElement: <ErrorPage/>,
      children:[
        {
          index:true,
          element:<Acceuil/>,
        },
        {
          path:"web-design",
          element:<WebSite/>,
        },
        {
          path:"design-branding",
          element:<DesignBranding/>,
         },
        {
          path:"marketing",
          element:<Marketing/>,
        },
        {
          path:"apropos",
          element:<Apropos/>,
        },
        {
          path:"contact",
          element:<Contact/>,
        },
      ],
           },    
],
{basename:'/agence-tech/'}
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={rooter} />
  </React.StrictMode>,
)
