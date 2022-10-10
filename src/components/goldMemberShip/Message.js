import React from 'react'
import profile from '../../images/istockphoto.jpg'
import '../../assest/css/goldMemberShip/Message.css'

export default function Message({message, isOwn}) {
  return (
    <div className={`message-wrapper`}>
      <div className={`user-wrapper ${isOwn&&"own-message"}`}>
        <div className='image-user-wrapper'>
            <img src={profile} alt="" className='user-image'/>
            <span className='active-user'></span>
        </div>
        <div className='text-wrapper'>
            <h6 className={`user-name ${isOwn&&"own"}`}>{message.username}</h6>
            <p className='message-text'>{message.text}</p>
        </div>
      </div>
    </div>
  )
}
