import {useEffect, useRef} from 'react'
import '../../assest/css/auth/techerLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import google from '../../images/Group.png'
import facebook from '../../images/فيس  2.png'
import axios from 'axios';

export default function TeacherLogin() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const authError = useRef();
  // const token = localStorage.get('accessToken')
  useEffect(()=>{
    window.scrollTo({
      behavior:"smooth",
      top:0
    })
  },[])

  const handleAuth = (e)=>{
    e.preventDefault();
    axios.post('https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/login', null,{
      params:{
        email: email.current.value,
        password: password.current.value
      }
    }).then(response => {
      if(response.status == 200){
        localStorage.setItem('access', response.data.data.access_token);
        // navigate('/')
      }else{
        console.log('auth error')
      }
    }).catch(err => {
      authError.current.textContent = 'خطأ في بيانات التسجيل'
    });
  };

  const asd = ()=>{
    axios.get('https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/my-classes', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`,
      }
    }).then(response => {
      console.log(response)
    }).catch(err => console.log(err))
  };

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
              <button onClick={asd}>Asd</button>
          </div>
        </div>
    </div>
  )
}
