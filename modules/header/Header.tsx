import Image from 'next/image'
import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {ImHome3} from 'react-icons/im'
import {MdSupervisorAccount, MdBusinessCenter} from 'react-icons/md'
import {HiChat} from 'react-icons/hi'
import {CgMenuGridR} from 'react-icons/cg'
import {IoIosNotifications} from 'react-icons/io'
import HeaderOptions from '../headerOptions/HeaderOptions'
import Link from 'next/link'
import {useDispatch, useSelector} from 'react-redux'
// import {logout, selectUser} from '@/redux/userSlice'
// import {auth} from '@/firebase'
import {Avatar} from '@mui/material'
import {logout, selectUser} from '@/app/redux/userSlice'
import {auth} from '@/firebase'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='logo__container'>
          <Image
            src={
              'https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png'
            }
            alt='linkedInImage'
            height={60}
            width={60}
          />
        </div>
        <div className='search_wrapper'>
          <BiSearch />
          <input type='text' className='search__input' placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOptions Icon={ImHome3} title='Home' />
        <HeaderOptions Icon={MdSupervisorAccount} title='My Network' />
        <HeaderOptions Icon={MdBusinessCenter} title='Jobs' />
        <HeaderOptions Icon={HiChat} title='Messaging' />
        <HeaderOptions Icon={IoIosNotifications} title='Notifications' />
        <HeaderOptions
          avatar={true}
          title='me'
          onClick={logoutOfApp}
          style={{Cursor: 'pointer', FontSize: '25px'}}
        />
        {/* <div className='header_avatar'>
          <Avatar
            src={user?.photoUrl}
            style={{height: '25px', width: '25px'}}
            className='sidebar__avatar'
            onClick={logoutOfApp}
          >
            {user?.email[0]}
          </Avatar>
          <div className='avatar_text'>me</div>
        </div> */}
        <HeaderOptions Icon={CgMenuGridR} title='For Business' />
        <Link href='' className='premium'>
          try premium for <br /> free
        </Link>
      </div>
    </div>
  )
}

export default Header
