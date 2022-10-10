import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import '../../assest/css/goldMemberShip/goldcontrolboard.css'
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import CalenderBox from '../../components/teacher/CalenderBox';
import Calendar from 'react-calendar';
import { useState } from 'react';
import image1 from '../../images/goldStudent/1.png'
import image2 from '../../images/goldStudent/2.png'
import image3 from '../../images/goldStudent/3.png'
import image4 from '../../images/goldStudent/4.png'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

export default function GoldControlBoard()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);
    const [date, setDate] = useState(new Date());
    const info = [
        {
            summary:"انجاز الدرس المرئي الخاص بمادة الرياضيات درس التكامل ",
            date:"17/04/2022",
            day:"يوم الاربعاء "
        },
        {
            summary:"انجاز الدرس المرئي الخاص بمادة الرياضيات درس التكامل ",
            date:"17/04/2022",
            day:"يوم الاربعاء "
        },
        {
            summary:"انجاز الدرس المرئي الخاص بمادة الرياضيات درس التكامل ",
            date:"17/04/2022",
            day:"يوم الاربعاء "
        }
    ]
    return(
        <div className="dashboard">
            <GoldenNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <GoldenDashboard/>
                </div>
                <div className="dashbaord-content">
                    <GoldTopMain/>
                    <div className='dash-control-board'>
                        <div className="calender-content">
                                {
                                    info.map((box,index)=>
                                    {
                                        return(
                                            <CalenderBox box={box} key={index+'zmk1'}/>
                                        )
                                    })
                                }
                        </div>
                        <div className='dash-control-board-details'>
                            <div className='dash-control-board-servesis'>
                                <div className='dash-control-board-servesis-box'>
                                    <img className='dash-control-board-box-image' src={image4} alt="load"/>
                                    <Link to={"/goldStudent/myCourses"} className='dash-control-board-box-title'>الدورات التدريبية </Link>
                                </div>
                                <div className='dash-control-board-servesis-box'>
                                    <img className='dash-control-board-box-image' src={image3} alt="load"/>
                                    <Link to={'/goldStudent/myVideoLessons'} className='dash-control-board-box-title'> الدروس المرئية  </Link>
                                </div>
                                <div className='dash-control-board-servesis-box'>
                                    <img className='dash-control-board-box-image' src={image1} alt="load"/>
                                    <Link to={'/goldStudent/myGroups'} className='dash-control-board-box-title'> المجموعات  </Link>
                                </div>
                                <div className='dash-control-board-servesis-box'>
                                    <img className='dash-control-board-box-image' src={image2} alt="load"/>
                                    <Link to={'/goldStudent/mySessions'} className='dash-control-board-box-title'> الاخصائي النفسي  </Link>
                                </div>
                                <div className='dash-control-board-servesis-box'>
                                    <img className='dash-control-board-box-image' src={image1} alt="load"/>
                                    <Link to={'/goldStudent/myGroups'} className='dash-control-board-box-title'> المجموعات  </Link>
                                </div>
                                <div className='dash-control-board-servesis-box'>
                                    <img className='dash-control-board-box-image' src={image2} alt="load"/>
                                    <Link to={'/goldStudent/mySessions'} className='dash-control-board-box-title'>الاخصائي النفسي   </Link>
                                </div>
                            </div>
                            <div className='calender-wrapper'>
                                <Calendar value={date} onChange={setDate}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}