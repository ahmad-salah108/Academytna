import {useEffect} from 'react'
import GroupsCategoryBar from '../../../components/user/groups/GroupCategoryBar';
import '../../../assest/css/user/groups/searchNotFound.css'
import EmptyCategory from '../../../components/user/util/EmptyCategory';


export default function GroupsSearchNotFound() {
    

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);


return (
    <div className="groups-search-notFound container">
    <div className="groups-wrapper">
        <div className="notFound-wrap">
            <GroupsCategoryBar/>
        </div>
        <div className="groups-content">
            <h3 className="title-group">المجموعات</h3>
            <div>
                <EmptyCategory type='/groups'/>
            </div>
        </div>
    </div>
</div>
  )
}
