import React, { useState, useEffect } from 'react'
import { Infobox } from '@components'

import { showNotification } from '@events'

const Notification = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false)
  const [notificationDetail, setNotificationDetail] = useState({
    type: 'default',
    text: ''
  })

  useEffect(() => {
    showNotification('showNotification', (data) => {
      setIsNotificationVisible(true)
      setNotificationDetail({
        type: data.detail.type,
        text: data.detail.message
      })

      const visibleTimeout = setTimeout(() => {
        setIsNotificationVisible(false)
      }, 2000)

      return () => {
        clearTimeout(visibleTimeout)
      }
    })

    return () => {
      showNotification('showNotification', () => {
        setIsNotificationVisible(false)
      })
    }
  }, [])

  return isNotificationVisible && <Infobox type={notificationDetail.type} text={notificationDetail.text} />
}

export default Notification
