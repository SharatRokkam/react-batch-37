// Node ==> NPM(Worlds largest registry)
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Cards = ({ title, img, description }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={title} width='200' height='200' />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
