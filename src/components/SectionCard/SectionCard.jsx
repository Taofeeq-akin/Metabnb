import classes from "./SectionCard.module.css";
import cards from "../../Assets/frame.png";

const SectionCard = () => {
  return (
    <section className={classes.section_card}>
      <div>
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers get amazing
          gift cards which are trated as NFTs. These NFTs gives our customer
          access to loads of our exclusive services
        </p>
        <button>Learn more</button>
      </div>
      <img src={cards} alt="card 1 img" className={classes.card_frame}/>
    </section>
  );
};

export default SectionCard;
