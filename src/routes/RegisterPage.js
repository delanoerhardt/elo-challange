import Outline from "../components/Outline";
import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <div className="center">
      <Outline>
        <Logo />
        <RegisterForm />
      </Outline>
    </div>
  );
}

export default RegisterPage;
