import {BsFillHeartFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../../assest/css/user/forums/forum.css'


export default function Forums({forum,goldurl, type})
{
    return(
            <motion.div className="forum-wrapper" 
            initial={{opacity:0, y:"-10px"}} animate={{opacity:1, y:"0px",transition:{duration:0.4}}}>
            <Link to={type ? `/forums/${type}/${forum.id}` : '#'}><img src={forum.img} alt='load..' className="image"/></Link>
            <div className="wrapper-content">
                <Link to={type ? `/forums/${type}/${forum.id}` : '#'}>
                    <h2 className="heading-2">{forum.title}</h2>
                    <span className="name">
                            الأستاذ /<span>{forum.teacher}</span>
                    </span>
                </Link>
                <div className='controls'>
                    <Link to={`${goldurl?goldurl:""}`} className='follow-us'>انضم الان</Link>
                    <label>
                        <input type='checkbox' name='favorite' style={{display: 'none'}}/>
                        <BsFillHeartFill className='favorite'/>
                    </label>
                </div>
            </div>
        </motion.div>
    )
}