import React from 'react'
import '../../assest/css/goldMemberShip/passwordSetting.css'
import { useEffect } from 'react'

export default function PasswordSetting() {
  useEffect(()=>{
    window.scrollTo({
        behavior:"smooth",
        top:0
    })
},[]);

  return (
    <form className='contact-information'>
      <div className='wrapper-info'>
        <h4 className='contact-title'>اعادة تعين كلمة المرور</h4>
        <div className='input-wrapper'>
          <label className='input-title'>كلمة المرور القديمة </label>
          <input type={"password"} className="input"/>
        </div>
        <div className='input-wrapper'>
          <label className='input-title'>كلمة المرور الجديده </label>
          <input type={"password"} className="input"/>
        </div>
        <div className='input-wrapper'>
          <label className='input-title'>تاكيد كلمة المرور الجديدة </label>
          <input type={"password"} className="input"/>
        </div>
      </div>
      <button className='edit-btn'>تعديل </button>
    </form>
  )
}
