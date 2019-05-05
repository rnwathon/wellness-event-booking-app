import React, { Component } from 'react';
import {Card, Form, Button, Dimmer, Loader} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {login} from './../stores/actions/loginAction';
import Alert from './Alert';

class Login extends Component {
  
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    const {isFetching} = this.props
    return (
      <div className="login">

        <Alert message={this.props.message} />
        
        <Dimmer active={isFetching && true}>
          <Loader />
        </Dimmer>

        <Card>
          <Card.Content className="login__content">
            <Card.Header className="login__header">Login</Card.Header>
            <Card.Meta className="login__meta">Please log in to your account</Card.Meta>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label> E-mail </label>
                <input 
                  name="email"
                  type="email" 
                  placeholder="john@mail.com" 
                  pattern="^(?!\s*$).+"
                  required 
                  onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <label> Password </label>
                <input 
                  name="password"
                  type="password" 
                  placeholder="*****" 
                  pattern="^(?!\s*$).+"
                  required 
                  onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <Button type="submit" fluid color="blue">Submit</Button>
              </Form.Field>
            </Form>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    isFetching: store.loginReducer.isFetching,
    message: store.loginReducer.message
  }
}

export default connect(mapStateToProps, {login})(Login);