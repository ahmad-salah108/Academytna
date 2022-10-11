import '../../assest/css/goldMemberShip/technicalsupport.css'
import '../../assest/css/goldMemberShip/goldcontrolboard.css'
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
        <div className='technical-support'>
            <div className='technical-support-choice'>
                <Link to={"/goldStudent/technicalsupport/requsetTicket"} className='technical-support-link'>طلب تذكرة</Link>
                <Link to={"/goldStudent/technicalsupport/previousTickets"} className='technical-support-link'>التذاكر السابقة </Link>
            </div>
            <div className='technical-support-image'>
                <img src={image} alt="load"/>
            </div>
        </div>
    )
}