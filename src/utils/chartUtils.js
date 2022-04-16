export const chartUtil = {
  setLineColor: (currentPrice, previousPrice) => {
    if(currentPrice === previousPrice){
      return 'rgba(51, 122, 183, 1)'
    } else if(currentPrice > previousPrice){
      return 'rgba(92, 184, 92, 1)'
    } else {
      return 'rgba(220, 53, 69, 1)'
    }
  }
}
