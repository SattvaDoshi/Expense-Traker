import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout, { dashBoardLoader } from './Layout'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import { logoutAction } from './action/logout.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: dashBoardLoader,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <Dashboard/>,
        loader: dashBoardLoader,
        errorElement: <Error />,
      },
      {
        path:"/logout",
        action : logoutAction
      }
    ]
  }

])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App