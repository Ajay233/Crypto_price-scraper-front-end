import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceChart = (props) => {

  const options = {
    responsive: true,
    plugins: {
      legend:{
        position: 'top',
      },
      title:{
        display: true,
        text: `${props.currency} Token Price`
      }
    }
  }
  const labels = props.priceData.map(entry => entry.created)
  const prices = props.priceData.map(entry => parseFloat(entry.price))

  const data = {
    labels,
    datasets: [
      {
        pointRadius: 0,
        label: `${props.currency}`,
        data: prices,
        borderColor: '',
        backgroundColor: '',
      }
    ]
  }

  return(
    <div className="chartContainer">
    <div className="chartArea">
      <Line data={data} options={options}/>
    </div>
    </div>
  )
}

export default PriceChart
