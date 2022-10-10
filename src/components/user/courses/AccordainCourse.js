import { useState } from 'react'
import '../../../assest/css/user/courses/AccordinCourse.css'
import {IoIosVideocam} from 'react-icons/io'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {BiLockAlt} from 'react-icons/bi'
import {motion , AnimatePresence} from 'framer-motion'
export default function AccordinCourse({box})
{
    const [show,setShow] = useState(false)
    return(
        <div className='course-unit'>
            <div className="unit">
                    <span>{box.title} </span>
                    <button className="btn" onClick={()=>setShow(back=>!back)}>{show?"-":"+"}</button>
            </div>
            <AnimatePresence>
            {show&&
            <motion.div className='boxes-unit' 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition:{duration:0.4}}}
            exit={{ opacity: 0 , transition:{duration:0.2}}}
                >
                {
                    box.content.map((b,index)=>
                    {
                        return (
                            <div key={index+'m9'} className={`box-unit ${index%2!==0?'notColor':'color'}`}>
                                <div className='unit-content'>
                                    {b.type==='video'?
                                    <IoIosVideocam className='unit-video'/>:
                                    <AiOutlineFilePdf className='unit-video'/>}
                                    <h3 className='unit-text'>{b.header}</h3>
                                </div>
                                <BiLockAlt/>
                            </div>
                        )
                    })
                }
            </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}