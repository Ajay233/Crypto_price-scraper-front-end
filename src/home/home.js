import React from 'react'
import { connect } from 'react-redux'
import PriceChart from '../chart/priceChart'
import Select from '../components/formComponents/select'
import { fetchCurrencyList, fetchPrices, setIntervalId } from './actions'
import { repeatFunc } from '../utils/homeUtils'
import { dexList } from '../lists'

class Home extends React.Component {

  stopTicker = () => {
    const { intervalId } = this.props.homeState
    clearInterval(intervalId)
  }

  startTicker = () => {
    const { currency, dex } = this.props.homeState
    const id = repeatFunc(this.props.fetchPrices(currency, dex.url), 60000)
    this.props.setIntervalId(id);
  }

  renderCurrencySelect = () => {
    const { currencyList, dex } = this.props.homeState
    if(currencyList.length > 0){
      return(
        <Select
          type="inline"
          defaultText={'Select a Currency'}
          optionList={currencyList}
          onChangeFunc={(e) => this.props.fetchPrices(e.target.value, dex.url)}
        />
      )
    }
  }

  render(){
    const { prices, dex, currency } = this.props.homeState
    return(
      <div>
        <h1>Crypto Price Tracker</h1>
        <div className="chartSelect">
          <Select
            type="inline"
            defaultText={'Select a DEX'}
            optionList={dexList}
            onChangeFunc={(e) => this.props.fetchCurrencyList(e.target.value, dexList[e.target.value].url)}
          />
          {this.renderCurrencySelect()}
        </div>
        <PriceChart currency={currency} priceData={prices} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    homeState: state.homeState
  }
}

export default connect(mapStateToProps, { fetchCurrencyList, fetchPrices, setIntervalId })(Home)
