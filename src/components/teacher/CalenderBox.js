import {FcCalendar} from 'react-icons/fc'
export default function CalenderBox({box})
{
    return(
        <div className='calender-box'>
            <div className='calender-details'>
                <FcCalendar className='calender-icon'/>
                <div className='calender-info'>
                    <h3 className='calender-summary'>{box.summary}</h3>
                    <h4 className='calender-date'>{box.date}</h4>
                    <h4 className='calender-day'>{box.day}</h4>
                </div>
            </div>
        </div>
    )
}
