import "./RegisterView.css";

import { useState } from "react";
import Outline from "../components/Outline";
import Logo from "../components/Logo";
import FormSection from "../components/FormSection";
import CustomButton from "../components/CustomButton";

function RegisterView({ handleSubmit, validateRegisterForm }) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    event.preventDefault();

    event.target.classList.remove("invalid");

    const newFormState = { ...formState };
    newFormState[event.target.id] = event.target.value;

    setFormState(newFormState);
  };

  const handleSubmitWrapped = (event) => {
    event.preventDefault();

    const { valid, invalidFieldIds } = validateRegisterForm(formState);

    if (!valid) {
      Object.values(invalidFieldIds).forEach((fieldId) =>
        document.getElementById(fieldId)?.classList.add("invalid")
      );
      return;
    }

    handleSubmit(formState, event);
  };

  return (
    <div className="center">
      <Outline>
        <Logo />
        <form className="register-form" onSubmit={handleSubmitWrapped}>
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
            <CustomButton type="submit" color="white" value="Registrar" />
          </div>
        </form>
      </Outline>
    </div>
  );
}

export default RegisterView;
