import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/myGroups.css'
import { Link } from 'react-router-dom';
import img1 from '../../images/group1.webp'
import Group from '../../components/user/groups/Group';
import { useEffect } from 'react';


export default function MyGroups()
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

    return(
        <div className="dashboard">
            <GoldenNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <GoldenDashboard/>
                </div>
                <div className="dashbaord-content">
                    <GoldTopMain/>
                    <h2 className='myGroups-title'>المجموعات  التي تم الانضمام اليها  </h2>
                    <div>
                        {
                            data.length>0&&data.map((box,index)=>
                            {
                                return<div key={index+'m1'}>
                                    <div className="myGroups-wrapper">
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
                    <div className='navgation-wrapper'>
                        <span className='navigation-text'>للانتقال الي المجموعات</span>
                        <Link to={"/groups"} className="navigation-link">هنا</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}