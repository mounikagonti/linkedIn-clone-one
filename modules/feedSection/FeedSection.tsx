'use client'
import React, {useEffect, useState} from 'react'
import {BsImage, BsCalendarWeek, BsNewspaper} from 'react-icons/bs'
import firebase from 'firebase/compat/app'
import {useSelector} from 'react-redux'
import {Avatar} from '@mui/material'
import PostMsg from '../postMsg/PostMsg'
import {db} from '@/firebase'
import {selectUser} from '@/app/redux/userSlice'

const FeedSection = () => {
  const [isClient, setIsClient] = useState(false)
  const user = useSelector(selectUser)

  const [input, setInput] = useState<any>('')
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
    setIsClient(true)
  }, [])

  const sendPost = (e: any) => {
    e.preventDefault()
    db?.collection('posts').add({
      name: user?.displayName,
      description: user?.email,
      message: input,
      photoUrl: user?.photoUrl || '',
      timestamp: firebase?.firestore?.FieldValue?.serverTimestamp(),
    })
    setInput('')
  }

  if (!isClient) {
    return null
  }

  return (
    <div className='feedSection'>
      <div className='feed__top'>
        <div className='feed_img_wrapper'>
          <Avatar
            src={user?.photoUrl}
            style={{height: '40px', width: '40px'}}
            className='sidebar__avatar'
          >
            {user?.email[0]}
          </Avatar>

          <form>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Start a post'
            />
            <button onClick={sendPost} type='submit'>
              post
            </button>
          </form>
        </div>
        <div className='feed__options'>
          <div className='feed__option__one'>
            <div className='photo__icon media'>
              <BsImage />
            </div>
            <div className='feed__text'>Media</div>
          </div>
          <div className='feed__option__one'>
            <div className='photo__icon event'>
              <BsCalendarWeek />
            </div>
            <div className='feed__text'>Event</div>
          </div>
          <div className='feed__option__one'>
            <div className='photo__icon article'>
              <BsNewspaper />
            </div>
            <div className='feed__text'>Write article</div>
          </div>
        </div>
      </div>
      {posts?.map(({id, data: {name, description, message, photoUrl}}: any) => (
        <PostMsg
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default FeedSection
