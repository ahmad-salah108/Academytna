import React from 'react'
import { Link } from 'react-router-dom'
import '../../assest/css/goldMemberShip/examSubjectBox.css'

export default function ExamSubjectBox({exam}) {
  return (
    <div className='exam-subject-box'>
        <img src={exam.img} alt="" className='image-exam'/>
        <div className='exam-info-wrapper'>
            <h5 className='exam-name'>{exam.title}</h5>
            <span className='exam-state'>{exam.state}</span>
        </div>
        <p className='exam-duration'>{exam.duration}</p>
        <Link to={`/goldStudent/myExams/${exam.id}`} className='lesson-name'>{exam.lessonName}</Link>
    </div>
  )
}
