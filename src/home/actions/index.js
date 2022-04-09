import { getUsingParams } from '../../axios/requests'
import { setNotification } from '../../notification/actions'

export const fetchCurrencyList = (dexName, dexUrl) => {
  return (dispatch) => {
    return getUsingParams("getCurrencyList", { dexUrl: dexUrl }).then((response) => {
      dispatch(setDex({name: dexName, url: dexUrl}))
      dispatch(setCurrencyList(response.data))
    }).catch((error) => {
      console.log(error)
      dispatch(setNotification("Something went wrong, unable to fetch currencies", "error", true))
    })
  }
}

// Will need to pass in the URL and this will also need to be updated in the server endpoint
export const fetchPrices = (currency, dexUrl) => {
  const params = {
    currency: currency,
    dexUrl: dexUrl
  }
  return (dispatch) => {
    return getUsingParams('getPrices', params).then((response) => {
      dispatch(setCurrency(currency))
      dispatch(setPrices(response.data))
    }).catch((err) => {
      console.log(err)
      dispatch(setNotification("Something went wrong, unable to get prices", "error", true))
    })
  }
}


export const setDex = (dex) => {
  return {
    type: "SET_DEX",
    payload: dex
  }
}

export const setCurrency = (currency) => {
  return {
    type: "SET_CURRENCY",
    payload: currency
  }
}

export const setCurrencyList = (currencyList) => {
  return {
    type: "SET_CURRENCY_LIST",
    payload: currencyList
  }
}

export const setPrices = (prices) => {
  return {
    type: "SET_PRICES",
    payload: prices
  }
}

export const setIntervalId = (id) => {
  return {
    type: "SET_INT_ID",
    payload: id
  }
}
