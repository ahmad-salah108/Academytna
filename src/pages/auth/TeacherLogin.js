import {useEffect} from 'react'
import '../../assest/css/auth/techerLogin.css'
import { Link } from 'react-router-dom'
import google from '../../images/Group.png'
import facebook from '../../images/فيس  2.png'

export default function TeacherLogin() {

  useEffect(()=>{
    window.scrollTo({
      behavior:"smooth",
      top:0
    })
  },[])

  return (
    <div className='teacher-login container'>
        <div className='register-top'>
            <h2 className='heading'>انضم الينا </h2>
            <h3 className='hasaccount'>ليس لديك حساب ؟ <Link to={"/register/teacher"} className="link">إنشاء حساب</Link> </h3>
            <div className='register-as'>
                <Link to={"/login/student"} className="notActive">تسجيل كطالب </Link>
                <Link to={"/login/teacher"} className="active">تسجيل كمعلم </Link>
            </div>
           <div className='register-process-wrapper'>
              <div className='register-through'>
                <button className='register-way-box'>
                  <img src={google} alt="" className='image-way'/>
                  <span className='name-way'>عن طريق جوجل </span>
                </button>
                <span className='or'>او</span>
                <button className='register-way-box'>
                  <img src={facebook} alt=""  className='image-way'/>
                  <span className='name-way'>عن طريق الفيس </span>
                </button>
              </div>
              <form className='register-form'>
                <div className='form-input-wrapper'>
                  <label className='input-title'>البريد الاكتروني</label>
                  <input type={"email"} className="input"/>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> كلمة المرور   </label>
                  <input type={'password'} className="input"/>
                </div>
                <Link className='forgot-password-link' to={"/forgot-password"}>
                هل نسيت كلمة المرور
                </Link>
                <button className='register-btn'> تسجيل الدخول  </button>
              </form>
          </div>
        </div>
    </div>
  )
}
