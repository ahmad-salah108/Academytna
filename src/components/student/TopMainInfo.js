import '../../assest/css/student/topMainInfo.css'
import image1 from '../../images/teacher/group1.png'
import image2 from '../../images/teacher/group2.png'
import image3 from '../../images/teacher/group3.png'
import image4 from '../../images/teacher/group4.png'

export default function TopMainInfo()
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
                    <h3 className='box-title'>المعلمين </h3>
                </div>
                <div className='box'>
                    <img src={image3} alt="load" className='image'/>
                    <h3 className='box-num'>2000</h3>
                    <h3 className='box-title'>الاقسام </h3>
                </div>
                <div className='box'>
                    <img src={image4} alt="load" className='image'/>
                    <h3 className='box-num'>2000</h3>
                    <h3 className='box-title'>الخرجين</h3>
                </div>
            </div>
        </div>
    )
}