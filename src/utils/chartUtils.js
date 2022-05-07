export const chartUtil = {
  setLineColor: (currentPrice, previousPrice) => {
    if(currentPrice === previousPrice){
      return 'rgba(51, 122, 183, 1)'
    } else if(currentPrice > previousPrice){
      return 'rgba(92, 184, 92, 1)'
    } else {
      return 'rgba(220, 53, 69, 1)'
    }
  },
  setMinPriceRange: (chartRange, priceListLength) => {
    switch (chartRange) {
      case "15m": return 6;
      case "1h": return 21;
      case "4h": return 121;
      case "Day": return 521;
      case "Week": return 3361;
      case "All": return priceListLength;
      default: return priceListLength;
    }
  }
}
