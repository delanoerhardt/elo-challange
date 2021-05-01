import "./CustomButton.css";

function CustomButton(props) {
  const styleNewColor = { backgroundColor: props.color, border: props.border };
  return (
    <input
      type={props.type}
      style={styleNewColor}
      className="form-button"
      value={props.value}
      onClick={props.onClick}
    />
  );
}

export default CustomButton;
