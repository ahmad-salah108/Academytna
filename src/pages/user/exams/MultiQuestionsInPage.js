import { useEffect, useState } from "react";
import '../../../assest/css/user/exams/multiQuestionsInPage.css'
import { useParams } from "react-router-dom";
import {Button,Box,Typography} from '@mui/material'
import { useSelector } from "react-redux";
export default function MultiQuestionsInPage()
{
    const params = useParams()
    const { currentUser } = useSelector((state) => state.user);
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);

    const [exam,setExam] = useState([])
    const [isMark,setIsMark] = useState(false)
    const [examMark,setExamMark] = useState(0)
    const [totalMark,setTotalMark] = useState(0)
    const [durationMinutes,setDurationMunites] = useState();
    const [durationSeconds,setDurationSeconds] = useState(60);
    const [timeEnd , setTimeEnd] = useState(false);

    useEffect(()=>
    {
        async function getExam()
        {
            try{
                const response = await fetch(`${process.env.REACT_APP_API}/api/exam/student/${params.examId}`, {
                    headers: {
                    Authorization: currentUser.token
                }
            })
            const data = await response.json()
            if(data.hasExam)
            {
                setIsMark(true)
                setExamMark(data.grade.studentGrade)
                setTotalMark(data.grade.totalGrade)
            }
            else{
                setExam(data.exam)
                setTotalMark(data.exam.questionsNumber)
                setDurationMunites(data.exam.duration-1)
            }
        }
            catch(err)
            {
                console.log(err)
            }
        }
        getExam()
    },[currentUser , params.examId])

    const [answers,setAnswers] = useState([]);
    const saveAnswer = (question , answer)=>{
        if(answers.find(ans => ans.question === question.id)){
            const pastAnswers = answers.map(ans=> ans.question === question.id? {question:question.id , answer:answer.id} :ans);
            setAnswers(pastAnswers);
            return;
        }
        setAnswers(preData=> [...preData, {question:question.id , answer:answer.id}])
    }

    const SubmitHandler = async (e)=>{
        if(e){
            e.preventDefault();
        }
        try{
            const res = await fetch(`${process.env.REACT_APP_API}/api/exam/mark/${params.examId}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": currentUser.token
                },
                body:JSON.stringify({answers})
            });
            if(res.status!==200&&res.status!==201)
            {
                throw new Error('failed occured')
            }
            const resData = await res.json();
            setIsMark(true)
            setExamMark(resData.grade)
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>
    {
        if(!isMark)
        {
            if(!timeEnd){
                const countDown = setInterval(() => {
                    setDurationSeconds(pre => pre-1)
                }, 1000);
                return () => clearInterval(countDown);
            }
            else{
                SubmitHandler();
            }
        }
    },[timeEnd])

    useEffect(()=>{
        if(durationSeconds === 0){
            setDurationMunites(prev=>prev-1)
            setDurationSeconds(60)
        }
    },[durationSeconds]);

    useEffect(()=>{
        if(durationMinutes===0 && durationSeconds===0)
        {
            setTimeEnd(true);
        }
    })

    return(
        <div className="many-questions-page container">
            <div className="groups-wrapper">
                <div className="groups-content">
                    <h3 className="title">الاختبارات</h3>
                    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"start"}}>
                        <h4 className="exam-name">{exam?.title}</h4>
                        {!isMark&&
                            <Box sx={{border:"1px solid black",fontSize:"20px",padding:"6px 0",width:"120px",display:"flex",justifyContent:"center"}}>{durationSeconds} : {durationMinutes} </Box>}
                    </Box>
                    {!isMark?
                    <form className="questions-wrapper" onSubmit={(e)=>SubmitHandler(e)}>
                    <div>
                        {
                            exam?.Questions?.map((question,index)=>
                            {
                                return(
                                    <Box key={index+'mm1'} sx={{marginBottom:"25px"}}>
                                        <div className="question-box">
                                            <h5 className="question-title">{question.title}</h5>
                                            {
                                                question.Answers.map((answer,index)=>
                                                {
                                                    return(
                                                        <div className="answers-box" key={index+'mqw'}>
                                                            <input type={"radio"} name={question.id} value={answer.id} onChange={()=>saveAnswer(question,answer)}/>
                                                            <label className="answer-title">{answer.title}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Box>
                                )
                            })
                        }
                    </div>
                    {exam?.Questions?.length>0&&<Box sx={{margin:"30px 0"}}>
                        <Button variant="contained" type="submit" >تسليم</Button>
                    </Box>}
                    </form>
                    :
                    <Typography sx={{marginBottom:"40px",fontSize:"20px",fontWeight:"600"}}>علامتك هي {examMark} من {totalMark}</Typography>
                    }
                </div>
            </div>
        </div>
    )
}