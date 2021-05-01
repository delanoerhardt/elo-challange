import { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    event.preventDefault();

    const newFormState = { ...formState };
    newFormState[event.target.id] = event.target.value;

    setFormState(newFormState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formState);
  };

  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <div className="form-section">
        <label htmlFor="username">Usuário *</label>
        <br />
        <textarea
          class="boxsizing-border form-input-text"
          id="username"
          value={formState.username}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-section">
        <label htmlFor="password">Senha *</label>
        <br />
        <textarea
          class="boxsizing-border form-input-text"
          id="password"
          value={formState.password}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-section">
        <label htmlFor="confirmPassword">Confirmação da senha *</label>
        <br />
        <textarea
          class="boxsizing-border form-input-text"
          id="confirmPassword"
          value={formState.passwordConfirm}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-section">
        <input type="submit" className="form-button" value="Registrar" />
      </div>
    </form>
  );
}

export default RegisterForm;
