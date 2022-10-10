import Navbar from "../../components/teacher/Navbar";
import DashboardSidebar from "../../components/teacher/DashboardSidebar";
import DashbaordContent from "../../components/teacher/DashbaordContent";
import '../../assest/css/teacher/financialShare.css'

export default function FinancialSahrePage()
{
    return(
        <div className="dashboard">
            <Navbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <DashboardSidebar/>
                </div>
                <div className="dashbaord-content">
                    <DashbaordContent/>
                    <h3 className="financia-title">الحصالة لمالية </h3>
                </div>
            </div>
        </div>
    )
}