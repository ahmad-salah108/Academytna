import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../../../assest/css/user/exams/multiQuestionsInPage.css'
import ExamsCategoryBar from "../../../components/user/exams/ExamsCategorySidebar";
import axios from "axios";
import SingleQuestionChoices from "./SingleQuestionChoices";
import ClipLoader from "react-spinners/ClipLoader";

export default function MultiQuestionsInPage()
{
    const {examType, examId} = useParams();
    const [quiz, setQuiz] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
        axios.get(`https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/get-quiz-details/${examId}`)
        .then(response => {
          setQuiz([response.data.data])
        })
        setIsLoading(false);
    },[examType, examId]);

    return(
        <div className="many-questions-page container">
            <div className="groups-wrapper">
                <div className="category-wrap">
                    <ExamsCategoryBar/>
                </div>
                <div className="groups-content">
                    <h3 className="title">الاختبارات</h3>
                    {isLoading ? <ClipLoader
                      color={'#99DAE9'}
                      loading={isLoading}
                      cssOverride={{
                        display: 'block',
                        marginTop: '100px',
                        marginInline: 'auto',
                        borderWidth: '10px',
                      }}
                      size={100}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    /> :(quiz.length > 0 && quiz.map(q => 
                       <SingleQuestionChoices key={q.id} itemsPerPage={1} questions={q.quiz.assign}/>
                    ))}
                    {/* <div>
                        <h4 className="exam-name">اختبار الوحده الاولى مادة الرياضيات </h4>
                        <form className="questions-wrapper">
                            <div className="question-box">
                                <h5 className="question-title">1- هنا سؤال تجريبي يكون اختيار او صح وخطا  </h5>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title">هنا خيار  </label>
                                </div>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title">هنا خيار  </label>
                                </div>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title">هنا خيار  </label>
                                </div>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title">هنا خيار  </label>
                                </div>
                            </div>
                            <div className="question-box">
                                <h5 className="question-title">1- هنا سؤال تجريبي يكون اختيار او صح وخطا  </h5>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title">هنا خيار  </label>
                                </div>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title">هنا خيار  </label>
                                </div>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title">هنا خيار  </label>
                                </div>
                                <div className="answers-box">
                                    <input type={"radio"}/>
                                    <label className="answer-title">هنا خيار  </label>
                                </div>
                            </div>
                            <button className="btn-next-question-page">التالي </button>
                        </form>
                        <div className="page-pagination">
                                <Link to={"#"} className="pagination-link active">1</Link>
                                <Link to={"#"} className="pagination-link ">2</Link>
                                <Link to={"#"} className="pagination-link ">3</Link>
                            </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}