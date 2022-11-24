import React from "react";
import walletFrame from "../../Assets/Frame 37.png";
import classes from "./WallectConnet.module.css";

const WalletConnect = (props) => {
  //   const Backdrop = () => {
  //     return <div className={classes.backdrop} ></div>;
  //   };
  {
    /* {ReactDOM.createPortal(
    <Backdrop onClear={props.onClear} />,
    document.getElementById("backdrop-root")
  )} */
  }

  return (
    <>
      <div className={classes.backdrop} onClick={props.onRemove} />
      <img
        src={walletFrame}
        alt="Frame showing wallet to connect"
        className={classes.modal}
        onClick={props.onRemove}
      />
    </>
  );
};

export default WalletConnect;
