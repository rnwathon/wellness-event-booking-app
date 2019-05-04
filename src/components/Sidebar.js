import React from 'react';
import {Icon} from 'semantic-ui-react';

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Wellness Event</h1>
      </div>
      <div className="sidebar__menus">
        {props.children}
      </div>
      <div className="sidebar__footer">
        <ul>
          <li><a href="#"> <Icon name="sign-out"/> Log Out</a></li>
        </ul>
      </div>
    </div>
  )
}
