import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/notFound.css'
import { Link } from 'react-router-dom';
import notFoundImage from '../../images/notfound1.webp'
import { useEffect } from 'react';

export default function MyGroupsNotFound()
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
                    <div className='notfound-forums-image-wrapper'>
                    <img src={notFoundImage} alt="" className='image'/>
                    <h5 className='notfound-text'>عذرا لا يوجد مجموعات خاصة بك </h5>
                    </div>
                    <div className='navgation-wrapper'>
                        <span className='navigation-text'>للاطلاع علي المجموعات اضغط  </span>
                        <Link to={"/groups"} className="navigation-link">هنا</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}