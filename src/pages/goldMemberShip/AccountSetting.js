import React from 'react'
import '../../assest/css/goldMemberShip/accountSetting.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar'
import { Link } from 'react-router-dom'
import {AiOutlineCamera} from 'react-icons/ai'
import profile from '../../images/istockphoto.jpg'
import { useEffect } from 'react'

export default function AccountSetting() {
  useEffect(()=>{
    window.scrollTo({
        behavior:"smooth",
        top:0
    })
},[]);
  return (
    <div className='account-setting'>
        <GoldenNavbar/>
        <div className='container setting-wrapper'>
            <h2 className='setting-title'>إعدادات الحساب</h2>
            <div className='top-links-setting'>
                <div  className='current-page'>
                  <Link to={"/goldStudent/setting/account"} className="link">إعدادات الحساب</Link>
                </div>
               <div>
                <Link to={"/goldStudent/setting/password"} className="link">إعدادات كلمة المرور </Link>
               </div>
            </div>
            <form className='contact-information'>
              <div className='wrapper-info'>
                <h4 className='contact-title'>معلومات التواصل</h4>
                <div className='input-wrapper-image'>
                  <img src={profile} alt="" className='image-file'/>
                  <label htmlFor='file' className='file-label'><AiOutlineCamera/></label>
                  <input type={"file"} className="file" id='file'/>
                </div>
                <div className='input-wrapper'>
                  <label className='input-title'>الاسم واللقب</label>
                  <input type={"text"} className="input"/>
                </div>
                <div className='input-wrapper'>
                  <label  className='input-title'>الجنس</label>
                  <select className="input select">
                    <optgroup label='اختيار الجنس' className='descripe-select'>
                      <option className='option'>ذكر</option>
                      <option className='option'>انثى</option>
                    </optgroup>
                  </select>
                </div>
                <div className='input-wrapper'>
                  <label className='input-title'>تاريخ الميلاد </label>
                  <input type={"date"} className="input"/>
                </div>
                <div className='input-wrapper'>
                  <label className='input-title'>الولاية</label>
                  <input type={"text"} className="input"/>
                </div>
                <div className='input-wrapper'>
                  <label  className='input-title'>نوع العضوية</label>
                  <select className="input select">
                    <optgroup label='اختار نوع العضوية' className='descripe-select'>
                      <option className='option'>عضوية فضية</option>
                      <option className='option'>عضوية ذهبية</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <button className='edit-btn'>تعديل </button>
            </form>
        </div>
      </div>
  )
}
