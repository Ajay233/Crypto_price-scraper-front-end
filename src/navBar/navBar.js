import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DropDown from './dropDown'

import { showDropDown, hideDropDown, logOut } from './actions'
import history from '../history'

import '../stylesheets/navbar.css'

class NavBar extends React.Component {

  logUserOut = () => {
    this.props.logOut();
    history.push("/")
  }

  toggleDropDown = () => {
    const { showDropDown } = this.props.navBarState;
    showDropDown ? this.hide() : this.show();
  }

  show = () => {
    this.props.showDropDown()
    document.addEventListener('click', this.toggleDropDown)
  }

  hide = () => {
    this.props.hideDropDown()
    document.removeEventListener('click', this.toggleDropDown)
  }

  renderDropDown = () => {
    const { showDropDown } = this.props.navBarState;
    return showDropDown ? <DropDown logUserOut={this.logUserOut} /> : null;
  }

  render(){
    return(
      <React.Fragment>
      <div className="navBar">
        <Link to="/" className="navLink home"><i className="fas fa-home"></i> Home</Link>
        <Link className="navLink menu" onClick={this.toggleDropDown}><i className="fas fa-bars"></i> Menu</Link>
      </div>
      {this.renderDropDown()}
      </React.Fragment>
    );
  }
}

// Once login is extabished, the userData state needs to be mapped to props
export const mapStateToProps = (state) => {
  return {
    navBarState: state.navBarState
  }
}

export default connect(mapStateToProps, {showDropDown, hideDropDown, logOut })(NavBar)
