import classes from "./Header.module.css";
import NavLogo from "../../Assets/Group.png"

const HeaderNav = () => {
  return (
    <header className={classes.header}>
      <img src={NavLogo} alt="logo" className={classes.nav_logo} />
      <nav className={classes.main_nav}>
        <ul className={classes.main_nav_li}>
          <li className={classes.main_nav_link}>
            <a href="#">Home</a>
          </li>
          <li className={classes.main_nav_link}>
            <a href="#">Place to stay</a>
          </li>
          <li className={classes.main_nav_link}>
            <a href="#">NFTs</a>
          </li>
          <li className={classes.main_nav_link}>
            <a href="#">Community</a>
          </li>
        </ul>
      </nav>
      <button className={classes.connect_wallet}>Connet wallet</button>
    </header>
  );
};

export default HeaderNav;
