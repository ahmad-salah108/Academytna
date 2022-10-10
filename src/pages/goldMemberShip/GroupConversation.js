import '../../assest/css/student/dashBoardStudent.css'
import GoldenNavbar from '../../components/goldMemberShip/GoldenNavbar';
import GoldenDashboard from '../../components/goldMemberShip/GoldenDashboard';
import GoldTopMain from '../../components/goldMemberShip/GoldTopMain';
import '../../assest/css/goldMemberShip/groupConversation.css'
import {BiSearchAlt2} from 'react-icons/bi'
import FriendBox from '../../components/goldMemberShip/FriendBox';
import GroupMessenger from '../../components/goldMemberShip/GroupMessenger';
import { useEffect } from 'react';

export default function GroupConversation()
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
                    <div className='groupConversation-wrapper'>
                        <div className='conversation-wrapper'>
                            <GroupMessenger/>
                        </div>
                        <div className='list-user-wrapper'>
                            <h6 className='conv-title'>الدردشة</h6>
                            <div className='users-wrapper'>
                                <form className='search-form'>
                                    <button className='search-btn'><BiSearchAlt2/></button>
                                    <input type={"search"} placeholder="البحث" className='search-input'/>
                                </form>
                                <div className='friends-wrapper'>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                    <FriendBox info={{name:"محمد احمد" , time:"20ث"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}