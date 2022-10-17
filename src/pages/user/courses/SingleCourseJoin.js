// import { useEffect ,useState} from "react"
// import { useParams } from "react-router"
// import coursesData from "../../../data/coursesData"
// import '../../../assest/css/user/courses/singlecoursesjoin.css'
// import {HiBadgeCheck} from 'react-icons/hi'
// import unitData from '../../../data/unitsData'
// import AccordinCourse from "../../../components/user/courses/AccordainCourse"
// export default function SingleCourseJoin()
// {
//     const {courseId}= useParams()
//     const {courseType} = useParams()
//     const [course,setCourse] = useState({})
    
//     useEffect(()=>
//     {
//         window.scrollTo({
//             behavior:'smooth',
//             top:0
//         })
//         const COURSE = coursesData.filter(gs=>gs.type===courseType)
//         setCourse(COURSE[0].groups.filter(g=>g.id.toString()===courseId.toString())[0])
//     },[courseId, courseType])

//     const data = [
//         " ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول ",
//         " ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول ",
//         " ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول ",
//         " ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول ",
//         " ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول ",
//         " ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول ",
//         " ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول ",
//         " ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول 1 ألهدف الاول "
//     ]

//     return(
//         <div className="container singleCourse">
//             <div className="singleCourse-content">
//                 <div className="singleCourse-details">
//                     <h3 className="singleCourse-title">{course.title}</h3>
//                     <p className="singleCourse-desc">شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية .شرح كامل عن الدروس المرئية مع امكانية الضغط علي مشاعدة او الاطلاع علي التفاصيل وياخذ لمحه كاملة عن الية الدروس المرئية  . </p>
//                     <div className="goals">
//                         <h3 className="goals-title">اهداف الدوره </h3>
//                         <div className="goals-parts">
//                             {
//                                 data.map((box,index)=>
//                                 {
//                                     return (
//                                         <div className="goal" key={index+'z1'}>
//                                             <HiBadgeCheck className="goal-icon"/>
//                                             <h3 className="goal-title">{box}</h3>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                     <div className="study">
//                         <h3 className="study-title">منهاج الدرسه </h3>
//                         <div>
//                             {
//                                 unitData.map((box,index)=>
//                                 {
//                                     return <AccordinCourse box={box} key={index+'k1m'}/>
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }