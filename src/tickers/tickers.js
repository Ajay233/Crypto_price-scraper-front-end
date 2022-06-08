import React from 'react'
import Ticker from './ticker'
import Notification from '../notification/notification'
import { connect } from 'react-redux'
import { getTickers, stopTicker } from './actions'

class Tickers extends React.Component {

  componentDidMount(){
    this.props.getTickers();
  }

  getActiveTickers = () => {
    this.props.getTickers();
  }

  renderHeadings = () => {
    return(
      <div className="tickerHeadings">
        <div className="tickerDexUrl tableHeading">DEX Url</div>
        <div className="tickerSwapCurrency tableHeading">Swap currency</div>
        <div className="tickerPriceCurrency tableHeading">Price Currency</div>
        <div className="tickerFrequency tableHeading">Ticker Frequency</div>
        <div className="tickerCreated tableHeading">Created</div>
        <span className="tickerOptions"></span>
      </div>
    );
  }

  renderTickers = () => {
    const { tickers } = this.props.tickerState
    let tickerList = tickers.map((tickerDetails, i) => {
      return <Ticker key={i} ticker={tickerDetails} getActiveTickers={this.getActiveTickers} stopTicker={this.props.stopTicker}/>
    })
    return tickerList
  }

  render(){
    const { tickers } = this.props.tickerState
    return(
      <div>
        <Notification />
        <h1>Active tickers</h1>
        {tickers.length > 0 ? this.renderHeadings() : null}
        <div>{tickers.length > 0 ? this.renderTickers() : "No don't currently have any active tickers"}</div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    tickerState: state.tickerState
  }
}

export default connect(mapStateToProps, { getTickers, stopTicker })(Tickers)
