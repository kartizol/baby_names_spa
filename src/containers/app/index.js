import React from "react"
import PropTypes from "prop-types"
import {Router} from "react-router-dom"
import {Provider} from "react-redux"
import {ActionCableProvider} from "react-actioncable-provider"
import {PersistGate} from "redux-persist/integration/react"
import {Spin} from "antd"

import history from "../../history"
import Routes from "./../../routes"
import RootContainer from "./../root"
import {API_WS_ROOT} from "../../constants"

const App = ({store, storePersistor}) => {
  return (
    <ActionCableProvider url={API_WS_ROOT}>
      <Provider store={store}>
        <PersistGate persistor={storePersistor} loading={<Spin/>}>
          <RootContainer>
            <Router history={history}>
              <Routes/>
            </Router>
          </RootContainer>
        </PersistGate>
      </Provider>
    </ActionCableProvider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
  storePersistor: PropTypes.object.isRequired
};

export default App;