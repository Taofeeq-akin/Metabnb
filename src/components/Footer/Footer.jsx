import classes from "./Footer.module.css";
import logo from "../../Assets/Footer logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <img src={logo} alt="Footer logo" className={classes.footer_logo} />
        <ul className={`${classes.social_links}`}>
          <li>
            <a href="#" className={classes.footer_social_link}>
              <ion-icon
                className={classes.social_icon}
                name="logo-instagram"
              ></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_social_link}>
              <ion-icon
                className={classes.social_icon}
                name="logo-facebook"
              ></ion-icon>
            </a>
          </li>
          <li>
            <a href="#" className={`${classes.footer_social_link}`}>
              <ion-icon
                className={classes.social_icon}
                name="logo-twitter"
              ></ion-icon>
            </a>
          </li>
        </ul>
        <p className={classes.footer_heading}>&copy; Taofeeq-Akin</p>
      </div>
      <nav className={classes.nav_col}>
        <p className={classes.footer_heading}>Community</p>
        <ul className={classes.footer_nav}>
          <li>
            <a href="#" className={classes.footer_link}>
              NFT
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Tokens
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}></a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Landlords
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Discord
            </a>
          </li>
        </ul>
      </nav>
      <nav className={classes.nav_col}>
        <p className={classes.footer_heading}>Places</p>
        <ul className={classes.footer_nav}>
          <li>
            <a href="#" className={classes.footer_link}>
              Castle
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Forms
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Beach
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Learn more
            </a>
          </li>
        </ul>
      </nav>
      <nav className={classes.nav_col}>
        <p className={classes.footer_heading}>About us</p>
        <ul className={classes.footer_nav}>
          <li>
            <a href="#" className={classes.footer_link}>
              Road map
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Creators
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Career
            </a>
          </li>
          <li>
            <a href="#" className={classes.footer_link}>
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
