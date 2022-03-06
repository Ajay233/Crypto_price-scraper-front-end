import React from 'react'
import PriceChart from './chart/priceChart'
import { getUsingParams } from './axios/requests'

class Home extends React.Component {
  componentDidMount(){
      getUsingParams('getPrices', "tTEST").then((resp) => {
        this.setState({ prices: resp.data })
      }).catch((err) => {
        console.log(err)
      })
  }

  state = {
    prices: []
  }

  render(){
    return(
      <div>
        Welcome
        {console.log(this.state.prices)}
        <PriceChart currency={'MIN'} priceData={this.state.prices} />
      </div>
    );
  }
}

export default Home
