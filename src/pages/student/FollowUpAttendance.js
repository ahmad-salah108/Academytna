import '../../assest/css/teacher/dashboardmain.css'
import StudebtSidebarDashboard from "../../components/student/StudentSidebarDashboard";
import StudentNavbar from "../../components/student/StudentNavbar";
import TopMainInfo from "../../components/student/TopMainInfo";
import '../../assest/css/student/attendance.css'
export default function FollowUpAttendance()
{
    return(
        <div className='Attendance'>
            <h3 className='Attendance-title'>متابعة الحضور والغياب </h3>
            <div className='Attendance-table-wrapper'>
                <table className="Attendance-table">
                    <tr>
                        <th className='table-name'>اسم الطالب</th>
                        <th>الجلسة 1 </th>
                        <th>الجلسة 2 </th>
                        <th>الجلسة 3 </th>
                        <th>الجلسة 4 </th>
                        <th>الجلسة 5 </th>
                        <th>الجلسة 6 </th>
                        <th>اضافة جلسة</th>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">غائب </td>
                        <td className="Present">حاضر</td>
                        <td className="Present">حاضر</td>
                        <td className="absent">1 غياب </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}