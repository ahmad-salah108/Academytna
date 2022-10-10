import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/myForums.css'
import { Link } from 'react-router-dom';
import img1 from '../../images/منتدي 1.webp'
import Forum from '../../components/user/forums/Forum'
import { useEffect } from 'react';


export default function MyForums()
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
                    <h2 className='myForums-title'>النوادي والمنتديات التي تم الانضمام اليها </h2>
                    <div>
                        {
                            data.length>0&&data.map((box,index)=>
                            {
                                return<div key={index+'m1'} className="box">
                                    <div className="myForums-wrapper">
                                        {
                                            box.groups.map((forum,index)=>
                                            {
                                                return <Link to={`/goldStudent/myForums/${box.type}/${forum.id}`} key={index+'z1'} > 
                                                    <Forum forum={forum} goldurl={`/goldStudent/myForums/${box.type}/${forum.id}`}/>
                                                </Link>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='navgation-wrapper'>
                        <span className='navigation-text'>للانتقال الي النوادي والمنتديات اضغط</span>
                        <Link to={"/forums"} className="navigation-link">هنا</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}