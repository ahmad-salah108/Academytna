import '../../../assest/css/user/courses/course.css'
import {BsCoin,BsShare, BsFillHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
export default function Course({course, type})
{
    return(
        <motion.div className='course'
        initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
            <Link to={type ? `/courses/${type}/${course.id}` : '#'} ><img src={course.img} alt="load" className='image'/></Link>
            <div className='course-content'>
                <Link to={type ? `/courses/${type}/${course.id}` : '#'} >
                    <div className='course-header'>
                        <h3 className='course-title'>{course.title}</h3>
                        <div className='course-price'>
                            <BsCoin className='courser-icon'/>
                            <span>{course.price} د.ج</span>
                        </div>
                    </div>
                    <h3 className='course-teacher'>الأستاذ/ {course.teacher}</h3>
                </Link>
                <div className='course-footer'>
                    <Link to={'#'} className='link'>اشترك</Link>
                    <div className='icons'>
                        <label>
                            <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                            <BsFillHeartFill className='favorite'/>
                        </label>
                        <BsShare className='icon-share'/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}