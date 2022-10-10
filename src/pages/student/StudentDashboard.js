import '../../assest/css/student/dashBoardStudent.css'
import StudebtSidebarDashboard from "../../components/student/StudentSidebarDashboard";
import StudentNavbar from "../../components/student/StudentNavbar";
import TopMainInfo from "../../components/student/TopMainInfo";
import {Outlet} from 'react-router-dom'

export default function StudentDashboard()
{
    return(
        <div className="dashboard">
            <StudentNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <StudebtSidebarDashboard/>
                </div>
                <div className="dashbaord-content">
                    <TopMainInfo/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}