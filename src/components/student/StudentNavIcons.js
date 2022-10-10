import {MdSettings,MdNotifications,MdEmail} from 'react-icons/md'
import '../../assest/css/student/navIconsStudent.css'
export default function StudentNavIcons()
{
    return(
        <div className='nav-icons'>
            <div className='email'>
                <button className='btn'><MdEmail className='icon'/></button>
            </div>
            <div className='noti'>
                <button className='btn'><MdNotifications className='icon'/></button>
                <span className='number'>1</span>
            </div>
            <div className='settings'>
                <button className='btn'><MdSettings className='icon'/></button>
                <span className='number'>4</span>
            </div>
        </div>
    )
}