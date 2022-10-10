import '../../assest/css/teacher/dashbaordcontent.css'
import image1 from '../../images/teacher/group1.png'
import image2 from '../../images/teacher/group2.png'
import image3 from '../../images/teacher/group3.png'
import image4 from '../../images/teacher/group4.png'

export default function DashbaordContent()
{
    return(
        <div className='container'>
            <div className='content-bar'>
                <div className='box'>
                    <img src={image1} alt="load" className='image'/>
                    <h3 className='box-num'>2000</h3>
                    <h3 className='box-title'>الطلاب</h3>
                </div>
                <div className='box'>
                    <img src={image2} alt="load" className='image'/>
                    <h3 className='box-num'>2000</h3>
                    <h3 className='box-title'>المجموعات</h3>
                </div>
                <div className='box'>
                    <img src={image3} alt="load" className='image'/>
                    <h3 className='box-num'>2000</h3>
                    <h3 className='box-title'>الدروس المرئية</h3>
                </div>
                <div className='box'>
                    <img src={image4} alt="load" className='image'/>
                    <h3 className='box-num'>2000</h3>
                    <h3 className='box-title'>رصيدي</h3>
                </div>
            </div>
        </div>
    )
}