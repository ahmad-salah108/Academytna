import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../../assest/css/user/exams/singleQuestionTrueOrrFalse.css'
import ExamsCategoryBar from "../../../components/user/exams/ExamsCategorySidebar";

export default function SingleQuestionTrueOrrFalse()
{

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);

    return(
        <div className="single-question-true-false container">
            <div className="groups-wrapper">
                <div className="category-wrap">
                    <ExamsCategoryBar/>
                </div>
                <div className="groups-content">
                    <h3 className="title">الاختبارات</h3>
                    <div>
                        <h4 className="exam-name">اختبار الوحده الاولى مادة الرياضيات </h4>
                        <form className="questions-wrapper">
                            <div className="question-box">
                                <h5 className="question-title">1- هنا سؤال تجريبي يكون اختيار او صح وخطا  </h5>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title"> صح  </label>
                                </div>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title"> خطا  </label>
                                </div>
                            </div>
                            <button className="btn-next-question-page">التالي </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}