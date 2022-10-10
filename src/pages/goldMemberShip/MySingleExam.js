import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/mySingleExam.css'
import { Link } from 'react-router-dom';
import img1 from '../../images/group1.webp'
import { useEffect } from 'react';


export default function MySingleExam()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);
    return(
        <div className="dashboard">
            <GoldenNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <GoldenDashboard/>
                </div>
                <div className="dashbaord-content">
                    <GoldTopMain/>
                    <h2 className='mySingleExam-title'>الحصة الاولى  </h2>
                    <div className='single-exam-image-wrapper'>
                        <img src={img1} alt="" className='image'/>
                    </div>
                    <div className='exam-detail'>
                        <h4 className='title-heading'>الاستاذ  /</h4>
                        <p className='title-description'>انور انور </p>
                    </div>
                    <div className='exam-detail'>
                        <h4 className='title-heading'>اليوم /</h4>
                        <p className='title-description'>يوم الاربع من كل اسبوع او 10/10/2022</p>
                    </div>
                    <div className='exam-detail'>
                        <h4 className='title-heading'>الساعة  /</h4>
                        <p className='title-description'>السابعة مساء 7.00 م</p>
                    </div>
                    <div className='group-link-wrapper'>
                        <h4 className='title-heading'>رابط المجموعة /</h4>
                        <Link to={"#"} className="links">www.gnsrrvfgnb vfbfhfg ghvfvfhv bgfinfb gigngfnbglmb</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}