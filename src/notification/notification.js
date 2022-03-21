import React from 'react'
import { connect } from 'react-redux'
import { timedFunc } from '../utils/display'
import { unsetNotification } from './actions'

import '../stylesheets/notification.css'

class Notification extends React.Component{

  buildNotification = () => {
    const { message, type } = this.props.notificationState;
    const { unsetNotification } = this.props
    document.documentElement.scrollTop = 0;
    return(
      <div className={`notification ${type}`}>
        {timedFunc(unsetNotification, 2000)}
        {message}
      </div>
    );
  }

  renderNotification = () => {
    const { show } = this.props.notificationState;
    return show ? this.buildNotification() : null;
  }

  render(){
    return(
      <div>
        {this.renderNotification()}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notificationState: state.notificationState
  }
}

export default connect(mapStateToProps, { unsetNotification })(Notification)
