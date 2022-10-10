import {useState, useEffect} from 'react'
import { useParams , Link} from 'react-router-dom'
import Course from '../../../components/user/courses/Course';
import coursesData from '../../../data/coursesData';
import '../../../assest/css/user/courses/coursesCategoryPage.css'
import EmptyCategory from '../../../components/user/util/EmptyCategory';
import CoursesCategoryBar from '../../../components/user/courses/CoursesCategoryBar';

export default function CoursesCategoryPage() {
    const {courseType} = useParams();
    const [data,setData] = useState([]);
    const [isNotFound,setIsNotFound]=useState(false);

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
        setData([]);
        setTimeout(()=>{
            setData(coursesData.filter(g=>g.type.toLowerCase()===courseType));
            if(coursesData.filter(g=>g.type.toLowerCase()===courseType).length===0){
                setIsNotFound(true);
            }
            else{
                setIsNotFound(false);
            }
        },100)
    },[courseType]);
    return (
    <div className="courses-category container">
    <div className="courses-wrapper">
        <div className="category-wrap">
            <CoursesCategoryBar/>
        </div>

        <div className="courses-content">
            <h3 className="title">الدورات </h3>
            <div>
                {
                    data.length>0?data.map((box,index)=>
                    {
                        return<div key={index+'m1'} className="box">
                            <h3 className="box-title">{box.title}</h3>
                            <div className="boxes-wrapper">
                                {
                                    box.groups.map((course)=>
                                    {
                                        return <Course key={course.id} course={course} type={box.type}/>;
                                    })
                                }
                            </div>
                        </div>
                    }):isNotFound&&<EmptyCategory type='/courses'/>
                }
            </div>
        </div>
    </div>
</div>
)
}
