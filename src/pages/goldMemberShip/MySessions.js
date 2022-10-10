import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/mySessions.css'
import { Link } from 'react-router-dom';
import img1 from '../../images/psyoSession.webp'
import SessionBox from '../../components/user/psychologist/SessionBox';
import { useEffect } from 'react';


export default function MySessions()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);

    const localData=[
        {
            id:"1",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:img1
        },
        {
            id:"2",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:img1
        },
        {
            id:"3",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:img1
        },
        {
            id:"4",
            title:"جلسة وحده",
            price:100,
            hours:30,
            image:img1
        }
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
                    <h2 className='mySessions-title'>الدروس التي تم مشاهدتها </h2>
                    <div className='mySessions-wrapper'>
                    {
                            localData.map(data=>{
                            return <SessionBox key={data.id+"ll"} session={data}/>
                            })
                        }
                    </div>
                    <div className='navgation-wrapper'>
                        <span className='navigation-text'>للانتقال الي الجلسات النفسية  هنا</span>
                        <Link to={"/forums"} className="navigation-link">هنا</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}