import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/myFavorites.css'
import { Link } from 'react-router-dom';
import img1 from '../../images/منتدي 1.webp'
import image2 from '../../images/psyoSession.webp'
import Course from '../../components/user/courses/Course';
import LessonBox from '../../components/user/videoLessons/LessonBox';
import SessionBox from '../../components/user/psychologist/SessionBox';
import Group from '../../components/user/groups/Group';
import Forum from '../../components/user/forums/Forum';
import { useEffect } from 'react';


export default function MyFavorites()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);

    const videoLessons=[{
        type:'Arabic',
        title:"اللغة العربية",
        groups:[
            {
                id:"1",
                img:img1,
                title:"درس العلوم الاحصاء الحيوي التطبيقي ",
                isTrain:true,
                teacher:"أنور نور",
                time:"30"
            },,
            {
                id:"1",
                img:img1,
                title:"درس العلوم الاحصاء الحيوي التطبيقي ",
                isTrain:false,
                teacher:"أنور نور",
                time:"30"
            },
            {
                id:"1",
                img:img1,
                title:"درس العلوم الاحصاء الحيوي التطبيقي ",
                isTrain:false,
                teacher:"أنور نور",
                time:"30"
            },
            {
                id:"1",
                img:img1,
                title:"درس العلوم الاحصاء الحيوي التطبيقي ",
                isTrain:true,
                teacher:"أنور نور",
                time:"30"
            },
        ]
    },
    ]

    const courses=[{
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

    const sessions=[
        {
            id:"1",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:image2
        },
        {
            id:"2",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:image2
        },
        {
            id:"3",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:image2
        },
        {
            id:"4",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:image2
        }
    ]

    const groups=[{
        type:'Arabic',
        title:"اللغة العربية",
        groups:[
            {
                id:"1",
                img:img1,
                title:"مجموعة العربية #1",
                time:"يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
                number:"5",
                teacher:"أنور نور",
            },
            {
                id:"2",
                img:img1,
                title:"مجموعة العربية #1",
                time:"يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
                number:"5",
                teacher:"أنور نور",
            },
            {
                id:"3",
                img:img1,
                title:"مجموعة العربية #1",
                time:"يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
                number:"5",
                teacher:"أنور نور", 
            },
            {
                id:"4",
                img:img1,
                title:"مجموعة العربية #1",
                time:"يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
                number:"5",
                teacher:"أنور نور",
            }
        ]
    },
    ]

    const forums=[{
        type:'Arabic',
        title:"اللغة العربية",
        groups:[
            {
                id:"1",
                img:img1,
                title:"نادي الكتابة",
                teacher:"أنور نور",
            },
            {
                id:"1",
                img:img1,
                title:"نادي الكتابة",
                teacher:"أنور نور",
            },
            {
                id:"1",
                img:img1,
                title:"نادي الكتابة",
                teacher:"أنور نور",
            },
            {
                id:"1",
                img:img1,
                title:"نادي الكتابة",
                teacher:"أنور نور",            
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
                    <h2 className='myFavorites-title'>المفضلة</h2>
                    <div>
                        {
                            videoLessons.length>0&&<h3 className='fav-title'>دروس مرئية</h3>
                        }
                        {
                            videoLessons.length>0&&videoLessons.map((box,index)=>
                            {
                                return<div key={index+'m1'}>
                                    <div className="myFavorites-wrapper">
                                        {
                                            box.groups.map((group,index)=>
                                            {
                                                return <Link to={`/videoLessons/${box.type}/${group.id}`} key={index+'z1'} > 
                                                <LessonBox lesson={group} type={box.type}/></Link>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        {
                            videoLessons.length>0&&<h3 className='fav-title'>الدورات التدريبية</h3>
                        }
                        {
                            courses.length>0&&courses.map((box,index)=>
                            {
                                return<div key={index+'m1'}>
                                    <div className="myFavorites-wrapper">
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
                    <div>
                        {
                            sessions.length>0&&<h3 className='fav-title'>الجلسات</h3>
                        }
                        <div className='myFavorites-wrapper'>
                            {
                                sessions.map(data=>{
                                return <SessionBox key={data.id+"ll"} session={data}/>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        {
                            groups.length>0&&<h3 className='fav-title'>المجموعات</h3>
                        }
                        {
                            groups.length>0&&groups.map((box,index)=>
                            {
                                return<div key={index+'m1'}>
                                    <div className="myFavorites-wrapper">
                                        {
                                            box.groups.map((group,index)=>
                                            {
                                                return <Link to={`/groups/${box.type}/${group.id}`} key={index+'z1'} > <Group group={group}/></Link>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        {
                            forums.length>0&&<h3 className='fav-title'>النوادي والمنتديات</h3>
                        }
                        {
                            forums.length>0&&forums.map((box,index)=>
                            {
                                return<div key={index+'m1'} className="box">
                                    <div className="myForums-wrapper">
                                        {
                                            box.groups.map((forum,index)=>
                                            {
                                                return <Link to={`/forums/${box.type}/${forum.id}`} key={index+'z1'} > 
                                                    <Forum forum={forum}/>
                                                </Link>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}