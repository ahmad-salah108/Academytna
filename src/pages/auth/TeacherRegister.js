import {useEffect, useRef} from 'react'
import '../../assest/css/auth/teacherRegister.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function TeacherRegister() {
  const {register, handleSubmit, formState: {errors}, watch} = useForm();

  const onSubmit = (data)=>{
    console.log(data)
  }
  
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
              <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
                <div className='form-input-wrapper'>
                  <label className='input-title'>البريد الاكتروني</label>
                  <input type={"email"} {...register('email', {required: 'البريد الالكتروني مطلوب'})} className="input"/>
                  <span style={{color: 'red'}}>{errors.email?.message}</span>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'>الاسم</label>
                  <input {...register('name', {required: 'الاسم مطلوب'})} className="input"/>
                  <span style={{color: 'red'}}>{errors.name?.message}</span>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'>رقم الجوال  </label>
                  <input {...register('mobileNum', {required: 'رقم الجوال مطلوب'})} className="input"/>
                  <span style={{color: 'red'}}>{errors.mobileNum?.message}</span>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> كلمة المرور   </label>
                  <input type={'password'} {...register('password', {required: 'كلمة المرور مطلوبة'})} className="input"/>
                  <span style={{color: 'red'}}>{errors.password?.message}</span>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> تاكيد كلمة المرور  </label>
                  <input type={'password'} {...register('confirmPass', {
                    required: 'تاكيد كلمة المرور مطلوب',
                    validate: v => v==watch('password') ? true : 'كلمة المرور غير مطابقة'
                    })} className="input"/>
                  <span style={{color: 'red'}}>{errors.confirmPass?.message}</span>
                </div>
                <div className='form-input-wrapper'>
                  <label  className='input-title'>الجنس</label>
                  <select {...register('gender')} className="input select">
                    <optgroup label='اختيار الجنس' className='descripe-select'>
                      <option className='option'>ذكر</option>
                      <option className='option'>انثى</option>
                    </optgroup>
                  </select>
                </div>
                <div className='policy-wrapper'>
                  <input type={"checkbox"} {...register('policy', {required: 'يجب الموافقة على شروط الخدمة وسياسة الخصوصية'})} className="input-radio" id='policy-input'/>
                  <label htmlFor='policy-input' className='policy-label'>بالضغط على التسجيل أنا أوافق على شروط الخدمة و سياسة الخصوصية  </label>
                </div>
                <span style={{color: 'red'}}>{errors.policy?.message}</span>
                <button className='register-btn'>سجل الان </button>
              </form>
          </div>
        </div>
    </div>
  )
}
