import React from 'react'
import profile from '../../images/istockphoto.jpg'
import '../../assest/css/goldMemberShip/friendBox.css'

export default function FriendBox({info}) {
  return (
    <div className='friend'>
        <div className='friend-info'>
            <img src={profile} alt="" className='friend-image'/>
            <h6 className='friend-name'>{info.name}</h6>
        </div>
        <span className='time'>{info.time}</span>
    </div>
  )
}
