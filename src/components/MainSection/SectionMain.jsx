import classes from "./SectionMain.module.css";
import Adventure from "./Adventure";
import image1 from "../../Assets/Frame 151-4.png";
import image2 from "../../Assets/Frame 151-5.png";
import image3 from "../../Assets/Frame 151-6.png";
import image4 from "../../Assets/Frame 151-7.png";
import image5 from "../../Assets/Frame 151-8.png";
import image6 from "../../Assets/Frame 151-9.png";
import image7 from "../../Assets/Frame 151-10.png";
import image8 from "../../Assets/Frame 151-11.png";
import image9 from "../../Assets/Frame 151-12.png";
import image10 from "../../Assets/Frame 151-13.png";
import image11 from "../../Assets/Frame 151-14.png";
import image12 from "../../Assets/Frame 151-15.png";

const SectionMain = (props) => {
  return (
    <section className={classes.section_main}>
      <h2>Insperation for your next adventure</h2>
      <div className={classes.adventure_container}>
        <Adventure adventureImage={image1} />
        <Adventure adventureImage={image2} />
        <Adventure adventureImage={image3} />
        <Adventure adventureImage={image4} />
        <Adventure adventureImage={image5} />
        <Adventure adventureImage={image6} />
        <Adventure adventureImage={image7} />
        <Adventure adventureImage={image8} />
        {/* <Adventure adventureImage={image9} />
        <Adventure adventureImage={image10} />
        <Adventure adventureImage={image11} />
        <Adventure adventureImage={image12} /> */}
      </div>
    </section>
  );
};

export default SectionMain;
