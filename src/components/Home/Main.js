import Firstslider from "../Menhome/Firstslider";
import Company from "../Menhome/Company";
import Safe from "../Menhome/Safe";
import Video from "../Menhome/Video";
import What from "../Menhome/What";
import Testimonials from "../Menhome/Testimonials";
import Counter from "../Menhome/Counter";
import CustomBanner from "../Menhome/CustomBanner";

const Main = () => {

  return (
    <>
    <section className="desktop-only">
      <Firstslider/>
      </section>
      <section className="mobile-only">
      <CustomBanner />
      </section>
      <Company/>
      <Safe/>
      <Video/>
      <What/>
      <Testimonials/>
      <Counter/>
    </>
  );
};


export default Main;
