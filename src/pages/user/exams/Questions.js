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
                </div>
            </div>
        </div>
    )
}