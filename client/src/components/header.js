
import React from "react";
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import LoginModal from "./loginModal"
import "./style.css"

export default function Header() {
    const [open, setOpen] = React.useState(false);


    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
      <Toolbar className="toolBar">
        <Typography id="header" variant="h6">
          Welcome to the Image Database!
        </Typography>
        {/* onClick={handleOpen} */}
        <button onClick={handleOpen}>Sign In</button>
      </Toolbar>
      <LoginModal open={open} handleClose={handleClose} />
    </>
  );
}