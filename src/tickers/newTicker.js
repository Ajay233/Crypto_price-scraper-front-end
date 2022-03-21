import React from 'react'
import { connect } from 'react-redux'
import { setNotification } from '../notification/actions'
import { post } from '../axios/requests'
import Notification from '../notification/notification'

class NewTicker extends React.Component {

  state = {
    url: "",
    swapCurrency: "",
    priceCurrency: "",
    frequency: 3,
    submitting: false
  };

  startTicker = () => {
    const data = {
      url: this.state.url,
      swapCurrency: this.state.swapCurrency,
      priceCurrency: this.state.priceCurrency,
      frequency: this.state.frequency
    }
    console.log(data)
    post("startTickerV2", data).then((resp) => {
      console.log(resp)
      this.setNotificationMsg(`${resp.data}`, "success")
    }).catch((err) => {
      console.log(err)
      this.setNotificationMsg(`${err}`, "warning")
    })
  }

  setUrl = (e) => {
    this.setState({ url: e.target.value })
  }

  setSwapCurrency = (e) => {
    this.setState({ swapCurrency: e.target.value })
  }

  setPriceCurrency = (e) => {
    this.setState({ priceCurrency: e.target.value })
  }

  setfrequency = (e) => {
    this.setState({ frequency: e.target.value })
  }

  setNotificationMsg = (msg, type) => {
    this.props.setNotification(msg, type, true)
  }

  render(){
    return(
      <div>
        <Notification />
        <h1>Start a new ticker</h1>
        <div className="tickerForm">
          <div className="formOption">
            <div className="selectHeading">Select which DEX to watch</div>
            <div>
              <select onChange={(e) => this.setUrl(e)}>
                <option selected disabled>Select DEX</option>
                <option value="https://app.minswap.org/">Minswap</option>
                <option value="https://exchange.sundaeswap.finance/#/">Sundaeswap</option>
                <option disabled>Maladex - coming soon</option>
                <option disabled>Wingriders - coming soon</option>
                <option disabled>AADANA - coming soon</option>
              </select>
            </div>
          </div>
          <div className="formOption">
            <div className="selectHeading">Swap pair to watch e.g. ADA/MIN</div>
            <div>
              <select onChange={(e) => this.setSwapCurrency(e)}>
                <option selected disabled>Select swap currency pairing</option>
                <option value="ADA - MIN">ADA - MIN</option>
                <option value="ADA - MINt">ADA - MINt</option>
                <option value="ADA - MELD">ADA - MELD</option>
                <option value="ADA - SUNDAE">ADA - SUNDAE</option>
                <option value="ADA - DANA">ADA - DANA</option>
                <option value="ADA - WMT">ADA - WMT</option>
                <option value="ADA - LQ">ADA - LQ</option>
                <option value="ADA - VYFI">ADA - VYFI</option>
                <option value="ADA - MILK">ADA - MILK</option>
                <option value="ADA - cNETA">ADA - cNETA</option>
                <option value="ADA - PAVIA">ADA - PAVIA</option>
              </select>
            </div>
          </div>
          <div className="formOption">
            <div className="selectHeading">Price currency to be saved</div>
            <div>
              <select onChange={(e) => this.setPriceCurrency(e)}>
                <option selected disabled>Select price currency</option>
                <option value="MIN">MIN</option>
                <option value="MINt">MINt</option>
                <option value="MELD">MELD</option>
                <option value="SUNDAE">SUNDAE</option>
                <option value="DANA">DANA</option>
                <option value="WMT">WMT</option>
                <option value="LQ">LQ</option>
                <option value="VYFI">VYFI</option>
                <option value="MILK">MILK</option>
                <option value="cNETA">cNETA</option>
                <option value="PAVIA">PAVIA</option>
              </select>
            </div>
          </div>
          <div className="formOption">
            <div className="selectHeading">Frequency - how often the ticker will fetch the price e.g. every 3 minutes</div>
            <div>
              <select onChange={(e) => this.setfrequency(e)}>
                <option selected disabled>Select frequency in minutes</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          <button
            disabled={this.state.submitting}
            className="button-blue"
            onClick={() => this.startTicker()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState
  }
}

export default connect(mapStateToProps, { setNotification })(NewTicker)
