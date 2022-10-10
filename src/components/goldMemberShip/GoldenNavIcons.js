import {MdSettings,MdNotifications,MdEmail} from 'react-icons/md'
import '../../assest/css/goldMemberShip/goldenNavicons.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function GoldenNavIcons()
{

    const[showSubNav,setShowSubNav]=useState(false);
    
    return(
        <div className='nav-icons'>
            <div className='email'>
                <button className='btn'><MdEmail className='icon'/></button>
            </div>
            <Link to={"/goldStudent/notification"}>
            <div className='noti'>
                <button className='btn'><MdNotifications className='icon'/></button>
                <span className='number'>1</span>
            </div></Link>
            <div className='settings'>
                <button className='btn' onClick={()=>setShowSubNav(p=>!p)}><MdSettings className='icon'/></button>
                <span className='number'>4</span>
                {
                    showSubNav&&
                    <div className='sub-nav'>
                        <Link to={"/goldStudent/setting/account"} className="setting-link">الاعدادات</Link>
                        <Link to={""} className="setting-link">تسجيل الخروج </Link>
                    </div>
                }
            </div>
        </div>
    )
}