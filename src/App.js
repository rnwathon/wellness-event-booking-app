import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import LoginRoute from './routes/LoginRoute';
import CompanyRoute from './routes/CompanyRoute';
import VendorRoute from './routes/VendorRoute';
import {connect} from 'react-redux';
import {checkLogin} from './stores/actions/loginAction';

class App extends Component {
  componentDidMount() {
    this.props.checkLogin()
  }
  render(){

    const {isLogin, role} = this.props;

    return (
      <div className="App">
        <Helmet>
          <title>Wellness Event App</title>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Helmet>
  
        {
          !isLogin ? <LoginRoute /> 
          : role === 'vendor' ? <VendorRoute />
          : role === 'company' ? <CompanyRoute />
          : null
        }
        

      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    isLogin: store.loginReducer.isLogin,
    name: store.loginReducer.name,
    role: store.loginReducer.role
  }
}

export default connect(mapStateToProps, {checkLogin})(App);
