import React from 'react';
import { connect } from 'react-redux';

import ErrorBoundary from './components/composed/ErrorBoundary';
// import RandomCat from './components/composed/RandomCat';
// import RandomColor from './components/composed/RandomColor';
// import RandomText from './components/composed/RandomText';
import Layout from './components/layout/Layout';
import TailwindExample from './components/layout/TailwindExample';
import { getAppInfo, initApp } from './store/actions';

class App extends React.Component {
  async componentDidMount() {
    const {
      initAppAction,
      getAppInfoAction,
    } = this.props;

    initAppAction();
    getAppInfoAction();

    document.title = 'Tailwind CSS App';
  }

  render() {
    const { appInfo } = this.props;

    return (
      <ErrorBoundary>
        {
          appInfo ? (
            <Layout {...appInfo}>
              <TailwindExample />
              {/* <RandomColor /> */}
              {/* <RandomCat /> */}
              {/* <RandomText /> */}
            </Layout>
          ) : ''
        }
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.mainReducer,
});

const mapDispatchToProps = () => (dispatch) => ({
  getAppInfoAction: () => dispatch(getAppInfo()),
  initAppAction: () => dispatch(initApp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
