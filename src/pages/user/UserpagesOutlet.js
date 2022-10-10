import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../../components/user/Footer'
import Navbar from '../../components/user/Navbar'


export default function UserpagesOutlet(props) {
  const path = props.location.pathname;

  return (
    <div>
      {path.includes('login') || path.includes('register') || path.includes('forgot-password') ? '' : <Navbar/>}
      <Outlet/>
      {path.includes('login') || path.includes('register') || path.includes('forgot-password') ? '' : <Footer/>}
    </div>
  )
}
