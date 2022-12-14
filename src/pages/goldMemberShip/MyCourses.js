import '../../assest/css/goldMemberShip/myCourses.css'
import { Link } from 'react-router-dom';
import img1 from '../../images/fourm1.webp'
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
        <>
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
                                        return <Course key={course.id} course={course} type={box.type}/>
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
        </>
    )
}