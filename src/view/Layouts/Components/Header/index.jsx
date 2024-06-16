import React from 'react'
import { Logo, Search, Settings, ProfileData } from './components'

import styles from './Header.module'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerWrapperLogo}>
        <Logo />
      </div>
      <div className={styles.headerWrapperSearch}>
        <Search />
      </div>
      <div className={styles.headerWrapperSettings}>
        <Settings />
      </div>
      <div className={styles.headerWrapperProfile}>
        <ProfileData />
      </div>
    </div>
  )
}

export default Header
