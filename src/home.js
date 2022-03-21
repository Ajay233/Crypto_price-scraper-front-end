import React from 'react'
import PriceChart from './chart/priceChart'
import { getUsingParams, post } from './axios/requests'

class Home extends React.Component {
  componentDidMount(){



  }

  state = {
    prices: [],
    intervalId: 0,
    currency: ""
  }

  setCurency = (e) => {
    this.setState({ currency: e.target.value })
    this.fetchPriceData(e.target.value)
  }

  stopTicker = () => {
    clearInterval(this.state.intervalId)
  }

  fetchPriceData = (price) => {
    getUsingParams('getPrices', price).then((resp) => {
      this.setState({ prices: resp.data })
    }).catch((err) => {
      console.log(err)
    })
  }

  render(){
    return(
      <div>
        <h1>Crypto Price Tracker</h1>
        {console.log(this.state.prices)}
        <div className="chartSelect">
        <select onChange={(e) => this.setCurency(e)}>
          <option selected disabled>Select currency</option>
          <option calue="MIN">MIN</option>
          <option calue="MELD">MELD</option>
          <option calue="SUNDAE">SUNDAE</option>
        </select>
        </div>
        <PriceChart currency={this.state.currency} priceData={this.state.prices} />
      </div>
    );
  }
}

export default Home
