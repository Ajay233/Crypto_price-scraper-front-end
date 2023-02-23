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
      case "15m": return 5;
      case "30m": return 10;
      case "45m": return 15;
      case "1h": return 20;
      case "2h": return 40;
      case "3h": return 60;
      case "4h": return 80;
      case "5h": return 100;
      case "6h": return 120;
      case "7h": return 140;
      case "8h": return 160;
      case "9h": return 180;
      case "10h": return 200;
      case "11h": return 220;
      case "12h": return 240;
      case "13h": return 260;
      case "14h": return 280;
      case "15h": return 300;
      case "16h": return 320;
      case "17h": return 340;
      case "18h": return 360;
      case "19h": return 380;
      case "20h": return 400;
      case "21h": return 420;
      case "22h": return 440;
      case "23h": return 460;
      case "24h": return 480;
      case "2 Days": return 960;
      case "3 Days": return 1440;
      case "4 Days": return 1920;
      case "5 Days": return 2400;
      case "6 Days": return 2880;
      case "7 Days": return 3360;
      case "8 Days": return 3840;
      case "9 Days": return 4320;
      case "10 Days": return 4800;
      case "11 Days": return 5280;
      case "12 Days": return 5760;
      case "13 Days": return 6240;
      case "14 Days": return 6720;
      case "Month": return 14880;
      case "Year": return 175200;
      case "All": return priceListLength;
      default: return priceListLength;
    }
  }
}
