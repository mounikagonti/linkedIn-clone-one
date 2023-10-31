import {Avatar} from '@mui/material'
import React from 'react'
import {BiLike, BiRepost} from 'react-icons/bi'
import {BsCalendarWeek, BsSendFill} from 'react-icons/bs'
import {FaRegCommentDots} from 'react-icons/fa'

const PostMsg = ({name, description, message, photoUrl}: any) => {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <div className='post__option__one'>
          <div className='photo__icon media'>
            <BiLike />
          </div>
          <div className='post__text'>Like</div>
        </div>
        <div className='post__option__one'>
          <div className='photo__icon event'>
            <FaRegCommentDots />
          </div>
          <div className='post__text'>Comment</div>
        </div>
        <div className='post__option__one'>
          <div className='photo__icon article'>
            <BiRepost />
          </div>
          <div className='post__text'>Repost</div>
        </div>
        <div className='post__option__one'>
          <div className='photo__icon article'>
            <BsSendFill />
          </div>
          <div className='post__text'>Send</div>
        </div>
      </div>
    </div>
  )
}

export default PostMsg
