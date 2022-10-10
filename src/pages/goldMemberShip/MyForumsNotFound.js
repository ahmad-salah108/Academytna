import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/notFound.css'
import { Link } from 'react-router-dom';
import notFoundImage from '../../images/لا يوجد 1.webp'
import { useEffect } from 'react';

export default function MyForumsNotFound()
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
                    <h5 className='notfound-text'>عذرا لا يوجد نوادي او منتديات خاصة بك </h5>
                    </div>
                    <div className='navgation-wrapper'>
                        <span className='navigation-text'>لا يوجد نوادي او منتديات  للانتقال الي الجميع اضغط </span>
                        <Link to={"/forums"} className="navigation-link">هنا</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}