import {Route, Routes, useLocation} from 'react-router-dom'
import UserpagesOutlet from './pages/user/UserpagesOutlet';
import Home from './pages/user/home/Home';
import Groups from './pages/user/groups/Groups';
import GroupsCategory from './pages/user/groups/GroupsCategory';
import Forums from './pages/user/forums/Forums';
import ForumsCategoryPage from './pages/user/forums/ForumsGategoryPage';
import SingleGropup from './pages/user/groups/SingleGroup';
import SingleForum from './pages/user/forums/SingleForum';
import Physchologist from './pages/user/psychologist/Psychologist';
import PsychologistSessions from './pages/user/psychologist/PsychologistSessions';
import RequestSession from './pages/user/psychologist/RequestSession';
import MemberShipsPage from './pages/user/memberShips/MemberShips';
import GoldenMemberShipPage from './pages/user/memberShips/GoldenMemberShipPage';
import SilverMemberShipPage from './pages/user/memberShips/SilverMemberShipPage';
import ReqularMemberShipPage from './pages/user/memberShips/ReqularMemberShipPage';
import VideoLessons from './pages/user/videoLessons/VideoLessons';
import VideoLessonsCategory from './pages/user/videoLessons/VideoLessonsCategory';
import ViewVideoLessonSingle from './pages/user/videoLessons/ViewSingleLesson';
import PlayerLessonPage from './pages/user/videoLessons/PlayerLessonPage';
import LessonUrlPage from './pages/user/videoLessons/LessonUrlPage';
import ShowSubjectsExam from './pages/user/exams/ShowSubjectsExam';
import ShowCategorySubjectsExam from './pages/user/exams/ShowCategorySubjectsExam';
import MultiQuestionsInPage from './pages/user/exams/MultiQuestionsInPage';
import SingleQuestionTrueOrrFalse from './pages/user/exams/SingleQuestionTrueOrFalse';
import SingleQuestionChoices from './pages/user/exams/SingleQuestionChoices';
import TeacherRegister from './pages/auth/TeacherRegister';
import StudentRegister from './pages/auth/StudentRegister';
import TeacherLogin from './pages/auth/TeacherLogin';
import StudentLogin from './pages/auth/StudentLogin';
import ForgotPassword from './pages/auth/ForgetPassword';
import ParentLogin from './pages/auth/ParentLogin';
import Courses from './pages/user/courses/Courses';
import CoursesCategoryPage from './pages/user/courses/CoursesCategoryPage';
import SingleCourse from './pages/user/courses/SingleCourse';
import SingleCourseJoin from './pages/user/courses/SingleCourseJoin';
import DashboardMain from './pages/teacher/DashboardMain';
import FinancialSahrePage from './pages/teacher/FinancialSharePage';
import CalenderPage from './pages/teacher/ClenderPage';
import LandStudentDashboardPage from './pages/student/LandStudentDashboardPage';
import FollowUpAttendance from './pages/student/FollowUpAttendance';
import DetectionPointsStudent from './pages/student/DetectionPointsStudent';
import GoldControlBoard from './pages/goldMemberShip/GoldControlBoard';
import MyVideoLessons from './pages/goldMemberShip/MyVideoLessons';
import MyVideoLessonsNotFound from './pages/goldMemberShip/MyVideoLessonsNotFound';
import MyCoursesNotFound from './pages/goldMemberShip/MyCoursesNotFound';
import MyCourses from './pages/goldMemberShip/MyCourses';
import MySessions from './pages/goldMemberShip/MySessions';
import MyGroups from './pages/goldMemberShip/MyGroups';
import MySessionsNotFound from './pages/goldMemberShip/MySessionsNotFound';
import MyForums from './pages/goldMemberShip/MyForums';
import MyForumsNotFound from './pages/goldMemberShip/MyForumsNotFound';
import MyFavorites from './pages/goldMemberShip/MyFavorites';
import MyFavoritesNotFound from './pages/goldMemberShip/MyFavoritesNotFound';
import MyExams from './pages/goldMemberShip/myExams';
import MySingleExam from './pages/goldMemberShip/MySingleExam';
import AccountSetting from './pages/goldMemberShip/AccountSetting';

import TechnicalSupport from './pages/goldMemberShip/TechnicalSupport';
import RequestTicket from './pages/goldMemberShip/RequestTicket';
import PreviousTickets from './pages/goldMemberShip/PreviousTickets';
import EmptyPreviousTickets from './pages/goldMemberShip/EmptyPreviousTickets';
import GoldTasksTable from './pages/goldMemberShip/TasksTable';
import GoldSingleForum from './pages/goldMemberShip/GoldSingleForum';
import PasswordSetting from './pages/goldMemberShip/PasswordSetting';
import OneConversation from './pages/goldMemberShip/OneConversation';
import GroupConversation from './pages/goldMemberShip/GroupConversation';
import NotificationPage from './pages/goldMemberShip/NotificationPage';
import LandParentPage from './pages/parent/LandParentPage';

import GoldAchievements from './pages/goldMemberShip/GoldAchievements';
import HonoraryBoard from './pages/goldMemberShip/HonoraryBoard';
import StudentsHonorRoll from './pages/goldMemberShip/StudentsHonorRoll';
import TeachersHonorRoll from './pages/goldMemberShip/TeachersHonorRoll';
import ChartPage from './pages/parent/ChartPage';
import GroupsSearchNotFound from './pages/user/groups/GroupSearchNotFound';
import GroupsSearchFound from './pages/user/groups/GroupsSearchFound';
import VideoLessonsSearchFound from './pages/user/videoLessons/VideoLessonsSearchFound';
import VideoLessonsSearchNotFound from './pages/user/videoLessons/VideoLessonsSearchNotFound';
import TeacherAttendance from './pages/teacher/TeacherAttendance';
import SchoolSchedule from './pages/teacher/SchoolSchedule';



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserpagesOutlet location={location}/>}>
          <Route index element={<Home/>}/>
          <Route path='groups' element={<Groups/>}/>
          <Route path='groups/search/notFound' element={<GroupsSearchNotFound/>}/>
          <Route path='groups/search' element={<GroupsSearchFound/>}/>
          <Route path='groups/:groupType' element={<GroupsCategory/>}/>
          <Route path="forums" element={<Forums/>}/>
          <Route path='forums/:forumType' element={<ForumsCategoryPage/>}/>
          <Route path='groups/:groupType/:groupId' element={<SingleGropup/>}/>
          <Route path='forums/:forumType/:forumId' element={<SingleForum/>}/>
          <Route path='psychologist' element={<Physchologist/>}/>
          <Route path='psychologist/sessions' element={<PsychologistSessions/>}/>
          <Route path='psychologist/request/:sessionId' element={<RequestSession/>}/>
          <Route path="memberships" element={<MemberShipsPage/>}/>
          <Route path="memberships/golden" element={<GoldenMemberShipPage/>}/>
          <Route path="memberships/silver" element={<SilverMemberShipPage/>}/>
          <Route path="memberships/regular" element={<ReqularMemberShipPage/>}/>
          <Route path='videoLessons' element={<VideoLessons/>}/>
          <Route path='videoLessons/search' element={<VideoLessonsSearchFound/>}/>
          <Route path='videoLessons/search/notFound' element={<VideoLessonsSearchNotFound/>}/>
          <Route path='videoLessons/:lessonsType' element={<VideoLessonsCategory/>}/>
          <Route path='videoLessons/watch/url/:lessonType/:lessonId' element={<LessonUrlPage/>}/>
          <Route path='videoLessons/watch/:lessonType/:lessonId' element={<PlayerLessonPage/>}/>
          <Route path='videoLessons/:lessonType/:lessonId' element={<ViewVideoLessonSingle/>}/>
          <Route path='exams' element={<ShowSubjectsExam/>}/>
          {/* page for multi question in the same oage */}
          {/* <Route path='exams/questions' element={<MultiQuestionsInPage/>}/> */}
          {/* page for one true or false question */}
          {/* <Route path='exams/questions' element={<SingleQuestionTrueOrrFalse/>}/> */}
          {/* page for one multi choices question */}
          <Route path='exams/questions' element={<SingleQuestionChoices/>}/>
          <Route path='exams/:examType' element={<ShowCategorySubjectsExam/>}/>
          {/* login and register routes */}
          <Route path='register/teacher' element={<TeacherRegister/>}/>
          <Route path='register/student' element={<StudentRegister/>}/>
          <Route path='login/teacher' element={<TeacherLogin/>}/>
          <Route path='login/student' element={<StudentLogin/>}/>
          <Route path='forgot-password' element={<ForgotPassword/>}/>
          <Route path='login/parent' element={<ParentLogin/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='courses/:courseType' element={<CoursesCategoryPage/>}/>
          <Route path='courses/:courseType/:courseId' element={<SingleCourse/>}/>
          {/*if the user are subscribed to the course*/}
          {/* <Route path='courses/:courseType/:courseId' element={<SingleCourseJoin/>}/> */} 
        </Route>
        {/** teacher dashboard */}
        <Route path="teacher" element={<DashboardMain/>}/>
        <Route path='teacher/financial' element={<FinancialSahrePage/>}/>
        <Route path='teacher/calender' element={<CalenderPage/>}/>
        <Route path='teacher/schoolschedule' element={<SchoolSchedule/>}/>
        <Route path='teacher/attendance' element={<TeacherAttendance/>}/>
        {/** student dashboard */}
        <Route path='student' element={<LandStudentDashboardPage/>}/>
        <Route path='student/followupattendance' element={<FollowUpAttendance/>}/>
        <Route path='student/detectionpoints' element={<DetectionPointsStudent/>}/>
        
        {/** golden  student  dashboard*/}
        <Route path='goldStudent' element={<GoldControlBoard/>}/>
        <Route path='goldStudent/myCourses' element={<MyCourses/>}/>
        <Route path='goldStudent/myCourses/notFound' element={<MyCoursesNotFound/>}/>
        <Route path='goldStudent/myVideoLessons' element={<MyVideoLessons/>}/>
        <Route path='goldStudent/myVideoLessons/notFound' element={<MyVideoLessonsNotFound/>}/>
        <Route path='goldStudent/mySessions' element={<MySessions/>}/>
        <Route path='goldStudent/myGroups' element={<MyGroups/>}/>
        <Route path='goldStudent/myGroups/notFound' element={<MyCoursesNotFound/>}/>
        <Route path='goldStudent/mySessions/notFound' element={<MySessionsNotFound/>}/>
        <Route path='goldStudent/myForums' element={<MyForums/>}/>
        <Route path='goldStudent/myForums/notFound' element={<MyForumsNotFound/>}/>
        <Route path='goldStudent/myFavorites' element={<MyFavorites/>}/>
        <Route path='goldStudent/myFavorites/notFound' element={<MyFavoritesNotFound/>}/>
        <Route path='goldStudent/myExams' element={<MyExams/>}/>
        <Route path='goldStudent/myExams/:examId' element={<MySingleExam/>}/>
        <Route path='goldStudent/setting/account' element={<AccountSetting/>}/>
        <Route path='goldStudent/setting/password' element={<PasswordSetting/>}/>
        <Route path='goldStudent/technicalsupport' element={<TechnicalSupport/>}/>
        <Route path='goldStudent/oneMessage' element={<OneConversation/>}/>
        <Route path='goldStudent/groupMessage' element={<GroupConversation/>}/>

        <Route path='goldStudent/technicalsupport/requsetTicket' element={<RequestTicket/>}/>
        <Route path='goldStudent/technicalsupport/previousTickets' element={<PreviousTickets/>}/>
        <Route path='goldStudent/technicalsupport/emptypreviousTickets' element={<EmptyPreviousTickets/>}/>
        <Route path='goldStudent/tasksTable' element={<GoldTasksTable/>}/>
        <Route path='goldStudent/myForums/:fromType/:froumId' element={<GoldSingleForum/>}/>
        <Route path='goldStudent/notification' element={<NotificationPage/>}/>

        <Route path='goldStudent/achievements' element={<GoldAchievements/>}/>
        <Route path='goldStudent/honoraryboard' element={<HonoraryBoard/>}/>
        <Route path='goldStudent/honoraryboard/studentsHonorRoll' element={<StudentsHonorRoll/>}/>
        <Route path='goldStudent/honoraryboard/teachersHonorRoll' element={<TeachersHonorRoll/>}/>

        <Route path='parent' element={<LandParentPage/>}/>
        <Route path='parent/chart' element={<ChartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
