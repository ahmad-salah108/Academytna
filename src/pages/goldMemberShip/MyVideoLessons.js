import '../../assest/css/goldMemberShip/myLessons.css'
import { Link } from 'react-router-dom';
import img1 from '../../images/منتدي 1.webp'
import  LessonBox from '../../components/user/videoLessons/LessonBox'
import { useEffect } from 'react';

export default function MyVideoLessons()
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

    return(
        <>
            <h2 className='mylessons-title'>الدورات التدريبية التي تم الاشتراك بها </h2>
            <div>
                {
                    data.length>0&&data.map((box,index)=>
                    {
                        return<div key={index+'m1'} className="box">
                            <div className="myLessons-wrapper">
                                {
                                    box.groups.map((group,index)=>
                                    {
                                        return <LessonBox key={group.id} lesson={group} type={box.type}/>;
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='navgation-wrapper'>
                <span className='navigation-text'>للانتقال الي الدروس المرئية</span>
                <Link to={"/forums"} className="navigation-link">هنا</Link>
            </div>
        </>
    )
}