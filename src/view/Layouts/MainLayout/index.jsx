import React from 'react'
import cx from 'classnames'

import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

import { Notification, Breadcrumb } from './components'

import styles from './MainLayout.module'

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <div className={cx(styles.mainPageLayout)}>
        <Sidebar className={cx(styles.mainPageLayoutSidebar)} />
        <div className={cx(styles.mainPageLayoutContainer)}>
          <div className={cx(styles.mainPageLayoutBreadcrumb)}>
            <Breadcrumb />
          </div>
          <div className={cx(styles.mainPageLayoutNotification)}>
            <Notification />
          </div>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
