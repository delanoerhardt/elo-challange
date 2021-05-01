import "./RegisterView.css";

import { useState } from "react";
import Outline from "../components/Outline";
import Logo from "../components/Logo";
import FormSection from "../components/FormSection";
import CustomButton from "../components/CustomButton";

function RegisterView() {
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
    <div className="center">
      <Outline>
        <Logo />
        <form className="register-form" onSubmit={handleSubmit}>
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
