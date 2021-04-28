
import "./App.css";
import Main from "./pages";
import { Provider} from "react-redux";
import configureStore from "./store/storeConfigure";
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import Modal from "@material-ui/core/Modal"
import LoginModal from "./components/loginModal"
import React from "react"


import {loginApi} from "./store/userSlice"

function App() {
  
  const store = configureStore();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <Provider store={store}>
      <Toolbar className="toolBar">
        <Typography id="header" variant="h6">
          Welcome to the Image Database!
        </Typography>

        <button onClick={handleOpen}>Sign In</button>
      </Toolbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <LoginModal/>
      </Modal>
      <Main />
      
    </Provider>
  );
}

export default App;
