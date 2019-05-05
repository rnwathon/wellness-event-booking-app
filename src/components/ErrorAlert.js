import React from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'semantic-ui-react';
import {hideErrorAlert} from './../stores/actions/modalAction';

function ErrorAlert({message, isError, hideErrorAlert}) {
  return (
    <Modal open={isError} size="tiny" centered={false}>
      <Modal.Content>{message}</Modal.Content>
      <Modal.Actions><Button onClick={() => hideErrorAlert()}>Close</Button></Modal.Actions>
    </Modal>
  )
}

const mapStateToProps = store => {
  return{
    isError: store.modalReducer.isError
  }
}

export default connect(mapStateToProps, {hideErrorAlert})(ErrorAlert);
