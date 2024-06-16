import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Sidebar.module.scss'
import { sidebarDataMapping } from './constants'
import { Listing, Title } from './components'
import { useLocation } from 'react-router-dom'
import { SidebarContext } from './context'
import routes from '@routes/routes'
import { ROUTE_CATEGORIES } from '@constants'

const Sidebar = ({ className = '' }) => {
  const pathName = useLocation().pathname

  const routeDataMapping = routes.map((i) => {
    return {
      path: i.path,
      id: i.id,
      children: i.children,
      metaData: i.metaData
    }
  })

  const mappedSidebar = sidebarDataMapping(routeDataMapping)

  const sidebarRender = () => {
    return Object.keys(ROUTE_CATEGORIES).map((item, index) => {
      const data = ROUTE_CATEGORIES[item]
      const categoryFilteredSidebar = mappedSidebar.filter((i) => i.category === data.key)
      return categoryFilteredSidebar && categoryFilteredSidebar.length ? (
        <Title key={data?.key + index} title={data?.text}>
          <Listing sidebarDatas={categoryFilteredSidebar} isChild={false} />
        </Title>
      ) : null
    })
  }

  return (
    <>
      <div className={cx(styles.Sidebar, className)}>
        <SidebarContext.Provider
          value={{
            pathName
          }}
        >
          {sidebarRender()}
        </SidebarContext.Provider>
      </div>
    </>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string
}

export default Sidebar
