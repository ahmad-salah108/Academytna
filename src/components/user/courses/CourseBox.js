import '../../../assest/css/user/courses/CourseBox.css'
import {Link} from 'react-router-dom'
import {BsShare, BsFillHeartFill} from 'react-icons/bs'
export default function CourseBox({course})
{
    return(
        <div className='course-box'>
            <img src={`https://pall.pal-lady.com/InfixLMS%20v5.0.0/${course.thumbnail}`} alt="load.." className='image'/>
            <h3 className='course-box-title'>
                {course.title.ar}
            </h3>
            <h3 className='course-teacher'>
                الاستاذ {course.user.name}
            </h3>
            <div className='course-box-info'>
                <div className='course-box-time'>
                    المدة : {course.duration} د
                </div>
                <div className='course-box-price'>
                    سعر : {course.price} دج
                </div>
            </div>
            <div className='course-footer'>
                <Link to={'#'} className='link'>اشترك</Link>
                <label>
                    <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                    <BsFillHeartFill className='favorite'/>
                </label>
                <BsShare className='icon-share'/>
            </div>
        </div>
    )
}