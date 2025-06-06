import { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import "./CardPortfolio.css";
import { Link } from "react-router";

interface Props {
    value: string;
    deletePortfolio: (e : SyntheticEvent) => void;
}

const CardPortfolio = ({value, deletePortfolio}: Props) => {
  return (
    <Link to={`/company/${value}`} className="link-portfolio">
      <div className="card-portfolio">
        <div className="portfolio-header">
          <h3>{value}</h3>
          <DeletePortfolio deletePortfolio={deletePortfolio} value={value} />
        </div>
        <p className="portfolio-value">Portfolio Value: {value}</p>
      </div>
    </Link>
  )
}

export default CardPortfolio