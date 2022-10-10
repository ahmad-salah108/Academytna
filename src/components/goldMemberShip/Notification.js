import React from 'react'
import '../../assest/css/goldMemberShip/notification.css'
import {IoIosNotificationsOutline} from 'react-icons/io'

export default function Notification({noti}) {
  return (
    <div className='notification'>
        <div className='noti-icon-wrapper'>
            <IoIosNotificationsOutline/>
        </div>
        <div className='noti-content'>
            <p className='noti-text'>{noti.text}</p>
            <span className='noti-time'>{noti.time}</span>
        </div>
    </div>
  )
}
