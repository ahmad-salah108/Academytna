import { useEffect, useState } from "react";
import { Link , useParams} from "react-router-dom";
import examsSubjects from '../../../data/examsSubject'
import '../../../assest/css/user/exams/showCategorySubjectExam.css'
import ExamsCategoryBar from "../../../components/user/exams/ExamsCategorySidebar";

export default function ShowCategorySubjectsExam()
{
    const{examType}=useParams();
    const [data,setData] = useState([]);

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
        setData([]);
        setTimeout(()=>{
            setData(examsSubjects.filter(g=>g.type.toLowerCase()===examType));
        },100)
    },[examType]);

    return(
        <div className="exams-category container">
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
                                    <div className="exams-wrapper">
                                        {
                                            box.groups.map((group,index)=>
                                            {
                                                return <Link to={`/exams/questions`} className="link-quesions" key={index+'z1'} > 
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