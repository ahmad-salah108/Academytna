import '../../assest/css/teacher/dashboardmain.css'
import StudebtSidebarDashboard from "../../components/student/StudentSidebarDashboard";
import StudentNavbar from "../../components/student/StudentNavbar";
import TopMainInfo from "../../components/student/TopMainInfo";
import '../../assest/css/student/detectionpointsstudent.css'
export default function DetectionPointsStudent()
{
    return(
        <div className='detection'>
            <h3 className='detection-title'>كشف النقاط </h3>
            <div className='detection-table-wrapper'>
                <table className="detection-table">
                    <tr>
                        <th className='table-name'>اسم الطالب</th>
                        <th>امتحان الاول </th>
                        <th> امتحان الثاني  </th>
                        <th> امتحان الثالث </th>
                        <th> امتحان الرابع  </th>
                        <th> امتحان الخامس </th>
                        <th>امتحان سادس  </th>
                        <th>اضافة امتحان</th>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4</td>
                        <td ></td>
                        <td ></td>
                        <td className='red'>راسب</td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4</td>
                        <td ></td>
                        <td ></td>
                        <td className='green'>ناجح</td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4</td>
                        <td ></td>
                        <td ></td>
                        <td > </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4</td>
                        <td ></td>
                        <td ></td>
                        <td > </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4 </td>
                        <td ></td>
                        <td ></td>
                        <td > </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4 </td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4 </td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4 </td>
                        <td ></td>
                        <td ></td>
                        <td > </td>
                    </tr>
                    <tr>
                        <td>زين عبدالله </td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='green'>9</td>
                        <td className='red'>4</td>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}