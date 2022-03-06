import React from 'react'
import PriceChart from './chart/priceChart'

class Home extends React.Component {

  getData = () => {
    const testData = [
      {
        id: 1,
        price: "0.352836",
        currency: "MIN",
        created: "2022-03-04 23:02:33"
      },
      {
        id: 2,
        price: "0.284749",
        currency: "MIN",
        created: "2022-03-04 24:02:33"
      },
      {
        id: 3,
        price: "0.463937",
        currency: "MIN",
        created: "2022-03-04 25:02:33"
      },
      {
        id: 4,
        price: "0.928462",
        currency: "MIN",
        created: "2022-03-04 26:02:33"
      }
    ]
    return testData
  }

  render(){
    return(
      <div>
        Welcome
        <PriceChart currency={'MIN'} priceData={this.getData()} />
      </div>
    );
  }
}

export default Home
