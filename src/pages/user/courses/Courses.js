import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import coursesData from '../../../data/coursesData'
import CoursesCategoryBar from "../../../components/user/courses/CoursesCategoryBar";
import Course from "../../../components/user/courses/Course";

export default function Courses()
{
    const [data,setData] = useState(coursesData)

    useEffect(()=>
    {
        window.scrollTo({
            behavior:"smooth",
            top:0
        });
        setData(coursesData.map(g=>{
            return {...g,groups:g.groups.slice(0,3)}
        }))
    },[])

    return(
        <div className="courses container">
            <div className="courses-wrapper">
                <div className="category-wrap">
                    <CoursesCategoryBar/>
                </div>
                <div className="courses-content">
                    <h3 className="courses-title">الدورات</h3>
                    <div>
                        {
                            data.length>0&&data.map((box,index)=>
                            {
                                return<div key={index+'m1'} className="box">
                                    <h3 className="box-title">{box.title}</h3>
                                    <Link to={`/courses/${box.type.toLowerCase()}`}
                                    className="watchAll">مشاهدة الجميع</Link>
                                    <div className="boxes-wrapper">
                                        {
                                            box.groups.map((course)=>
                                            {
                                                return <Course key={course.id} course={course} type={box.type}/>
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