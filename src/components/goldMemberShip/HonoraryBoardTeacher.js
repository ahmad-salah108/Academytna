import logo from '../../images/goldStudent/gold.png'
export default function HonoraryBoardTeacher({image,teacher,summary})
{
    return(
        <div className="teacher-honoraryboard">
            <img src={image} alt="load" className="teacher-honoraryboard-image"/>
            <div className='teacher-honoraryboard-header'>
                <img src={logo} alt="load" className='teacher-honoraryboard-header-image'/>
                <h3 className='teacher-honoraryboard-header-name'>
                    الاستاذ/ {teacher}
                </h3>
            </div>
            <p className='teacher-honoraryboard-summary'>{summary}</p>
        </div>
    )
}
