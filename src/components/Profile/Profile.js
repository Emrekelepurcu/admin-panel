import React from 'react'
import PropTypes from 'prop-types'
import { ProfileWrapper, ProfileInfo, ProfileName, ProfileEmail, ProfileAbb } from './Profile.styled'

const Profile = ({ name, email }) => {
  const nameAbbreviation =
    name &&
    name
      .replace(/\b(\w)\w+/g, '$1')
      .replace(/\s/g, '')
      .replace(/\.$/, '')
      .toUpperCase()

  return (
    <>
      <ProfileWrapper>
        <ProfileInfo>
          {name && <ProfileName>{name}</ProfileName>}
          {email && <ProfileEmail>{email}</ProfileEmail>}
        </ProfileInfo>
        {nameAbbreviation && <ProfileAbb>{nameAbbreviation}</ProfileAbb>}
      </ProfileWrapper>
    </>
  )
}

Profile.propTypes = {}

export default Profile
