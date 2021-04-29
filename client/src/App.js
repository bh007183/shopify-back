import "./App.css";
import Main from "./pages";
import { Provider } from "react-redux";
import configureStore from "./store/storeConfigure";
import Header from "./components/header";
import React from "react";


function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
