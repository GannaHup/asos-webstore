import { Constants } from 'constants/index'
import Home from 'screens/Home'
import Login from 'screens/Login'
import { NotFound } from 'screens/NotFound'
import Products from 'screens/Product'
import Search from 'screens/Search'

export const allMenu = [
  {
    path: Constants.route.HOME,
    element: <Home />,
    id: 'Dashboard',
    isPrivate: true,
  },
  {
    path: Constants.route.SEARCH,
    element: <Search />,
    id: 'Dashboard',
    isPrivate: true,
  },
  {
    path: Constants.route.LOGIN,
    element: <Login />,
    id: 'Login',
    isPrivate: false,
  },
  {
    path: Constants.route.PRODUCT,
    element: <Products />,
    id: 'Products',
    isPrivate: true,
  },
  {
    path: '*',
    element: <NotFound />,
    id: 'NotFound',
    isPrivate: true,
  },
]
