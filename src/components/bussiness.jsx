import { Services } from '../assets/data/techservice';
import '../secondcomp.css';

const Bussiness = () => {
  return (
    <div className="business-wrap">
      <div className="title-wrap">
        <div className="secondpage-main">
          Customised solutions for All Your Business Needs
        </div>
        <div className="secondpage-under">
          Take Your Business to the Next Level with Our Industry-Leading
          Services
        </div>
      </div>
      <div className="service-wrapper">
        {Services.map((business) => {
          return <BussinessWrap business={business} />;
        })}
      </div>
    </div>
  );
};
const BussinessWrap = ({ business }) => (
  <div className="single-tech-wrap">
    <img src={business.image} alt="" className="tech-image" />
    <div className="techName">{business.techName}</div>
    <div className="get-start">Get Started</div>
  </div>
);
export default Bussiness;
