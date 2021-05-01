import "./Logo.css";
import logoPng from "../logo-EloGroup-branco.png";

function Logo(props) {
  const inlineStyle = { maxWidth: props.maxSize };
  return (
    <div className="logo" style={inlineStyle}>
      <img className="logo-png" src={logoPng} alt="EloGroup logo" />
    </div>
  );
}

export default Logo;
