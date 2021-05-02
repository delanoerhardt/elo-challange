import { useHistory } from "react-router";
import RegisterView from "../routes/RegisterView";

function RegisterController() {
  const history = useHistory();

  const handleSubmit = (state, event) => {
    history.push("/lead-panel");
  };

  const validatePassword = (password) => {
    if (password.length < 8) return false;

    let re = /[a-zA-Z]+/;
    if (!re.test(password)) return false;

    re = /[0-9]+/;
    if (!re.test(password)) return false;

    re = /[!@#$%¨&*()-='[\]~,.;/_+`{}^<>:?]+/;
    if (!re.test(password)) return false;

    re = /^[a-zA-Z0-9!@#$%¨&*()-='[\]~,.;/_+`{}^<>:?]+$/;
    const result = password.match(re);
    if (result === null) return false;

    return true;
  };

  return (
    <RegisterView
      handleSubmit={handleSubmit}
      validatePassword={validatePassword}
    />
  );
}

export default RegisterController;
