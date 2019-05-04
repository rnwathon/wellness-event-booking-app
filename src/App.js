import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Helmet>
          <title>Wellness Event App</title>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Helmet>
  
        Hello World!
      </div>
    );
  }
}

export default App;
