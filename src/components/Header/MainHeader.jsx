import React from "react";
import classes from "./MainHeader.module.css";
import HeaderNav from "./HeaderNav";

import headerImg1 from "../../Assets/Frame 151-5.png";
import headerImg2 from "../../Assets/Frame 151-15.png";
import headerImg3 from "../../Assets/Frame 151-8.png";
import headerImg4 from "../../Assets/Frame 151-9.png";

const MainHeader = () => {
  return (
    <React.Fragment className={classes.header_container}>
      <HeaderNav />
      <div className={classes.main_header}>
        <div className={classes.header_content}>
          <h5 className={classes.heading_primary}>
            Rent a <span  className={classes.purple_col}>Place</span> away from <br></br> <span className={classes.purple_col}>Home</span> in
            the <span className={classes.purple_col}>Metaverse</span>
          </h5>
          <p className={classes.header_text}>
            We provide you to access to luxury and affordable houses in the
            metaverse, get a chance to turn your <br /> imagination to reality at your
            comfort zone
          </p>
          <div className={classes.input_con}>
            <input type="text" placeholder="search for location" required className={classes.search_input} />
            <button className={classes.search_btn}>Search</button>
          </div>
        </div>
        <div className={classes.header_img_container}>
          <div className={classes.headerImg}>
            <img
              className={`${classes.header_img} ${classes.headerImg1}`}
              src={headerImg1}
              alt="header image 1"
            />
            <img
              className={classes.header_img}
              src={headerImg2}
              alt="header image 2"
            />
          </div>
          <div className={classes.headerImg}>
            <img
              className={`${classes.header_img} `}
              src={headerImg3}
              alt="header image 3"
            />
            <img
              className={classes.header_img}
              src={headerImg4}
              alt="header image 4"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
