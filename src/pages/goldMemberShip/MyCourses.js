import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/myCourses.css'
import { Link } from 'react-router-dom';
import img1 from '../../images/منتدي 1.webp'
import Course from '../../components/user/courses/Course';
import { useEffect } from 'react';

export default function MyCourses()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);

    const data=[{
        type:'Arabic',
        title:"اللغة العربية",
        groups:[
            {
                id:"1",
                img:img1,
                title:"حل تمارين كتاب العربي",
                teacher:"أنور نور",
                price:"100"
            },
            {
                id:"3",
                img:img1,
                title:"حل تمارين كتاب العربي",
                teacher:"أنور نور",
                price:"100"
            },
            {
                id:"3",
                img:img1,
                title:"حل تمارين كتاب العربي",
                teacher:"أنور نور",
                price:"100"
            },
            {
                id:"4",
                img:img1,
                title:"حل تمارين كتاب العربي",
                teacher:"أنور نور",
                price:"100"
            }
        ]
    },
    ]

    return(
        <div className="dashboard">
            <GoldenNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <GoldenDashboard/>
                </div>
                <div className="dashbaord-content">
                    <GoldTopMain/>
                    <h2 className='myCourses-title'>الدورات التدريبية التي تم الاشتراك بها </h2>
                    <div>
                        {
                            data.length>0&&data.map((box,index)=>
                            {
                                return<div key={index+'m1'} className="box">
                                    <div className="myCourses-wrapper">
                                        {
                                            box.groups.map((course,index)=>
                                            {
                                                return <Link to={`/courses/${box.type}/${course.id}`} key={index+'z1'} > 
                                                    <Course course={course}/>
                                                </Link>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='navgation-wrapper'>
                        <span className='navigation-text'>للانتقال الي الدورات التدربية</span>
                        <Link to={"/courses"} className="navigation-link">هنا</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}