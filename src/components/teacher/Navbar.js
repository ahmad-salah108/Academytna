import '../../assest/css/teacher/Navbar.css'
import {BsSearch} from 'react-icons/bs'
import TeacherNavIcons from './NavIcons'
import logo from '../../images/logo.png'

export default function TeacherNavbar()
{
    return(
        <div className='navbar'>
            <div className='container navbar-wrapper'>
                <div className='logo'>
                    <img src={logo} alt="" className='logo-image'/>
                    <h4 className='logo-title'>أكادميتنا </h4>
                </div>
                <div className='nav-left'>
                    <form className='search-box'>
                        <BsSearch className='search-icon'/>
                        <input type={"search"} className='search-input' placeholder='ابحث'/>
                    </form>
                    <TeacherNavIcons/>
                </div>
            </div>
        </div>
    )
}