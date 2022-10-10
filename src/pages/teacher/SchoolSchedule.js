import Navbar from "../../components/teacher/Navbar";
import DashboardSidebar from "../../components/teacher/DashboardSidebar";
import DashbaordContent from "../../components/teacher/DashbaordContent";
import '../../assest/css/teacher/schoolschedule.css'
export default function SchoolSchedule()
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
                    <div className="SchoolSchedule">
                        <table className="table-title">
                            <tr>
                                <td>اكادميتنا مدرسة الخاصة <br/>اكادميتنا مدرسة الخاصة </td>
                                <td className="text">هنا يتم كتابة ما نريد هنا يتم كتابة ما نريد هنا يتم كتابة ما نريد هنا يتم كتابة ما نريد هنا يتم كتابة ما نريد هنا يتم كتابة ما نريد هنا يتم كتابة ما نريد هنا يتم كتابة ما نريد   </td>
                            </tr>
                        </table>
                        <div className="SchoolSchedule-details">
                            <table>
                                <td>المدرسة</td>
                                <td className="empty-field"></td>
                            </table>
                            <table>
                                <td>البلدية</td>
                                <td className="empty-field"></td>
                            </table>
                        </div>  
                        <div className="SchoolSchedule-info">
                            <table>
                                <td>الاستاذ</td>
                                <td className="empty-field"></td>
                            </table>
                            <table>
                                <td>القسم الدراسي </td>
                                <td className="empty-field"></td>
                            </table>
                            <table>
                                <td>الحجرة المدرسية</td>
                                <td className="empty-field"></td>
                            </table>
                            <table>
                                <td>عدد التلميذ</td>
                                <td className="empty-field"></td>
                            </table>
                        </div>  
                        <table className="SchoolSchedule-activities">
                            <tr>
                                <td>الانشطة</td>
                                <td>اللغة العربية</td>
                                <td>الرياضيات</td>
                                <td>ت الاسلامية</td>
                                <td>ت علمية </td>
                                <td>ت فنية</td>
                                <td>تاريخ جغرافيا </td>
                                <td>فرنسيه</td>
                                <td>المجموع</td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                                <td>05</td>
                            </tr>
                        </table>
                        <table className="table-Schedule">
                            <tr>
                                <td colSpan={6}>الفترة الصباحية </td>
                                <td rowSpan={2}>الاستراحه</td>
                                <td colSpan={3}>الفترة المسائية </td>
                            </tr>
                            <tr>
                                <td>الأيام</td>
                                <td colSpan={5}>08.00-   10.45</td>
                                <td colSpan={3}>08.00-   10.45</td>
                            </tr>
                            <tr>
                                <td>الاحد <br/> <span className="regiment">الفوج 1</span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td rowSpan={4} className="break">استراحة 15 د</td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td rowSpan={4} className="break">استراحة 15 د</td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                            </tr>
                            <tr>
                                <td>الاثنين <br/> <span className="regiment">الفوج 2</span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                            </tr>
                            <tr>
                                <td>الثلاثاء <br/> <span className="regiment">الفوج 3</span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                            </tr>
                            <tr>
                                <td>الأربعاء <br/> <span className="regiment">الفوج 4</span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                                <td>لغة فرنسية  <br/> <span>45 </span></td>
                            </tr>
                        </table>
                        <div className="table-excersise">
                            <table>
                                <tr>
                                    <td>الخميس <br/> <span className="regiment">الفوج 1</span></td>
                                    <td>التدريب الاملائي   <br/> <span>45 </span></td>
                                    <td>التدريب الاملائي   <br/> <span>45 </span></td>
                                    <td>التدريب الاملائي   <br/> <span>45 </span></td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td>الخميس <br/> <span className="regiment">الفوج 1</span></td>
                                    <td>التدريب الاملائي   <br/> <span>45 </span></td>
                                    <td>التدريب الاملائي   <br/> <span>45 </span></td>
                                    <td>التدريب الاملائي   <br/> <span>45 </span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
