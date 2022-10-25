import {FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import '../../../assest/css/user/groups/groupBox.css'
import {BsFillHeartFill} from 'react-icons/bs'


export default function Group({group, type})
{
    return(
            <motion.div className="group" 
            initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
            <Link to={type ? `/groups/${type}/${group.id}` : '#'} ><img src={`https://pall.pal-lady.com/InfixLMS%20v5.0.0/${group.class.image}`} alt='load..' className="group-image"/></Link>
            <div className="group-wrapper">
                <Link to={type ? `/groups/${type}/${group.id}` : '#'} >
                    <div className="group-content">
                        <div className="group-text">
                            <h2 className="group-title">{group.class.title.ar}</h2>
                            <p className="group-time">تبدأ يوم {group.class.start_date} الى يوم {group.class.end_date} الساعة {group.class.time}</p>
                        </div>
                        <div className="group-count">
                            <span className="number">العدد</span>
                            <span className="num">{group.enrolls.length}/20</span>
                        </div>
                    </div>
                </Link>
                <div className="group-data">
                    <div className="data-wrapper">
                        <div className="data-icon">
                            <FaUser className='icon'/>
                        </div>
                        <span className="group-teacther">
                            الأستاذ <span>{group.user.name}</span>
                        </span>
                    </div>
                    <label>
                        <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                        <BsFillHeartFill className='favorite'/>
                    </label>
                </div>
            </div>
        </motion.div>
    )
}