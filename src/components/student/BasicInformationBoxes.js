import React from 'react'
import '../../assest/css/student/basicInformationBoxes.css'

export default function BasicInformationBoxes() {
  return (
    <div className='basic-boxes-wrapper'>
        <div className='date-wrapper'>
            <div className='date-today'>
            الاحد  8 مايو 2022
            </div>
        </div>
            <div className='boxes-wrapper'>
                <div className='absences'>
                    <h3 className='header-description'>الغيابات - التاخيرات - الاستدعاءات </h3>
                    <div className='absences-information'>
                    عدد ايام الغياب :
                    <span></span>
                    </div>
                    <div className='absences-information'>
                    عدد ايام التاخير  :
                    <span></span>
                    </div>
                    <div className='absences-information'>
                    عدد ايام استدعاء ولي امر الطالب  :
                    <span></span>
                    </div>
                </div>
                <div className='lates-exams'>
                    <h3 className='header-description'>نتائج الاختبارات الاخيره </h3>
                    <div className='lates-exam-info'>
                        <div className='exam-info'>
                            <span className='green-shape'></span>
                            <h4 className='exam-name'>اللغة العربية</h4>
                        </div>
                        <div className='exam-degree'>
                            <span>20</span>
                            <span>30</span>
                        </div>
                    </div>
                    <div  className='lates-exam-info'>
                        <div  className='exam-info'>
                            <span className='green-shape'></span>
                            <h4  className='exam-name'>اللغة العربية</h4>
                        </div>
                        <div className='exam-degree'>
                            <span>20</span>
                            <span>30</span>
                        </div>
                    </div>
                </div>
                <div className='daily-study'>
                    <h3 className='header-description'>جدول الدروس اليومية</h3>
                    <div className='daily-info dark'>
                        <span className='title'>8.30- 9.00</span>
                        <h4 className='subject-name'>اللغة العربية </h4>
                    </div>
                    <div className='daily-info light'>
                        <span className='title'>8.30- 9.00</span>
                        <h4 className='subject-name'>اللغة العربية </h4>
                    </div>
                </div>
            </div>
    </div>
  )
}
