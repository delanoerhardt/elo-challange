import "./FormSection.css";

function FormSection(props) {
  const styleElement = {
    maxWidth: props.maxWidth,
  };

  return (
    <div className="form-section" style={styleElement}>
      <label htmlFor={props.id} style={styleElement}>
        {props.children}
      </label>
      <br />
      <input
        className="boxsizing-border form-input-text"
        id={props.id}
        type={props.type}
        style={styleElement}
        value={props.valueOfState}
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default FormSection;
