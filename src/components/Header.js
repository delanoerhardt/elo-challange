import "./Header.css";

import Logo from "../components/Logo";

function Header(props) {
  return (
    <div className="header-container">
      <div>
        <Logo maxSize="150px" />
      </div>
      <div className="title">{props.children}</div>
    </div>
  );
}

export default Header;
