import React from 'react';
import {connect} from 'react-redux';
import Alert from './Alert';

function Logout(props) {
  setTimeout(() => {
    props.history.push("/")
  }, 2000);

  return (
    <Alert message={props.message} />
  )
}

const mapStateToProps = store => {
  return{
    message: store.loginReducer.message
  }
}

export default connect(mapStateToProps)(Logout);
