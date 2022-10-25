import {useEffect, useRef} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import google from '../../images/Group.png'
import facebook from '../../images/فيس  2.png'
import axios from 'axios';

export default function StudentLogin() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const authError = useRef();

  useEffect(()=>{
      window.scrollTo({
        behavior:"smooth",
        top:0
      })
    },[])
  
    const handleAuth = (e)=>{
      e.preventDefault();
      axios.post('https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/login', null,{
        params: {
          email: email.current.value,
          password: password.current.value,
        },
      }).then(response => {
        if(response.status == 200){
          navigate('/')
        }else{
          console.log('auth error')
        }
      }).catch(err => {
        authError.current.textContent = 'خطأ في بيانات التسجيل'
      });
    };

  return (
    <div className='student-login container'>
        <div className='register-top'>
            <h2 className='heading'>انضم الينا </h2>
            <h3 className='hasaccount'>ليس لديك حساب ؟ <Link to={"/register/student"} className="link">إنشاء حساب</Link> </h3>
            <div className='register-as'>
                <Link to={"/login/student"} className="active">تسجيل كطالب </Link>
                <Link to={"/login/teacher"} className="notActive">تسجيل كمعلم </Link>
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
                  <input ref={email} type={"email"} className="input"/>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> كلمة المرور   </label>
                  <input ref={password} type={'password'} className="input"/>
                </div>
                <Link className='forgot-password-link' to={"/forgot-password"}>
                هل نسيت كلمة المرور
                </Link>
                <button onClick={handleAuth} className='register-btn'> تسجيل الدخول  </button>
                <h2 style={{color: 'red'}} ref={authError}></h2>
              </form>
          </div>
        </div>
    </div>
  )
}
