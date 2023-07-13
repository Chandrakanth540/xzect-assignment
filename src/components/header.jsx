import logo from '../assets/xzect-logo.svg';
import lines from '../assets/lines.png';
import '../index.css';
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-logo-title-div">
        <img src={logo} alt="hello" className="header-logo" />
        <div className="header-title">Xzect</div>
      </div>
      <div>
        <img src={lines} alt="hello" className="header-threelines" />
      </div>
    </div>
  );
};
export default Header;
