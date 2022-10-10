import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/forums/formusSidebar.css'

export default function ForumsCategoryBar() {
   
  return (
    <div className='groups-bar'>
    <h3 className="title">الفئات</h3>
    <ul className="bar-wrapper">
        <Link to={'/forums'} className={`link ${window.location.pathname==="/forums"&&"active"}`} 
            >الجميع
        </Link>
        <Link to={'/forums/arabic'} className={`link ${window.location.pathname==="/forums/arabic"&&"active"}`} 
            >اللغة العربية
        </Link>
        <Link to={'/forums/math'}  className={`link ${window.location.pathname==="/forums/math"&&"active"}`} 
            >الرياضيات
        </Link>
        <Link to={'/forums/history'}  className={`link ${window.location.pathname==="/forums/history"&&"active"}`} 
            >التاريخ
        </Link>
        <Link to={'/forums/economie'}  className={`link ${window.location.pathname==="/forums/economie"&&"active"}`} 
            >الإقتصاد
        </Link>
        <Link to={'/forums/etiquette'}   className={`link ${window.location.pathname==="/forums/etiquette"&&"active"}`} 
            >الاداب
        </Link>
        <Link to={'/forums/languages'}  className={`link ${window.location.pathname==="/forums/languages"&&"active"}`} 
            >اللغات الأجنبية
        </Link>
    </ul>
</div>
  )
}
