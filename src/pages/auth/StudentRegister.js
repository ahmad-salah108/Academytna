import { useRef } from 'react'
import {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function StudentRegister() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const password = useRef(null);
  const {ref, ...rest} = register('password', {required: 'كلمة المرور مطلوبة'});

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
    <div className='student-register container'>
        <div className='register-top'>
            <h2 className='heading'>انضم الينا </h2>
            <h3 className='hasaccount'>انضم الينا هل لديك حساب على اكادميتنا ؟ <Link to={"/login/student"} className="link">تسجيل الدخول</Link> </h3>
            <div className='register-as'>
                <Link to={"/register/student"} className="active">تسجيل كطالب </Link>
                <Link to={"/register/teacher"} className="notActive">تسجيل كمعلم </Link>
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
                  <label className='input-title'> كلمة المرور   </label>
                  <input type={'password'} ref={e => {ref(e); password.current = e;}} {...rest}  className="input"/>
                  <span style={{color: 'red'}}>{errors.password?.message}</span>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> تاكيد كلمة المرور  </label>
                  <input type={'password'} {...register('confirmPass', {
                    required: 'تاكيد كلمة المرور مطلوب',
                    validate: v => v==password.current.value ? true : 'كلمة المرور غير مطابقة'
                    })} className="input"/>
                  <span style={{color: 'red'}}>{errors.confirmPass?.message}</span>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'>الجنس</label>
                  <select {...register('gender')} className="input select">
                    <optgroup label='اختيار الجنس' className='descripe-select'>
                      <option className='option'>ذكر</option>
                      <option className='option'>انثى</option>
                    </optgroup>
                  </select>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'>المستوى التعليمي </label>
                  <select {...register('level')} className="input select">
                    <optgroup label=' اختر المستوى ' className='descripe-select'>
                      <option className='option'>مستوي التعليم الابتدائي </option>
                      <option className='option'>مستوي التعليم المتوسط </option>
                      <option className='option'> مستوي التعليم الثانوي  </option>
                    </optgroup>
                  </select>
                </div>
                <div className='form-input-wrapper'>
                  <label className='input-title'> السنة الدراسية </label>
                  <select {...register('year')} className="input select">
                    <optgroup label='  اختر السنة الدراسية   ' className='descripe-select'>
                      <option className='option'>السنة الاولى</option>
                      <option className='option'> السنة الثانية </option>
                      <option className='option'>السنة الثالثة </option>
                    </optgroup>
                  </select>
                </div>
                <div className='policy-wrapper'>
                  <input type={"checkbox"} {...register('policy', {required: 'يجب الموافقة على شروط الخدمة وسياسة الخصوصية'})} className="input-radio" id='student-policy'/>
                  <label className='policy-label' htmlFor="student-policy">بالضغط على التسجيل أنا أوافق على شروط الخدمة و سياسة الخصوصية  </label>
                </div>
                <span style={{color: 'red'}}>{errors.policy?.message}</span>
                <button className='register-btn'>سجل الان </button>
              </form>
          </div>
        </div>
    </div>
  )
}
