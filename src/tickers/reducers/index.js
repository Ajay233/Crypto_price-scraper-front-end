import { tickers } from '../factory/tickerFactory'

export const tickerReducer = (state=tickers, action) => {
  switch (action.type) {
    case "SET_TICKERS": return {...state, tickers: action.payload};
    case "DELETE_TICKER": return {...state, tickers: state.tickers.filter(e => e.id !== action.payload)};
    default: return state;
  }
}
