import React, { Component } from 'react';
import {Card, Form, Button} from 'semantic-ui-react';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card>
          <Card.Content className="login__content">
            <Card.Header className="login__header">Login</Card.Header>
            <Card.Meta className="login__meta">Please log in to your account</Card.Meta>
            <Form>
              <Form.Field>
                <label> E-mail </label>
                <input 
                  type="email" 
                  placeholder="john@mail.com" 
                  pattern="^(?!\s*$).+"
                  required />
              </Form.Field>
              <Form.Field>
                <label> Password </label>
                <input 
                  type="password" 
                  placeholder="*****" 
                  pattern="^(?!\s*$).+"
                  required />
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
