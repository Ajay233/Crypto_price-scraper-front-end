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
import RangeSelect from './rangeSelect'
import { chartUtil } from '../utils/chartUtils'

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

  const labels = props.priceData.map(entry => entry.created)
  const prices = props.priceData.map(entry => parseFloat(entry.price))
  const priceMovementColour = chartUtil.setLineColor(prices[prices.length - 1], prices[prices.length - 2])
  const range = chartUtil.setMinPriceRange(props.range, prices.length)

  const options = {
    responsive: true,
    scales: {
      xAxes: {
        min: prices.length - range,
        max: prices.length - 1,
        grid: {
          color: 'rgba(255, 25, 255, 0.5)'
        },
        ticks: {
          color: 'white'
        }
      },
      yAxes: {
        grid: {
          color: 'rgba(255, 25, 255, 0.5)'
        },
        ticks: {
          color: 'white'
        }
      }
    },
    plugins: {
      legend:{
        position: 'top',
        labels: {
          color: 'white'
        }
      },
      title:{
        display: true,
        text: `${props.currency} Token Price`,
        color: 'white'
      },
    }
  }

  const data = {
    labels,
    datasets: [
      {
        pointRadius: 0,
        label: `${props.currency}`,
        data: prices,
        borderColor: priceMovementColour,
        backgroundColor: priceMovementColour,
        color: 'white'
      }
    ]
  }

  return(
    <div className="chartContainer">
    <div className="chartArea">
      <RangeSelect range={props.range} setRange={props.setRange} />
      <Line data={data} options={options}/>
    </div>
    </div>
  )
}

export default PriceChart
