import logo from "../assets/AkshajBansalLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-[70px] w-[300px] mx-2" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
