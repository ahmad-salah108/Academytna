import {useEffect} from 'react'
import Group from '../../../components/user/groups/Group';
import GroupsCategoryBar from '../../../components/user/groups/GroupCategoryBar';
import '../../../assest/css/user/groups/groupsSearchFound.css'
import img1 from '../../../images/group1.webp'



export default function GroupsSearchFound() {
    const data=[
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

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);


return (
    <div className="groups-search-found container">
    <div className="groups-wrapper">
        <div className="category-wrap">
            <GroupsCategoryBar/>
        </div>
        <div className="groups-content">
            <h3 className="title-group">المجموعات</h3>
            <h4 className='search-title'>نتائج البحث</h4>
            <div>
                <div className="boxes-wrapper">
                    {
                        data.map((group)=>
                        {
                            return <Group group={group}  key={group.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
