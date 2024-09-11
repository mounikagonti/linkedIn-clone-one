'use client'
import {selectUser} from '@/app/redux/userSlice'
import {Avatar} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {useSelector} from 'react-redux'
// import {useSelector} from 'react-redux'

const SideBar = () => {
  const user = useSelector(selectUser)

  const recentItems = (topic: string) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <div className='img'>
          <Image
            className='sidebar__img'
            src='https://plus.unsplash.com/premium_photo-1672201106204-58e9af7a2888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11bHRpY29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'
            height={80}
            width={100}
            alt='img'
            style={{width: '100%'}}
          />
        </div>
        <Avatar
          src={user?.photoUrl}
          style={{height: '60px', width: '60px'}}
          className='sidebar__avatar'
        >
          {user?.email[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar__stat'>
          <p>Who Viewed You</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItems('India')}
        {recentItems('Groups')}
        {recentItems('Events')}
        {recentItems('Followed hashtags')}
        {recentItems('Programming')}
      </div>
    </div>
  )
}

export default SideBar
