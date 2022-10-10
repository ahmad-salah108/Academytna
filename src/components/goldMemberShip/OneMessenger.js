import React from 'react'
import '../../assest/css/goldMemberShip/OneMessenger.css'
import image from '../../images/istockphoto.jpg'
import Message from './Message'
import {IoMdAttach} from 'react-icons/io'

export default function OneMessenger() {
  return (
    <div className='one-messenger'>.
    {/* div for current user login */}
        <div className='current-user'>
            <img src={image} alt="" className='current-user-image'/>
            <h5 className='current-user-name'>انور انور</h5>
        </div>

        {/* div for messages */}
        <div className='messages-wrapper'>
          <Message message={{username:"انور انور", text:"السلام عليكم ممكن استفسار ؟"}}/>
          <Message message={{username:"انور انور", text:"السلام عليكم ممكن استفسار ؟"}} isOwn={true}/>
          <Message message={{username:"انور انور", text:"السلام عليكم ممكن استفسار ؟"}}/>
          <Message message={{username:"انور انور", text:"السلام عليكم ممكن استفسار ؟"}}/>
          <Message message={{username:"انور انور", text:"السلام عليكم ممكن استفسار ؟"}} isOwn={true}/>
          <Message message={{username:"انور انور", text:"السلام عليكم ممكن استفسار ؟"}}/>
        </div>

        {/* form to sent a message */}
        <form className='form-sent-message'>
          <textarea className='message-box' placeholder='هنا النص'/>
          <div className='message-control'>
            <button className='send-btn'>ارسال</button>
            <div className='file-upload'>
              <input id='file' type={'file'} className="file"/>
              <label className='icon-file' htmlFor='file'><IoMdAttach/></label>
            </div>
          </div>
        </form>
    </div>
  )
}
