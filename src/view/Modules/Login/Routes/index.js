import Login from '../'

const loginRoutes = [
  {
    path: '/login',
    Component: Login,
    metaData: {
      name: 'Login (Home)',
      key: 'portal',
      sidebarActive: true,
      sidebarPathActive: true
    }
  }
]

export default loginRoutes
