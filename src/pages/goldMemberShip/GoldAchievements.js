import { useEffect } from 'react';
import '../../assest/css/goldMemberShip/goldAchievements.css'
import image1 from '../../images/goldStudent/Group 3605.png'
import image2 from '../../images/goldStudent/Group 3606.png'
import {
Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import GoldChart from '../../components/goldMemberShip/GoldChart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function GoldAchievements()
{
    useEffect(()=>{
        window.scrollTo({
            behavior:"smooth",
            top:0
        })
    },[]);
    const data = {
        labels:["اللغة العربية ","الاقتصاد ","الرياضيات ","التاريخ ","اللغة العربية ","اللغة العربية ","اللغة العربية ","اللغة العربية ","اللغة العربية ","اللغة العربية "],
        datasets:[
        {
            data:[4,5,6,3,7,1,2,5,8,9],
            backgroundColor:["#F40A0A","#F40A0A","#64B161","#F40A0A","#64B161","#F40A0A","#F40A0A","#F40A0A","#64B161","#64B161"],
            barPercentage:.7,
        },
        ]
    }
    const options = {
        responsive:true,
        plugins:{
        legend:{
            display:false,
        }
        },
        scales:{
            y:{
                min:0,
                max:10
            }
        }
    }
    
    const dataPart = {
        labels:["شهر 7  ","شهر 7 ","شهر 7 ","شهر 7 "," شهر 7 ","شهر 7  ","شهر 7  ","شهر 7  ","شهر 7  "],
        datasets:[
        {
            data:[6,2,6,6,8,6,1,6,6],
            backgroundColor:["#64B161","#F40A0A","#64B161","#64B161","#64B161","#64B161","#F40A0A","#64B161","#64B161"],
            barPercentage:.5
        },
        ]
    }
    const optionsPart = {
        responsive:true,
        plugins:{
        legend:{
            display:false
        }
        },
        scales:{
            y:{
                min:0,
                max:10
            }
        }
    }

    return(
        <div className='gold-achievements container'>
            <div className='gold-achievements-header'>
                <div className='gold-achievements-average'>
                    <h3 className='gold-achievements-average-degree'>متوسط المعدل: <span>8/10</span></h3>
                    <h3 className='gold-achievements-rate'>ممتاز</h3>
                </div>
                <div className='gold-achievements-images'>
                    <img src={image1} alt="load"/>
                    <img src={image2} alt="load"/>
                </div>
            </div>
            <div className='gold-achievements-mainchart'>
                <Bar datasets data={data} options={options} height="219px"/>
            </div>
            <div className='gold-achievements-charts'>
                <GoldChart data={dataPart} options={optionsPart}/>
                <GoldChart data={dataPart} options={optionsPart}/>
                <GoldChart data={dataPart} options={optionsPart}/>
                <GoldChart data={dataPart} options={optionsPart}/>
                <GoldChart data={dataPart} options={optionsPart}/>
                <GoldChart data={dataPart} options={optionsPart}/>
            </div>
        </div>
    )
}


