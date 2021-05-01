import "./Logo.css";
import logoPng from "../logo-EloGroup-branco.png";

function Logo() {
  return (
    <div className="logo">
      <img className="logo-png" src={logoPng} alt="EloGroup logo" />
    </div>
  );
}

export default Logo;
