import LogoImage from "../../Assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <img src={LogoImage} alt="Logo" className='logo'/>
    </div>
  ) 
};

export default Logo;