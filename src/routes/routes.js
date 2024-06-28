import adminRoutes from '@modules/Admin/Routes'
import loginRoutes from '@modules/Login/Routes'
import mockRoutes from './mockRouteData'

const routes = [...adminRoutes, ...loginRoutes, ...mockRoutes]

export default routes
