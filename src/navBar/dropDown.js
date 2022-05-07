import React from 'react';
import { Link } from 'react-router-dom'

const DropDown = (props) => {

  // Create a render methor for each link
  // Where appicable add a ternary operatory to check permission level

  const renderTestLink1 = () => {
    return <div className="dropDownOption"><Link className="dropDownLink" to="/newTicker">New Ticker</Link><hr/></div>
  }

  const renderTestLink2 = () => {
    return <div className="dropDownOption"><Link className="dropDownLink" to="/tickers">Active Tickers</Link><hr/></div>
  }

  const renderlogOut = () => {
    return <div className="dropDownOption" onClick={props.logUserOut}><button className="dropDownLink button-link-alt"><i className="fas fa-sign-out-alt"></i> Log Out</button><hr/></div>
  }

  // create a methor to render pre-login links i.e. login & create account

  // create a method to render post login links

  const renderTestLinks = () => {
    return(
      <React.Fragment>
        {renderTestLink1()}
        {renderTestLink2()}
        {renderlogOut()}
      </React.Fragment>
    );
  }

  // create a method to check login status and render either of the above methods

  return(
    <div className="dropDown">
      {renderTestLinks()}
    </div>
  );
}

export default DropDown
