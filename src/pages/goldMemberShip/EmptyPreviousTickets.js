import '../../assest/css/goldMemberShip/goldcontrolboard.css'
import image from '../../images/goldStudent/support.png'
import '../../assest/css/goldMemberShip/emptyprevioustickets.css'
import { useEffect } from 'react';
export default function EmptyPreviousTickets()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);
    return(
        <div className='empty-previous-tickets'>
            <div className='empty-previous-tickets-content'>
                <h3 className='empty-previous-tickets-title'>التذاكر السابقة</h3>
                <p className='empty-previous-tickets-text'>عذرا لا يوجد تذاكر سابقه </p>
            </div>
            <div className='empty-previous-tickets-image'>
                <img src={image} alt="load"/>
            </div>
        </div>
    )
}