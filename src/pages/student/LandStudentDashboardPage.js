import '../../assest/css/student/dashBoardStudent.css'
import StudebtSidebarDashboard from "../../components/student/StudentSidebarDashboard";
import StudentNavbar from "../../components/student/StudentNavbar";
import TopMainInfo from "../../components/student/TopMainInfo";
import BasicInformationBoxes from '../../components/student/BasicInformationBoxes';

export default function LandStudentDashboardPage()
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
                    <BasicInformationBoxes/>
                </div>
            </div>
        </div>
    )
}