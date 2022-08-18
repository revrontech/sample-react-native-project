import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import RootView from "./src"

const App = () => {
  return (
    <Provider store={store}>
      <RootView />
    </Provider>
  )
}

export default App