import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/groups/groupsSidebar.css'

export default function GroupsCategoryBar() {
    return (
    <div className='groups-bar'>
        <h3 className="title">الفئات</h3>
        <ul className="bar-wrapper">
            <Link to={'/groups'} className={`link ${window.location.pathname==="/groups"&&"active"}`} 
                >الجميع
            </Link>
            <Link to={'/groups/arabic'} className={`link ${window.location.pathname==="/groups/arabic"&&"active"}`} 
                >اللغة العربية
            </Link>
            <Link to={'/groups/math'} className={`link ${window.location.pathname==="/groups/math"&&"active"}`} 
                >الرياضيات
            </Link>
            <Link to={'/groups/history'} className={`link ${window.location.pathname==="/groups/history"&&"active"}`} 
                >التاريخ
            </Link>
            <Link to={'/groups/economie'} className={`link ${window.location.pathname==="/groups/economie"&&"active"}`} 
                >الإقتصاد
            </Link>
            <Link to={'/groups/etiquette'} className={`link ${window.location.pathname==="/groups/etiquette"&&"active"}`} 
                >الاداب
            </Link>
            <Link to={'/groups/languages'} className={`link ${window.location.pathname==="/groups/languages"&&"active"}`} 
                >اللغات الأجنبية
            </Link>
        </ul>
</div>
)
}
