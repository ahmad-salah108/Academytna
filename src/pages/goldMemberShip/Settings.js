import React from 'react'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar'
import { Link, Outlet, NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export default function() {
  useEffect(()=>{
    window.scrollTo({
        behavior:"smooth",
        top:0
    })
},[]);
  return (
    <div className='account-setting'>
        <GoldenNavbar/>
        <div className='container setting-wrapper'>
            <h2 className='setting-title'>إعدادات الحساب</h2>
            <div className='top-links-setting'>
                <NavLink to={"/goldStudent/setting/account"} className={({isActive}) => isActive ? 'link current-page' : 'link'}>إعدادات الحساب</NavLink>
                <NavLink to={"/goldStudent/setting/password"} className={({isActive}) => isActive ? 'link current-page' : 'link'}>إعدادات كلمة المرور </NavLink>
            </div>
            <Outlet/>
        </div>
      </div>
  )
}
