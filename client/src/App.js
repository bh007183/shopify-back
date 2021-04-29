import logo from './logo.svg';
import './App.css';
import Main from "./pages"
import configureStore from "./store/storeConfigure"
import { Provider } from "react-redux";
import Header from "./components/header"

const store = configureStore()

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
    
  );
}

export default App;
