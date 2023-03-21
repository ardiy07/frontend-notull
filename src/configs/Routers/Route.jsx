import React from 'react'
import { useRoutes } from 'react-router-dom'
import { About, Dashboard, Home, Login, Notes, NotFound, Register, SendResetPass, SetPassword } from '../../pages'
import Coba from '../../pages/Coba/Coba';

const Route = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/auth/login',
      element: <Login />
    },
    {
      path: '/auth/register',
      element: <Register />
    },
    {
      path: '/auth/reset-password',
      element: <SendResetPass />
    },
    {
      path: '/auth/set-password',
      element: <SetPassword />
    },
    {
      path: '/s/dashboard',
      element: <Dashboard />
    },
    {
      path: '/s/note',
      element: <Notes />
    },
    {
      path: '/coba',
      element: <Coba />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
  return routes
}

export default Route