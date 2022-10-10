import {useEffect} from 'react'
import '../../assest/css/auth/teacherRegister.css'
import { Link } from 'react-router-dom'
import google from '../../images/Group.png'
import facebook from '../../images/فيس  2.png'
import {IoIosAttach} from 'react-icons/io'

export default function TeacherRegister() {

  useEffect(()=>{
    window.scrollTo({
      behavior:"smooth",
      top:0
    })
  },[])

  return (
    <div className='teacher-register container'>
        <div className='register-top'>
            <h2 className='heading'>انضم الينا </h2>
            <h3 className='hasaccount'>انضم الينا هل لديك حساب على اكادميتنا ؟ <Link to={"/login/teacher"} className="link">تسجيل الدخول</Link> </h3>
            <div className='register-as'>
                <Link to={"/register/student"} className="notActive">تسجيل كطالب </Link>
                <Link to={"/register/teacher"} className="active">تسجيل كمعلم </Link>
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
                  <label className='input-title'>الاسم واللقب</label>
                  <input type={"email"} className="input"/>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'>رقم الجوال  </label>
                  <input type={'tel'} className="input"/>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> كلمة المرور   </label>
                  <input type={'password'} className="input"/>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> تاكيد كلمة المرور  </label>
                  <input type={'password'} className="input"/>
                </div>
                <div className='form-input-wrapper'>
                  <label  className='input-title'>الجنس</label>
                  <select className="input select">
                    <optgroup label='اختيار الجنس' className='descripe-select'>
                      <option className='option'>ذكر</option>
                      <option className='option'>انثى</option>
                    </optgroup>
                  </select>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'>   ارفاق السيرة الذاتية (CV)  </label>
                  <div>
                    <label htmlFor='file' className='label-chooseFile'><IoIosAttach/></label>
                    <input type={'file'} className="input file" id='file'/>
                  </div>
                </div>
                <div className='policy-wrapper'>
                  <input type={"checkbox"} className="input-radio" id='policy-input'/>
                  <label for='policy-input' className='policy-label'>بالضغط على التسجيل أنا أوافق على شروط الخدمة و سياسة الخصوصية  </label>
                </div>
                <button className='register-btn'>سجل الان </button>
              </form>
          </div>
        </div>
    </div>
  )
}
