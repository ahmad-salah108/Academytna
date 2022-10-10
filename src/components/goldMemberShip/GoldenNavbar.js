import {useState , useRef , useEffect} from 'react'
import { Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import '../../assest/css/goldMemberShip/GoldenNavbar.css'
import GoldenNavIcons from './GoldenNavIcons'
import logo from '../../images/logo.png'

export default function GoldenNavbar() {
  const [showNav,setshowNav]=useState(false);
  const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowNav(p=>false);
            document.body.style.overflowY="visible"
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
return (
    <nav className='golden-navBar'>
        <div className='nav-container container'>
        <nav className='nav-wrapper'>
            <div className='nav-logo '>
                <img src={logo} alt="logo" className='logo-nav'/>
                <h3 className='heading-three'>أكادميتنا</h3>
            </div>
              <button className='toggle-show' onClick={()=>setshowNav(p=>!p)}>
                {!showNav?<AiOutlineMenu/>:<AiOutlineClose/>}
              </button>
            <div className={`links-wrapper ${showNav?"show":"notShow"}`} ref={ref}>
                <div className='pages-links-wrapper'>
                <Link to='/goldStudent/myGroups' className={"page-link"}>المجموعات </Link>
                <Link to={"/goldStudent/myCourses"} className={"page-link"}>الدورات</Link>
                <Link to={"/goldStudent/myVideoLessons"} className={"page-link"}>الدروس المرئية </Link>
                <Link to={"/goldStudent/myExams"} className={"page-link"}>الاختبارات </Link>
                <Link to={"/goldStudent/myForums"} className={"page-link"}>النوادي والمنتديات </Link>
                </div>
                <form className='search-form-second'>
                  <button className='search-icon'>
                    <HiOutlineSearch/>
                  </button>
                  <input 
                  className='search-input'
                  type={"search"}
                  placeholder="ابحث"/>
                </form>
                <div>
                    <GoldenNavIcons/>
                </div>
            </div>
        </nav>
        </div>
    </nav>
  )
}