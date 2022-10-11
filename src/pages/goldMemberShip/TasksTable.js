import '../../assest/css/goldMemberShip/goldcontrolboard.css'
import CalenderBox from '../../components/teacher/CalenderBox';
import Calendar from 'react-calendar';
import '../../assest/css/goldMemberShip/goldtaskstable.css'
import { useState , useEffect} from 'react';


export default function GoldTasksTable()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);
    const [date, setDate] = useState(new Date());
    const info = [
        {
            summary:"انجاز الدرس المرئي الخاص بمادة الرياضيات درس التكامل ",
            date:"17/04/2022",
            day:"يوم الاربعاء "
        },
        {
            summary:"انجاز الدرس المرئي الخاص بمادة الرياضيات درس التكامل ",
            date:"17/04/2022",
            day:"يوم الاربعاء "
        },
        {
            summary:"انجاز الدرس المرئي الخاص بمادة الرياضيات درس التكامل ",
            date:"17/04/2022",
            day:"يوم الاربعاء "
        }
    ]
    return(
        <div className='dash-taks-table'>
            <div className="calender-content">
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <CalenderBox box={box} key={index+'zmk1'}/>
                            )
                        })
                    }
            </div>
            <div className='dash-taks-table-details'>
                <div className='dash-taks-table-form'>
                    <div className='dash-taks-table-box'>
                        <label className='dash-taks-label'>المذكرة</label>
                        <textarea></textarea>
                    </div>
                    <div className='dash-taks-table-box'>
                        <label className='dash-taks-label'>الساعة </label>
                        <input type="time"/>
                    </div>
                    <div className='dash-taks-table-box'>
                        <label className='dash-taks-label'>التاريخ</label>
                        <input type="date"/>
                    </div>
                </div>
                <div className='calender-wrapper'>
                    <Calendar value={date} onChange={setDate}/>
                </div>
            </div>
            <div className='dash-taks-table-add'>
                    <button>اضافة </button>
            </div>
        </div>
    )
}
