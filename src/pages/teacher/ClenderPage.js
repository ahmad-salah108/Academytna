import DashbaordContent from "../../components/teacher/DashbaordContent";
import DashboardSidebar from "../../components/teacher/DashboardSidebar";
import Navbar from "../../components/teacher/Navbar";
import '../../assest/css/teacher/dashboardmain.css'
import '../../assest/css/teacher/dashCalender.css'
import CalenderBox from "../../components/teacher/CalenderBox";
import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

export default function CalenderPage()
{
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
            <Navbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <DashboardSidebar/>
                </div>
                <div className="dashbaord-content">
                    <DashbaordContent/>
                    <div className="dash-calender">
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
                        <div className="calender-wrapper">
                            <Calendar value={date} onChange={setDate}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
