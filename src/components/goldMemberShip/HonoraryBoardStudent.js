import logo from '../../images/goldStudent/فضية 1.png'
export default function HonoraryBoardStudent({image,student,summary})
{
    return(
        <div className="student-honoraryboard">
            <img src={image} alt="load" className="student-honoraryboard-image"/>
            <div className='student-honoraryboard-header'>
                <img src={logo} alt="load" className='student-honoraryboard-header-image'/>
                <h3 className='student-honoraryboard-header-name'>
                    الطالب/ {student}
                </h3>
            </div>
            <p className='student-honoraryboard-summary'>{summary}</p>
        </div>
    )
}
