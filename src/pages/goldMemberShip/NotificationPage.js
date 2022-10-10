import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/myNotification.css'
import Notification from '../../components/goldMemberShip/Notification';
import { useEffect } from 'react';

export default function NotificationPage()
{

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);

    return(
        <div className="dashboard">
            <GoldenNavbar/>
            <div className="dashboard-wrapper">
                <div className="dashbaord-sidebar">
                    <GoldenDashboard/>
                </div>
                <div className="dashbaord-content">
                    <GoldTopMain/>
                    <h2 className='notif-title'>الاشعارات </h2>
                    <div className='noti-wrapper'>
                        <Notification noti={{
                            time:"قبل 5 دقائق",
                            text:"هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد"
                        }}/>
                        <Notification noti={{
                            time:"قبل 5 دقائق",
                            text:"هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد"
                        }}/>
                        <Notification noti={{
                            time:"قبل 5 دقائق",
                            text:"هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد"
                        }}/>
                        <Notification noti={{
                            time:"قبل 5 دقائق",
                            text:"هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد"
                        }}/>
                        <Notification noti={{
                            time:"قبل 5 دقائق",
                            text:"هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد"
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}