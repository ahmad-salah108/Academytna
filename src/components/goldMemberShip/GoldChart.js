import {
    Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
    import { Bar } from 'react-chartjs-2';
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
export default function GoldChart({data,options})
{
    return(
        <div className='gold-achievements-chart'>
            <div className='gold-achievements-chart-wrapper'>
                <Bar datasets data={data} options={options} height="219px"/>
            </div>
            <h3 className='gold-achievements-chart-title'>اللغة العربية </h3>
        </div>
    )
}
