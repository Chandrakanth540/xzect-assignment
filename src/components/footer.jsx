import {
  IndustriesList,
  ResourceList,
  ServiceList,
  Socialmedia,
} from '../assets/data/techservice';
import '../footer.css';
const Footer = () => {
  return (
    <>
      <div className="footer-main-wrap">
        <div className="footer-div">
          <div className="footer-div-1">
            <div>Xzect Labs Pvt. Ltd.</div>
            <div>
              <div>
                Xzect provides a diverse array of services that enable both
                businesses and individuals to bring their vision to life . Our
                specialties include software development, website design and
                SEO, cloud services, robotics and automation, 3D printing and
                prototyping, data science and analytics, AI and machine
                learning, IOT, AR and VR, blockchain, and other tech-related
                services. Our team of experienced professionals is available to
                assist with the design and development of new products,
                exploration of robotics and automation possibilities, or any
                other requirements.
              </div>
              <div>
                Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002
              </div>
              <div>CIN: U72200DL2022PTC408714</div>
              <div>GST: 07AAACX4373J1Z2</div>
            </div>
          </div>
          {/* <div className="three-divs"> */}
          <div className="footer-div-2">
            <div>Services</div>
            <div>
              {ServiceList.map((service) => {
                return <ServiceComponent service={service} />;
              })}
            </div>
          </div>
          <div className="footer-div-3">
            <div>Industries</div>
            <div>
              {IndustriesList.map((industry) => {
                return <IndustriesComponent industry={industry} />;
              })}
            </div>
          </div>
          <div className="footer-div-4">
            <div>Resources</div>
            <div>
              {ResourceList.map((resource) => {
                return <ResourcesComponent resource={resource} />;
              })}
            </div>
          </div>
        </div>
        <div className="socialmedia-all-divs">
          {Socialmedia.map((media) => {
            return <SocialMediaComponent media={media} />;
          })}
        </div>
      </div>
      <div className="licence">
        © 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.
      </div>
    </>
  );
};
const ServiceComponent = ({ service }) => (
  <div className="blue-color">{service}</div>
);
const IndustriesComponent = ({ industry }) => (
  <div className="blue-color">{industry}</div>
);
const ResourcesComponent = ({ resource }) => (
  <div className="blue-color">{resource}</div>
);
const SocialMediaComponent = ({ media }) => (
  <div className="socialmedia-div">
    <img src={media} alt="" className="socialmedia-img" />
  </div>
);
export default Footer;
