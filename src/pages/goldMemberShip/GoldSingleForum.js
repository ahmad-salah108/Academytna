import '../../assest/css/goldMemberShip/goldcontrolboard.css'
import '../../assest/css/goldMemberShip/goldsingleforum.css'
import image from '../../images/goldStudent/781237e7972f2496a46c8ee49d8436d7.png'
import perosnImage from '../../images/goldStudent/person.png'
import {BiCommentDetail} from 'react-icons/bi'
import {GrShare} from 'react-icons/gr'
import { useEffect } from 'react';
export default function GoldSingleForum()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);

    const comments = [
        {
            name:"ا. محمد البعلوشي ",
            nameImage:perosnImage,
            text:"ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص  ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص  ",
            commentsNumber:'20'
        },
        {
            name:"ا. محمد البعلوشي ",
            nameImage:perosnImage,
            text:"ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص  ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص  ",
            commentsNumber:'20'
        },
        {
            name:"ا. محمد البعلوشي ",
            nameImage:perosnImage,
            text:"ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص  ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص ان من مهارات الكتابة هو ان نقوم بالاطلاع الجيد علي اللاحرف والنصوص  ",
            commentsNumber:'20'
        }
    ]

    return(
        <div className='gold-single-forum container'>
            <h3 className='gold-single-forum-title'>نادي الكتابة </h3>
            <img src={image} alt='load' className='gold-single-forum-image'/>
            <div className='gold-single-forum-comments'>
                {
                    comments.map((box,index)=>
                    {
                        return(
                            <div key={index+'i1'} className="gold-single-forum-comment">
                                <div className='gold-single-forum-comment-user'>
                                    <img className='gold-single-forum-comment-user-image' src={box.nameImage} alt="load"/>
                                    <h3 className='gold-single-forum-comment-user-name'>{box.name}</h3>
                                </div>
                                <h4 className='gold-single-forum-comment-text'>{box.text}</h4>
                                <div className='gold-sinlge-forum-commentsNumber'>
                                    {box.commentsNumber} تعليق
                                </div>
                                <div className='gold-single-forum-comment-btns'>
                                    <button className='gold-sinlge-forum-addComment'>
                                        <BiCommentDetail className='gold-sinlge-forum-addComment-icon'/>
                                        <h3 className='gold-sinlge-forum-addComment-title'>تعليق </h3>
                                    </button>
                                    <button className='gold-sinlge-forum-share'>
                                        <GrShare className='gold-sinlge-forum-share-icon'/>
                                        <h3 className='gold-sinlge-forum-share-title'>شارك </h3>
                                    </button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}