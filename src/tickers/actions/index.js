import { get, post } from '../../axios/requests.js'
import { setNotification } from '../../notification/actions'

export const getTickers = () => {
  return (dispatch) => {
    return get('getTickersV2').then((response) => {
      dispatch(setTickers(response.data))
    }).catch((error) => {
      console.log(error)
      dispatch(setNotification("Unable to fetch list of active tickers", "error", true))
    })
  }
}

const setTickers = (tickers) => {
  return {
    type: "SET_TICKERS",
    payload: tickers
  }
}

export const stopTicker = (currency, id) => {
  return (dispatch) => {
    return post("stopTicker", { currency: currency, id: id }).then(() => {
      dispatch(deleteTicker(id))
      dispatch(setNotification("Ticker stopped", "success", true))
    }).catch((error) => {
      console.log(error)
      dispatch(setNotification("Something went wrong", "error", true))
    })
  }
}

const deleteTicker = (id) => {
  return {
    type: "DELETE_TICKER",
    payload: id
  }
}
