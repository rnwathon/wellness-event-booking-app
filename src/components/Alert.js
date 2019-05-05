import React from 'react';
import {connect} from 'react-redux';
import {Modal, Button} from 'semantic-ui-react';
import {hideAlert} from '../stores/actions/modalAction';

function Alert({message, isOpen, hideAlert}) {
  return (
    <Modal open={isOpen} size="tiny" centered={false}>
      <Modal.Content>{message}</Modal.Content>
      <Modal.Actions><Button onClick={() => hideAlert()}>Close</Button></Modal.Actions>
    </Modal>
  )
}

const mapStateToProps = store => {
  return{
    isOpen: store.modalReducer.isOpen
  }
}

export default connect(mapStateToProps, {hideAlert})(Alert);
