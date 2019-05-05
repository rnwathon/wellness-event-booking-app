import React from 'react';
import {Icon} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from './../stores/actions/loginAction';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Wellness Event</h1>
      </div>
      <div className="sidebar__menus">
        <ul>
          <li><NavLink exact to="/"> <Icon name="dashboard" /> Dashboard </NavLink></li>
        </ul>
      </div>
      <div className="sidebar__footer">
        <ul>
          <li><NavLink to="/logout" onClick={() => props.logout()}> <Icon name="sign-out"/> Log Out </NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default connect(null, {logout})(Sidebar);
