import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/honoraryboard.css'
import image from '../../images/goldStudent/WhatsApp Image 2021-12-24 at 11.24 7.png'
import HonoraryBoardStudent from '../../components/goldMemberShip/HonoraryBoardStudent';
import '../../assest/css/goldMemberShip/studentshonorroll.css'
import { useEffect } from 'react';

export default function StudentsHonorRoll()
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
                    <div className='StudentsHonorRoll container'>
                        <div className='StudentsHonorRoll-students'>
                            <h3 className='StudentsHonorRoll-students-title'>لوحة الشرف الخاصة بالطلاب  </h3>
                            <div className='StudentsHonorRoll-students-boxes'>
                                <HonoraryBoardStudent image={image} student="خليل البلوشي" summary="يعد خليل الاول علي المرحلة الابتدائية "/>
                                <HonoraryBoardStudent image={image} student="خليل البلوشي" summary="يعد خليل الاول علي المرحلة الابتدائية "/>
                                <HonoraryBoardStudent image={image} student="خليل البلوشي" summary="يعد خليل الاول علي المرحلة الابتدائية "/>
                                <HonoraryBoardStudent image={image} student="خليل البلوشي" summary="يعد خليل الاول علي المرحلة الابتدائية "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
