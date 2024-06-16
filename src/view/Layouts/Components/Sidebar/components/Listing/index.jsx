import React, { useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSidebarContext } from '../../context'
import styles from './Listing.module.scss'

const Listing = (props) => {
  const navigate = useNavigate()
  const { pathName } = useSidebarContext()
  const [sidebarList, setSidebarList] = useState(props.sidebarDatas)
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  const linkAction = (event, sidebarClickedData) => {
    if (sidebarClickedData && sidebarClickedData.children) {
      sidebarClickedData.children.map((i) => {
        i.isActive = !i.isActive
      })
    }
    if (sidebarClickedData.isSidebarPathActive) gotoPath(sidebarClickedData.fullPath)
    forceUpdate()
  }

  const gotoPath = (pathName) => {
    if (pathName) navigate(pathName)
  }
  return (
    <ul className={styles.Listing}>
      <>
        {sidebarList.map((item, index) =>
          item.isActive ? (
            <li key={item.key + index}>
              <div className={`${styles.ListingItem} ${item.path === pathName ? styles.ListingItemActive : ''}`}>
                <div className={styles.ListingItemInformation}>
                  <a onClick={(event) => linkAction(event, item)}>
                    {item.IconComponent && <item.IconComponent></item.IconComponent>}
                    {item.name}
                  </a>
                </div>
              </div>
              {(item?.children?.length && <Listing isChild={true} sidebarDatas={item?.children} />) || null}
            </li>
          ) : null
        )}
      </>
    </ul>
  )
}

export default Listing
