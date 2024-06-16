import React from 'react'
import styles from './Title.module.scss'
import PropTypes from 'prop-types'

const Title = (props) => {
  return (
    <div className={styles.SidebarTitle}>
      <div className={styles.SidebarTitleText}>{props.title}</div>
      <div {...props} />
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
