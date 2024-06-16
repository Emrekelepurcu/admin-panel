import Admin from '../'
import { Console } from '@icons'
import { ROUTE_CATEGORIES } from '@constants'

const adminRoutes = [
  {
    path: '/',
    Component: Admin,
    metaData: {
      name: 'Portal (Home)',
      key: 'portal',
      sidebarActive: true,
      sidebarPathActive: true,
      IconComponent: Console,
      category: ROUTE_CATEGORIES.allServices.key
    }
  }
]

export default adminRoutes
