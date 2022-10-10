import '../../assest/css/student/studentNavbar.css'
import {BsSearch} from 'react-icons/bs'
import StudentNavIcons from './StudentNavIcons'
import logo from '../../images/logo.png'

export default function StudentNavbar()
{
    return(
        <div className='navbar'>
            <div className='container navbar-wrapper'>
                <div className='logo'>
                    <img src={logo} alt="" className='img-logo'/>
                    <h4 className='logo-title'>أكادميتنا </h4>
                </div>
                <div className='nav-left'>
                    <form className='search-box'>
                        <BsSearch className='search-icon'/>
                        <input type={"search"} className='search-input' placeholder='ابحث'/>
                    </form>
                    <StudentNavIcons/>
                </div>
            </div>
        </div>
    )
}