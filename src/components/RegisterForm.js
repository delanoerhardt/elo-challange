import { useState } from "react";
import "./RegisterForm.css";
import "./FormSection";
import FormSection from "./FormSection";

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
      <FormSection
        id="username"
        type="text"
        valueOfState={formState.username}
        handleChange={handleChange}
      >
        Usuário *
      </FormSection>
      <FormSection
        id="password"
        type="password"
        valueOfState={formState.password}
        handleChange={handleChange}
      >
        Senha *
      </FormSection>
      <FormSection
        id="confirmPassword"
        type="password"
        valueOfState={formState.confirmPassword}
        handleChange={handleChange}
      >
        Confirmação da senha *
      </FormSection>
      <div className="form-section">
        <input type="submit" className="form-button" value="Registrar" />
      </div>
    </form>
  );
}

export default RegisterForm;
