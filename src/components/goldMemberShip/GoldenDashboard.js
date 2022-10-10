import teacherImage from '../../images/teacher/معلم 1.png'
import '../../assest/css/goldMemberShip/goldenDashboard.css'
import {Link} from 'react-router-dom'
import {VscListFlat} from 'react-icons/vsc'
import { useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import goldenImage from '../../images/gold.png'
import { useEffect ,useRef } from 'react'
export default function GoldenDashboard()
{
    const [showSide,setShowSide] = useState(false)
    const [showListIcon,setShowListIcon]=useState(false);

    const handleShowSidebar=()=>{
        setShowSide(true);
        setShowListIcon(true);
    }

    const closeSidebar=()=>{
        setShowSide(false);
        setTimeout(()=>{
            setShowListIcon(false);
        },100);
    }

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowSide(p=>false);
            document.body.style.overflowY="visible"
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);



    return(
        <div className=' sidebar-content-golden'>
            <div className={`show-sideBar-icon-wrapper`} onClick={()=>handleShowSidebar()}>
                <VscListFlat className='show-sideBar-icon'/>
            </div>
            <div className={`sidebar ${showSide?"show":""}`} ref={ref}>
                <div className='close-btn'>
                    <AiOutlineClose className='close-btn-icon' onClick={()=>closeSidebar()}/>
                </div>
                <div className='image-wrapper'>
                    <img src={teacherImage} alt="load" className='image'/>
                    <span className='online-user'></span>
                </div>
                <h3 className='title'>مرحبا انور </h3>
                <h4 className='id-value'>ID 010 </h4>
                <div className='golden-image-wrapper'>
                    <img src={goldenImage} alt=""/>
                    <h4 >عضوية ذهبية </h4>
                </div>
                <div className='categories'>
                    <div className='categ-link'>
                        <Link to={'/goldStudent'} className='link-title'> لوحتي التعليمية</Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/myCourses'} className='link-title'>دوراتي التدريبية </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/myVideoLessons'} className='link-title'>دروسي المرئية </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/myExams'} className='link-title'>اختباراتي </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/myGroups'} className='link-title'>مجموعاتي   </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/myForums'} className='link-title'>النوادي و منتدياتي  </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/mySessions'} className='link-title'>جلساتي الاخصائي النفسي  </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/myFavorites'} className='link-title'>مفضلتي  </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/tasksTable'} className='link-title'>جدولي المهام   </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/achievements'} className='link-title'>انجازاتي</Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/honoraryboard'} className='link-title'>لوحة الشرف </Link>
                    </div>
                    <div className='categ-link'>
                        <Link to={'/goldStudent/technicalsupport'} className='link-title'>الدعم الفني  </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}