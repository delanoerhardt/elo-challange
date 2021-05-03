import { useHistory } from "react-router";
import RegisterView from "../routes/RegisterView";
import { validateRegisterForm } from "../models/RegisterModel";

function RegisterController() {
  const history = useHistory();

  const handleSubmit = (state, event) => {
    history.push("/lead-panel");
  };

  return (
    <RegisterView
      handleSubmit={handleSubmit}
      validateRegisterForm={validateRegisterForm}
    />
  );
}

export default RegisterController;
