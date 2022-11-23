import classes from './SectionCard.module.css'
import card1 from "../../Assets/image 7.png" 
import card2 from "../../Assets/image 8.png" 
import card3 from "../../Assets/image 9.png" 

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
      <div>
      <img src={card1} alt="card 1 img " />
      <img src={card2} alt="caerd 2 img" />
      <img src={card3} alt="card 3 img" />
      </div>
    </section>
  );
};

export default SectionCard;
