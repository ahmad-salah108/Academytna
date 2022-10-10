import teacherImage from '../../images/teacher/معلم 1.png'
import '../../assest/css/teacher/dashboardsidebar.css'
import {AiOutlineLaptop} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {VscListFlat} from 'react-icons/vsc'
import { useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import NavIcons from './NavIcons'
import {IoIosArrowBack} from 'react-icons/io'
import { useRef , useEffect} from 'react'
export default function DashboardSidebar()
{
    const [showSide,setShowSide] = useState(false)
    const [showListIcon,setShowListIcon]=useState(false);
    const[showLessonsLinks, setShowLessonsLink]=useState(false);
    const[showClubLinks, setShowClubLink]=useState(false);

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
        <div className='container sidebar-content'>
            <div className={`show-sideBar-icon-wrapper`} onClick={()=>handleShowSidebar()}>
                <VscListFlat className='show-sideBar-icon'/>
            </div>
            <div className={`sidebar ${showSide?"show":""}`} ref={ref}>
                <div className='close-btn'>
                    <AiOutlineClose className='close-btn-icon' onClick={()=>closeSidebar()}/>
                </div>
                <img src={teacherImage} alt="load" className='image'/>
                <h3 className='title'>مرحبا بك<br/> ..ا. محمد البعلوشي </h3>
                <div className='categories'>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'>ادارة المستخدمين</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'#'} className='link-title'> المجموعات</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <div className='link-moreDetail' onClick={()=>setShowLessonsLink(p=>!p)}>
                            <Link to={'#'} className='link-title'> الدروس المرئية</Link>
                            <IoIosArrowBack/>
                        </div>
                    </div>
                        <div className={`advanced-links-lesson ${!showLessonsLinks?"hidden":""}`}>
                            <div className='advance-link'>
                                <span className='green-circle'></span>
                                <Link to={"#"}>اضافة درس</Link>
                            </div>
                            <div className='advance-link'>
                                <span className='green-circle'></span>
                                <Link to={"#"}>الاطلاع علي الدروس</Link>
                            </div>
                        </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <div className='link-moreDetail' onClick={()=>setShowClubLink(p=>!p)}>
                            <Link to={'#'} className='link-title'> المنتديات والنوادي</Link>
                            <IoIosArrowBack/>
                        </div>
                    </div>
                    <div className={`advanced-links-club ${!showClubLinks?"hidden":""}`}>
                            <div className='advance-link'>
                                <span className='green-circle'></span>
                                <Link to={"#"}>اضافة منتدي او نادي</Link>
                            </div>
                            <div className='advance-link'>
                                <span className='green-circle'></span>
                                <Link to={"#"}>الاطلاع علي المنتديات والنوادي</Link>
                            </div>
                        </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'/teacher/attendance'} className='link-title'> متابعة الحضور والغياب</Link>
                    </div>
                    <div className='categ-link'>
                        <span className='categ-icon'><AiOutlineLaptop className="icon"/></span>
                        <Link to={'/teacher/financial'} className='link-title'> الحصالة المالية</Link>
                    </div>
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}