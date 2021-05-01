import "./Logo.css";
import logoPng from "../logo-EloGroup-branco.png";

function Logo(props) {
  const styleMaxSize = { maxWidth: props.maxSize };
  return (
    <div className="logo" style={styleMaxSize}>
      <img className="logo-png" src={logoPng} alt="EloGroup logo" />
    </div>
  );
}

export default Logo;
