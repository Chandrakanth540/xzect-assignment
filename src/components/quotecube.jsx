import Cuboid from './cuboid';

const QuoteCube = () => {
  return (
    <>
      <div className="header-down-black-starting"></div>
      <div className="quotecube-wrap-main">
        <div className="quotecube-wrapper">
          <div>
            <div className="quote-text">
              <span className="text-1"> Build,</span>{' '}
              <span className="text-2">test,</span>{' '}
              <span className="text-3">and</span>{' '}
              <span className="text-4">execute your ideas</span>{' '}
              <span className="text-3">with our </span>
              <span className="text-5">innovative solutions</span>
              <span className="text-2">&#46;</span>
            </div>
          </div>
          <div className="cuboid-wrap">
            <Cuboid />
          </div>
        </div>
        <div className="btns-wrap">
          <button className="whatsapp-btn">
            <img
              src="../src/assets/whatsapp.png"
              alt=""
              style={{ height: '30px', width: '30px' }}
            />
            Chat now on Whatsapp
          </button>

          <button className="explore-btn">Explore our services</button>
        </div>
      </div>
    </>
  );
};
export default QuoteCube;
