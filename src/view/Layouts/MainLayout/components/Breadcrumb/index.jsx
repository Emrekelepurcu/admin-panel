import React from 'react'
import cx from 'classnames'
import styles from './Breadcrumb.module'

const Breadcrumb = () => {
  return (
    <>
      <div className={cx(styles.mainPageBreadcrumb)}>
        <span>Home</span>/<span>WorkFlow</span>/<span className={cx(styles.mainPageBreadcrumbActive)}>Current Page</span>
      </div>
    </>
  )
}

export default Breadcrumb
