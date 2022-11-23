import classes from "./Adventure.module.css";

import advt1 from "../../Assets/Frame 151-4.png";
import stars from "../../Assets/Frame 59528.png";

const Adventure = (props) => {
  return (
    <div className={classes.advt_container}>
      <img src={props.adventureImage} alt="Aventure 1 logo" />
      <div>
        <p>Desert king</p>
        <p className={classes.price}>1MBT per night</p>
      </div>
      <div>
        <p>2345km away</p>
        <p>Available for 2weeks stay</p>
      </div>
      <img src={stars} alt="" />
    </div>
  );
};

export default Adventure;
