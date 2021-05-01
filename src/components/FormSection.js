import "./FormSection.css";

function FormSection(props) {
  return (
    <div className="form-section">
      <label htmlFor={props.id}>{props.children}</label>
      <br />
      <input
        class="boxsizing-border form-input-text"
        id={props.id}
        type={props.type}
        value={props.valueOfState}
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default FormSection;
