import '../../assest/css/goldMemberShip/honoraryboard.css'
import image from '../../images/goldStudent/WhatsApp Image 2021-12-24 at 11.24 7.png'
import {Link} from 'react-router-dom'
import HonoraryBoardTeacher from '../../components/goldMemberShip/HonoraryBoardTeacher';
import HonoraryBoardStudent from '../../components/goldMemberShip/HonoraryBoardStudent';
import { useEffect } from 'react';
export default function HonoraryBoard()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);
return(
    <div className='honoraryboard container'>
        <div className='honoraryboard-teachers'>
            <h3 className='honoraryboard-teachers-title'>لوحة الشرف الخاصة بالمعلمين </h3>
            <Link to={'/goldStudent/honoraryboard/teachersHonorRoll'} className='honoraryboard-teachers-link'>مشاهدة الجميع </Link>
            <div className='honoraryboard-teachers-boxes'>
                <HonoraryBoardTeacher image={image} teacher="انور انور" summary="حاصل علي وسام التميز حيث انه يعد من اكثر المعلمين المشاركين والنشطين "/>
                <HonoraryBoardTeacher image={image} teacher="انور انور" summary="حاصل علي وسام التميز حيث انه يعد من اكثر المعلمين المشاركين والنشطين "/>
            </div>
        </div>
        <div className='honoraryboard-students'>
            <h3 className='honoraryboard-students-title'>لوحة الشرف الخاصة بالطلاب  </h3>
            <Link to={'/goldStudent/honoraryboard/studentsHonorRoll'} className='honoraryboard-students-link'>مشاهدة الجميع </Link>
            <div className='honoraryboard-students-boxes'>
                <HonoraryBoardStudent image={image} student="خليل البلوشي" summary="يعد خليل الاول علي المرحلة الابتدائية "/>
                <HonoraryBoardStudent image={image} student="خليل البلوشي" summary="يعد خليل الاول علي المرحلة الابتدائية "/>
            </div>
        </div>
    </div>
    )
}
