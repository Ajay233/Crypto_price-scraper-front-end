import React from 'react'

const PriceDisplay = (props) => {
  // Will need: prices, currency

  const renderPrice = () => {
    if(props.currency !== null && props.prices.length > 0) {
      return(
        <div>
          <span className="pricePerCurrency">
            {`1 ${props.currency} = ${props.prices[props.prices.length - 1].price} ADA`}
          </span>
          {renderIncreaseOrDecrease()}
        </div>
      )
    }
  }

  const renderIncreaseOrDecrease = () => {
    const lastPrice = props.prices[props.prices.length - 1].price
    const secondToLastPrice = props.prices[props.prices.length - 2].price
    console.log(typeof lastPrice)
    console.log(typeof secondToLastPrice)
    if(lastPrice === secondToLastPrice){
      return <span className="neutral"><i className="fas fa-arrows-alt-h"></i> 0.0000%</span>
    } else if(lastPrice > secondToLastPrice){
      return <span className="increase"><i className="fas fa-arrow-up"></i> {`${calcIncrease(lastPrice, secondToLastPrice)}%`}</span>
    } else {
      return <span className="decrease"><i className="fas fa-arrow-down"></i> {`${calcDecrease(lastPrice, secondToLastPrice)}%`}</span>
    }
  }

  const calcIncrease = (lastPrice, secondToLastPrice) => {
    return Number.parseFloat(((lastPrice - secondToLastPrice) / secondToLastPrice) * 100).toFixed(4)
  }

  const calcDecrease = (lastPrice, secondToLastPrice) => {
    return Number.parseFloat(((secondToLastPrice - lastPrice) / secondToLastPrice) * 100).toFixed(4)
  }

  return(
    <div className="priceSummary">
      {renderPrice()}
    </div>
  );
}

export default PriceDisplay
