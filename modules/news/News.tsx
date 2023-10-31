import React from 'react'
import {HiInformationCircle} from 'react-icons/hi'
import {GoDotFill} from 'react-icons/go'

const News = () => {
  const newsText = (headingText: string, normalText: string) => (
    <div className='news_wrapper'>
      <div className='headingText'>
        <span>
          <GoDotFill />
        </span>
        {headingText}
      </div>
      <div className='normalText'>{normalText}</div>
    </div>
  )
  return (
    <div className='news'>
      <div className='news_heading'>
        <div className='news_text'>LinkedIn News</div>
        <div className='icon'>
          <HiInformationCircle />
        </div>
      </div>
      {newsText(
        'Neeraj Chopra bags Asian Games gold',
        'Top news 2,636 readers'
      )}
      {newsText('Norwegian author wins Nobel Prize', '2h ago 3,455 readers')}
      {newsText('India Inc legal expenses jump', '2d ago 2,465 readers')}
      {newsText('Outlet malls a new retail favourite', '2d ago 2,655 readers')}
      {newsText('Luxury housing on solid ground', '3d ago 2,465 readers')}
      {newsText('Univo to hire 1,000', '3d ago 2,355 readers')}
      {newsText('Getting hired at a top startup', '3d ago 3,575 readers')}
      {newsText('World Cup fever grips businesses', '3d ago 3,575 readers')}
    </div>
  )
}

export default News
