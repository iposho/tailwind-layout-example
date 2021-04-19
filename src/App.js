import React from 'react';

import Layout from './components/layout/Layout';
import appConfig from './config/appConfig';

class App extends React.Component {
  componentDidMount() {
    document.title = appConfig.name || 'React App';
  }

  render() {
    return (
      <Layout {...appConfig} />
    );
  }
}

export default App;
