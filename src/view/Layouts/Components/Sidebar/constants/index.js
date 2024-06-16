const routeMapping = (routeData, parentPath, activeChild, isParent = true) => {
  if (!routeData) return []
  return routeData
    .map((item) => {
      const fullPath = `${parentPath || ''}/${item.path}`
      const isChildsActive = false
      return {
        name: item.metaData?.name || item.path,
        key: item.metaData?.key || `${item.path}-${item.id}`,
        path: item.path,
        fullPath,
        IconComponent: item.metaData?.IconComponent,
        category: item.metaData?.category,
        isParent,
        isActive: isParent || activeChild,
        isSidebarActive: item.metaData?.sidebarActive,
        isSidebarPathActive: item.metaData?.sidebarPathActive,
        children: item.metaData?.sidebarActive ? routeMapping(item.children, fullPath, isChildsActive, false) : undefined
      }
    })
    .filter((el) => el.isSidebarActive)
}

export const sidebarDataMapping = (routeData) => {
  return routeMapping(routeData)
}
