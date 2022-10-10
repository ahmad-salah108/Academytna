import DashboardSidebar from "../../components/teacher/DashboardSidebar";
import DashbaordContent from "../../components/teacher/DashbaordContent";
import '../../assest/css/teacher/dashboardmain.css'
import TeacherNavbar from "../../components/teacher/Navbar";
import {Outlet} from 'react-router-dom'

export default function DashboardMain()
{
    return(
        <div className="dashboard">
            <TeacherNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <DashboardSidebar/>
                </div>
                <div className="dashbaord-content">
                    <DashbaordContent/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}