import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import '../../assest/css/goldMemberShip/goldcontrolboard.css'
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import image from '../../images/goldStudent/support.png'
import '../../assest/css/goldMemberShip/previoustickets.css'
import { useEffect } from 'react';


export default function PreviousTickets()
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
                    <div className='previous-tickets'>
                        <div className='previous-tickets-content'>
                            <h3 className='previous-tickets-title'>التذاكر السابقة</h3>
                            <div className='previous-tickets-information'>
                                <div className='previous-tickets-ticket-header'>
                                    <h3 className='previous-tickets-name-title'>اسم التذكرة</h3>
                                    <h3 className='previous-tickets-state-title'> حالة التذكرة  </h3>
                                </div>
                                <div className='previous-tickets-boxes'>
                                    <div className='previous-tickets-box'>
                                        <p className='previous-tickets-name-ticket'>01 تذكرة دفع </p>
                                        <p className={`previous-tickets-state-${'wait'}`}>قيد الانتظار  </p>
                                    </div>
                                    <div className='previous-tickets-box'>
                                        <p className='previous-tickets-name-ticket'>01 تذكرة دفع </p>
                                        <p className={`previous-tickets-state-${'solve'}`}> تم الحل   </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='previous-tickets-image'>
                            <img src={image} alt="load"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}