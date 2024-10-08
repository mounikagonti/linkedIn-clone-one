'use client'
import React from 'react'
import {Avatar} from '@mui/material'
import {useSelector} from 'react-redux'
import {selectUser} from '@/app/redux/userSlice'

const HeaderOptions = ({avatar, Icon, title, onClick}: any) => {
  const user = useSelector(selectUser)

  return (
    <div className='headerOptions' onClick={onClick}>
      {Icon && <Icon className='headerOptions__icon' />}
      {avatar && (
        <Avatar className='headerOptions__icon' src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <div className='title'>{title}</div>
    </div>
  )
}

export default HeaderOptions
