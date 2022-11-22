import classes from "./Sectionfeature.module.css";
import logo1 from "../../Assets/Group 59536.png";
import logo2 from "../../Assets/Group 4038.png";
import logo3 from "../../Assets/logo.png";

const SectionFeature = () => {
  return (
    <section className={classes.sectionFeature}>
      <div className={classes.feature}>
        <img src={logo1} alt="feature logo one" />
        <p>MBToken</p>
      </div>
      <div className={classes.feature}>
        <img src={logo2} alt="feature logo 2" />
        <p>METAMASK</p>
      </div>
      <div className={classes.feature}>
        <img src={logo3} alt="feature logo 3" />
        <p>Opensea</p>
      </div>
    </section>
  );
};

export default SectionFeature;
