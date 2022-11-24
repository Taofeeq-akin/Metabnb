import React from "react";
import walletFrame from '../../Assets/Frame 37.png'
import classes from "./WallectConnet.module.css";

const WalletConnect = () => {
//   const Backdrop = () => {
//     return <div className={classes.backdrop} ></div>;
//   };
  {
    /* {ReactDOM.createPortal(
    <Backdrop onClear={props.onClear} />,
    document.getElementById("backdrop-root")
  )} */
  }

  return <>
  <div className={classes.backdrop} />
  <img src={walletFrame} alt="Frame showing wallet to connect" className={classes.modal} />
  </>;
};

export default WalletConnect;
