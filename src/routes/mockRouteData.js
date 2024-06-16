import { ROUTE_CATEGORIES } from '@constants'
import { AppManager, Console, DataSource, File, Flow, Microfunction, Monitoring, Studio } from '@icons'

const mockRoutes = [
  {
    metaData: {
      name: 'Studio',
      key: 'studio',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: Studio,
      category: ROUTE_CATEGORIES.allServices.key
    }
  },
  {
    metaData: {
      name: 'Datasources',
      key: 'datasources',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: DataSource,
      category: ROUTE_CATEGORIES.allServices.key
    }
  },
  {
    metaData: {
      name: 'Flow Machine',
      key: 'flowmachine',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: Flow,
      category: ROUTE_CATEGORIES.allServices.key
    }
  },
  {
    metaData: {
      name: 'Micro Functions',
      key: 'microfunctions',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: Microfunction,
      category: ROUTE_CATEGORIES.allServices.key
    }
  },
  {
    metaData: {
      name: 'Gateway',
      key: 'gateway',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: Monitoring,
      category: ROUTE_CATEGORIES.allServices.key
    }
  },
  {
    metaData: {
      name: 'File Storage',
      key: 'filestorage',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: File,
      category: ROUTE_CATEGORIES.allServices.key
    }
  },
  {
    metaData: {
      name: 'Application Manager',
      key: 'appmanager',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: AppManager,
      category: ROUTE_CATEGORIES.others.key
    }
  },
  {
    metaData: {
      name: 'Monitoring',
      key: 'monitoring',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: Monitoring,
      category: ROUTE_CATEGORIES.others.key
    }
  },
  {
    metaData: {
      name: 'Console',
      key: 'console',
      sidebarActive: true,
      sidebarPathActive: false,
      IconComponent: Console,
      category: ROUTE_CATEGORIES.others.key
    }
  }
]

export default mockRoutes
