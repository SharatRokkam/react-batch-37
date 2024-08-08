import "./myStylesheets.css";
import styles from "./mysheet.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MyStylesheets = (props) => {
  let className = props.data ? "primary" : "";

  const newStyle = {
    color: "blue",
    fontSize: "30px",
    fontFamily: "cursive",
  };
  return (
    <div>
      <h3 style={newStyle}>Inline Styling</h3>
      <h1 className={`${className} fonts text`}>My Stylesheet</h1>
      <h3 className={styles.success}>Hello World</h3>

      <button className="btn btn-primary">Functional </button>
      <button className="btn btn-primary">Class</button>

      <div>
        <h3>Inline</h3>
        <h3>External</h3>
        <h3>Module</h3>
        <h3>Bootstrap</h3>
      </div>
    </div>
  );
};

export default MyStylesheets;
