import React from 'react'
import Ticker from './ticker'
import { get } from '../axios/requests'

class Tickers extends React.Component {

  state = {
    activeTickers: []
  }

  componentDidMount(){
    this.getActiveTickers()
  }

  getActiveTickers = () => {
    console.log("Getting tickers")
    get('getTickersV2').then((response) => {
      console.log(response.data)
      let data = response.data
      this.setState({ activeTickers: data })
    });
  }

  renderHeadings = () => {
    return(
      <div className="tickerHeadings">
        <div className="tickerPrice tableHeading">Currency being watched</div>
      </div>
    );
  }

  renderTickers = () => {
    let tickers = this.state.activeTickers.map((ticker, i) => {
      return <Ticker key={i} currency={ticker} getActiveTickers={this.getActiveTickers}/>
    })
    console.log(tickers)
    return tickers
  }

  render(){
    return(
      <div>
        <h1>Active tickers</h1>
        {this.state.activeTickers.length > 0 ? this.renderHeadings() : null}
        <div>{this.state.activeTickers.length > 0 ? this.renderTickers() : "No don't currently have any active tickers"}</div>
      </div>
    );
  }
}

export default Tickers
