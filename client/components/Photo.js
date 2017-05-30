import React from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

const Photo = ({ post: { code, caption, likes, display_src: src }, comments, i, increment }) => (
  <figure className='grid-figure'>
    <div className='grid-photo-wrap'>
      <Link to={`/view/${code}`}>
        <img src={src} alt={caption} className='grid-photo' />
      </Link>
      <CSSTransitionGroup
        transitionName='like'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <span key={likes} className='likes-heart'>{likes}</span>
      </CSSTransitionGroup>
    </div>
    <figcaption>
      <p>{caption}</p>
      <div className='control-buttons'>
        <button onClick={() => increment(i)} className='likes'>&hearts; {likes}</button>
        <Link className='button' to={`/view/${code}`}>
          <span className='comment-count'>
            <span className='speech-bubble' />
            {comments[code] ? comments[code].length : 0}
          </span>
        </Link>
      </div>
    </figcaption>
  </figure >
)

export default Photo
