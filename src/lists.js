export const dexList = {
  Minswap: {
    url: "https://app.minswap.org/",
    logo: "",
    formatPoolPair: (token) => `${token} - ADA`
  },
  SundaeSwap: {
    url: "https://exchange.sundaeswap.finance/#/",
    logo: "",
    formatPoolPair: (token) => `${token}/ADA`
  },
  Wingriders: {
    url: "https://app.wingriders.com/pools",
    logo: "",
    formatPoolPair: (token) => `ADA / ${token}`
  },
  Maladex: {
    url: "Coming soon",
    logo: ""
  },
  Ardana: {
    url: "Coming soon",
    logo: ""
  },
  BashoSwap: {
    url: "Coming soon",
    logo: ""
  }
}

export const ranges = [
  "15m", "30m", "45m", "1h", "2h", "3h", "4h", "5h", "6h",
  "7h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h",
  "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h", "2 Days",
  "3 Days", "4 Days", "5 Days", "6 Days", "7 Days", "8 Days", "9 Days",
  "10 Days", "11 Days", "12 Days", "13 Days", "14 Days", "Month", "Year", "All"
]
