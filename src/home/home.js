import React from 'react'
import { connect } from 'react-redux'
import PriceChart from '../chart/priceChart'
import Select from '../components/formComponents/select'
import PriceDisplay from '../components/priceDisplay/priceDisplay'
import { fetchCurrencyList, fetchPrices, setIntervalId } from './actions'
import { repeatFunc } from '../utils/homeUtils'
import { dexList } from '../lists'

class Home extends React.Component {

  state = {
    chartRange: "All"
  }

  setRange = (range) => {
    this.setState({ chartRange: range })
  }

  stopTicker = () => {
    const { intervalId } = this.props.homeState
    if(intervalId !== null){
      clearInterval(intervalId)
    }
  }

  startTicker = () => {
    const boundfetchPrices = this.fetchPrices.bind(this)
    const id = repeatFunc(boundfetchPrices, 60000)
    this.props.setIntervalId(id);
  }

  fetchPrices = () => {
    const { currency, dex } = this.props.homeState
    this.props.fetchPrices(currency, dex.url)
  }

  fetchPricesAndWatch = (e, dex) => {
    this.stopTicker()
    this.props.fetchPrices(e.target.value, dex.url)
    this.startTicker()
  }

  renderCurrencySelect = () => {
    const { currencyList, dex } = this.props.homeState
    if(currencyList.length > 0){
      return(
        <Select
          type="inline"
          defaultText={'Select a Currency'}
          optionList={currencyList}
          onChangeFunc={(e) => this.fetchPricesAndWatch(e, dex)}
        />
      )
    }
  }

  render(){
    const { prices, currency } = this.props.homeState
    return(
      <div>
        <img id="appTitle" src={require("../static/DexHeader.png")} alt="Cardano Dex Watcher"></img>
        <div className="chartSelect">
          <Select
            type="inline"
            defaultText={'Select a DEX'}
            optionList={dexList}
            onChangeFunc={(e) => this.props.fetchCurrencyList(e.target.value, dexList[e.target.value].url)}
          />
          {this.renderCurrencySelect()}
        </div>
        <PriceDisplay currency={currency} prices={prices} />
        <PriceChart currency={currency} priceData={prices} range={this.state.chartRange} setRange={this.setRange}/>
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
