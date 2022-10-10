import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/exams/examsCategorySidebar.css'

export default function ExamsCategoryBar() {
    return (
    <div className='exams-bar'>
        <h3 className="title-content">الفئات</h3>
        <ul className="bar-wrapper">
            <Link to={'/exams/'} className={`link`}
                >الجميع
            </Link>
            <Link to={'/exams/arabic'} className="link"
                >اللغة العربية
            </Link>
            <Link to={'/exams/math'} className="link"
                >الرياضيات
            </Link>
            <Link to={'/exams/history'} className="link"
                >التاريخ
            </Link>
            <Link to={'/exams/economie'} className="link"
                >الإقتصاد
            </Link>
            <Link to={'/exams/etiquette'} className="link"
                >الاداب
            </Link>
            <Link to={'/exams/languages'} className="link"
                >اللغات الأجنبية
            </Link>
        </ul>
</div>
)
}
