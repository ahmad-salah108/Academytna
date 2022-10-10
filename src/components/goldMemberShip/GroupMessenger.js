import React from 'react'
import '../../assest/css/goldMemberShip/groupMessenger.css'
import image from '../../images/istockphoto.jpg'
import Message from './Message'
import {IoMdAttach} from 'react-icons/io'

export default function GroupMessenger() {
  return (
    <div className='group-messenger'>.
    {/* div for users in group */}
        <div className='current-group'>
            <div className='users-group-wrapper'>
                <img src={image} alt="" className='user-group'/>
                <img src={image} alt="" className='user-group'/>
                <img src={image} alt="" className='user-group'/>
                <img src={image} alt="" className='user-group'/>
                <img src={image} alt="" className='user-group'/>
                <img src={image} alt="" className='user-group'/>
            </div>
            <h5 className='current-group-name'>مجموعة الرياضيات #1</h5>
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
