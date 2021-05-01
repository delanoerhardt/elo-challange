import "./CustomButton.css";

function CustomButton(props) {
  const styleElement = {
    backgroundColor: props.color,
    border: props.border,
    color: props.textColor,
  };
  return (
    <input
      type={props.type}
      style={styleElement}
      className="form-button"
      value={props.value}
      onClick={props.onClick}
    />
  );
}

export default CustomButton;
