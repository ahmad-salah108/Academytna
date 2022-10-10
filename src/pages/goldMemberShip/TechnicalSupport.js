import '../../assest/css/goldMemberShip/technicalsupport.css'
import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import '../../assest/css/goldMemberShip/goldcontrolboard.css'
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import image from '../../images/goldStudent/support.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function TechnicalSupport()
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
                    <div className='technical-support'>
                        <div className='technical-support-choice'>
                            <Link to={"/goldStudent/technicalsupport/requsetTicket"} className='technical-support-link'>طلب تذكرة</Link>
                            <Link to={"/goldStudent/technicalsupport/previousTickets"} className='technical-support-link'>التذاكر السابقة </Link>
                        </div>
                        <div className='technical-support-image'>
                            <img src={image} alt="load"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}