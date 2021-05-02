import "./Outline.css";

function Outline(props) {
  const classAdded = "outline " + props.className;
  return <div className={classAdded}>{props.children}</div>;
}

export default Outline;
