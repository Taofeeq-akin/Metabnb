import "./App.css";
import MainHeader from "./components/Header/MainHeader";
import SectionFeature from "./components/SectionFeature/SectionFeature";
import SectionMain from "./components/MainSection/SectionMain";
import SectionCard from "./components/SectionCard/SectionCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <MainHeader />
      <SectionFeature />
      <SectionMain />
      <SectionCard />
      <Footer />
    </div>
  );
}

export default App;
