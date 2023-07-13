import { ProgrammingSkills } from '../assets/data/techservice';
import '../techskills.css';
// ProgrammingSkills
const TechSkills = () => {
  return (
    <div className="techskills-wrap">
      <div className="objective-wrap">
        <div className="objective-1">
          Leverage our software & hardware expertise
        </div>
        <div>
          <div className="objective-2">
            Use our services and tech expertise to create disruptive products &
            solutions that can revolutionize your business and stay ahead with
            evolving technology advancements.
          </div>
          {/* <div className="objective-2"></div> */}
        </div>
      </div>
      <div className="all-languages-wrap">
        {ProgrammingSkills.map((language) => {
          return <ProgrammingLanguages language={language} />;
        })}
      </div>
      <div className="techbtn-div">
        <button className="techbtn">Explore our Entire Tech stack</button>
      </div>
    </div>
  );
};
const ProgrammingLanguages = ({ language }) => (
  <div className="single-card">
    <div className="card-img-div">
      <img src={language.Image} alt="" className="card-img" />
    </div>
    <div className="card-name">{language.languageName}</div>
  </div>
);
export default TechSkills;
