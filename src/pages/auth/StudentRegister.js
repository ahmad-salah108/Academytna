import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import google from '../../images/Group.png'
import facebook from '../../images/فيس  2.png'

export default function StudentRegister() {

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
                  <label  className='input-title'>المستوى التعليمي </label>
                  <select className="input select">
                    <optgroup label=' اختر المستوى ' className='descripe-select'>
                      <option className='option'>مستوي التعليم الابتدائي </option>
                      <option className='option'>مستوي التعليم المتوسط </option>
                      <option className='option'> مستوي التعليم الثانوي  </option>
                    </optgroup>
                  </select>
                </div>
                <div className='form-input-wrapper'>
                  <label  className='input-title'> السنة الدراسية </label>
                  <select className="input select">
                    <optgroup label='  اختر السنة الدراسية   ' className='descripe-select'>
                      <option className='option'>السنة الاولى</option>
                      <option className='option'> السنة الثانية </option>
                      <option className='option'>السنة الثالثة </option>
                    </optgroup>
                  </select>
                </div>
                <div className='form-input-wrapper'>
                  <label  className='input-title'> الشعبة </label>
                  <select className="input select">
                    <optgroup label='اختر  الشعبة  ' className='descripe-select'>
                      <option className='option'> شعبة علوم تجريبية</option>
                      <option className='option'> شعبة رياضيات </option>
                      <option className='option'> شعبة تسيير واقتصاد </option>
                      <option className='option'> شعبة تقني رياضي </option>
                      <option className='option'> شعبة فلسفة ولغات اجنبية </option>
                    </optgroup>
                  </select>
                </div>
                <div className='policy-wrapper'>
                  <input type={"checkbox"} className="input-radio" id='student-policy'/>
                  <label className='policy-label' for="student-policy">بالضغط على التسجيل أنا أوافق على شروط الخدمة و سياسة الخصوصية  </label>
                </div>
                <button className='register-btn'>سجل الان </button>
              </form>
          </div>
        </div>
    </div>
  )
}
