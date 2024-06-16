import { createContext, useContext } from 'react'

export const SidebarContext = createContext({
  pathName: ''
})

export const useSidebarContext = () => useContext(SidebarContext)
