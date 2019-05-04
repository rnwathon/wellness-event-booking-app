import React from 'react';
import {Icon} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Wellness Event</h1>
      </div>
      <div className="sidebar__menus">
        <ul>
          <li><NavLink exact to="/"> <Icon name="dashboard" /> Dashboard </NavLink></li>
          {/* {
            props.role === 'vendor' &&
              <li><NavLink to="/event"> <Icon name="files" /> Event </NavLink></li>
          } */}
        </ul>
      </div>
      <div className="sidebar__footer">
        <ul>
          <li><a href="/logout"> <Icon name="sign-out"/> Log Out</a></li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    role: store.loginReducer.role
  }
}

export default connect(mapStateToProps)(Sidebar);
