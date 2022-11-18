import {useEffect} from 'react'
import '../../assest/css/auth/techerLogin.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function TeacherLogin() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data)=>{
    console.log(data);
  }

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
              <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
                <div className='form-input-wrapper'>
                  <label className='input-title'>البريد الاكتروني</label>
                  <input type={"email"} {...register('email', {required: 'البريد الالكتروني مطلوب'})} className="input"/>
                  <span style={{color: 'red'}}>{errors.email?.message}</span>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> كلمة المرور   </label>
                  <input type={'password'} {...register('password', {required: 'كلمة المرور مطلوبة'})} className="input"/>
                  <span style={{color: 'red'}}>{errors.password?.message}</span>
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
