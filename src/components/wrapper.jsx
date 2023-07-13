import Bussiness from './bussiness';
import Consultation from './consultation';
import Footer from './footer';
import Header from './header';
import QuoteCube from './quotecube';
import TechSkills from './techskills';
const Wrapper = () => {
  return (
    <div>
      <Header />
      <QuoteCube />
      <Bussiness />
      <TechSkills />
      <Consultation />
      <Footer />
    </div>
  );
};
export default Wrapper;
