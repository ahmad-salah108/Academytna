import {useEffect} from 'react'
import '../../assest/css/auth/parentLogin.css'
import { Link } from 'react-router-dom'

export default function ParentLogin() {

    useEffect(()=>{
        window.scrollTo({
          behavior:"smooth",
          top:0
        })
      },[])
    

  return (
    <div className='parent-login container'>
        <div className='register-top'>
            <h2 className='heading'> سجل الدخول ولي امر الطالب </h2>
            <h3 className='description-login'>من هنا يمكنك تسجيل  دخول ولي امر الطالب ومتابعة ابناءه  </h3>
           <div className='register-process-wrapper'>
              <form className='register-form'>
                <div className='form-input-wrapper'>
                  <label className='input-title'>البريد الاكتروني</label>
                  <input type={"email"} className="input"/>
                </div>
                <div className='form-input-wrapper'>
                  <label  className='input-title'>عدد الابناء المسجلين </label>
                  <select className="input select">
                    <optgroup label='اختار عدد الابناء المسجلين ' className='descripe-select'>
                      <option className='option'>طالب واحد </option>
                      <option className='option'>اكثر من طالب </option>
                    </optgroup>
                  </select>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'>رقم ID الطالب  </label>
                  <input type={'text'} className="input"/>
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
