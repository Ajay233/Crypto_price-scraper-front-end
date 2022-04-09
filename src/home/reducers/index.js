import { home } from '../factory/homeFactory'

export const homeReducer = (state=home, action) => {
  switch (action.type) {
    case "SET_PRICES": return { ...state, prices: action.payload };
    case "SET_CURRENCY": return { ...state, currency: action.payload };
    case "SET_DEX": return { ...state, dex: action.payload };
    case "SET_CURRENCY_LIST": return { ...state, currencyList: action.payload };
    case "SET_INT_ID": return { ...state, intervalId: action.payload }
    default: return state;
  }
}
