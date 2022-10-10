import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Group from "../../../components/user/groups/Group";
import examsSubjects from '../../../data/examsSubject'
import '../../../assest/css/user/exams/showSubjectsExam.css'
import ExamsCategoryBar from "../../../components/user/exams/ExamsCategorySidebar";

export default function ShowSubjectsExam()
{
    const [data,setData] = useState(examsSubjects)

    // get page scroll to top
    useEffect(()=>
    {
        window.scrollTo({
            behavior:"smooth",
            top:0
        });
        setData(examsSubjects.map(g=>{
            return {...g,groups:g.groups.slice(0,3)}
        }))
    },[])

    return(
        <div className="exams container">
            <div className="groups-wrapper">
                <div className="category-wrap">
                    <ExamsCategoryBar/>
                </div>
                <div className="groups-content">
                    <h3 className="title">الاختبارات</h3>
                    <div>
                        {
                            data.length>0&&data.map((box,index)=>
                            {
                                return<div key={index+'m1'} className="box">
                                    <h3 className="box-title">{box.title}</h3>
                                    <Link to={`/exams/${box.type.toLowerCase()}`}
                                    className="watchAll">مشاهدة الجميع</Link>
                                    <div className="exams-wrapper">
                                        {
                                            box.groups.map((group,index)=>
                                            {
                                                return <Link to={`/exams/questions`} key={index+'z1'} className="link-quesions"> 
                                                <div className="exam-subject-name">
                                                    {group.title}
                                                </div>
                                                </Link>
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