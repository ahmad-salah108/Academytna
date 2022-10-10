import React from 'react'
import '../../assest/css/goldMemberShip/passwordSetting.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function PasswordSetting() {
  useEffect(()=>{
    window.scrollTo({
        behavior:"smooth",
        top:0
    })
},[]);
  return (
    <div className='password-setting'>
        <GoldenNavbar/>
        <div className='container setting-wrapper'>
            <h2 className='setting-title'>إعدادات الحساب</h2>
            <div className='top-links-setting'>
                <div>
                  <Link to={"/goldStudent/setting/account"} className="link">إعدادات الحساب</Link>
                </div>
               <div  className='current-page'>
                <Link to={"/goldStudent/setting/password"} className="link">إعدادات كلمة المرور </Link>
               </div>
            </div>
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
        </div>
    </div>
  )
}
