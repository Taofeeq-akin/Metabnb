import React from "react";
import ReactDOM  from "react-dom";
import walletFrame from "../../Assets/Frame 37.png";
import classes from "./WallectConnet.module.css";

const WalletConnect = (props) => {
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onRemove} />;
  };

  const ModalOverlay = () => {
    return (
      <img
        src={walletFrame}
        alt="Frame showing wallet to connect"
        className={classes.modal}
        onClick={props.onRemove}
      />
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onRemove} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modalOverly-root")
      )}
    </>
  );
};

export default WalletConnect;
