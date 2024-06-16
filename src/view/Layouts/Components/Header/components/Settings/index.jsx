import React from 'react'
import styles from './Settings.module.scss'

import { BellIcon, PrinterIcon, SettingsIcon, Info } from '@icons'

const Settings = () => {
  return (
    <div className={styles.settings}>
      <PrinterIcon />
      <BellIcon />
      <SettingsIcon />
      <Info />
    </div>
  )
}

export default Settings
