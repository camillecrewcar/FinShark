import { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import "./CardPortfolio.css";

interface Props {
    value: string;
    deletePortfolio: (e : SyntheticEvent) => void;
}

const CardPortfolio = ({value, deletePortfolio}: Props) => {
  return (
    <div className="card-portfolio">
      <div className="portfolio-header">
        <h3>{value}</h3>
        <DeletePortfolio deletePortfolio={deletePortfolio} value={value} />
      </div>
      <p className="portfolio-value">Portfolio Value: {value}</p>
    </div>
  )
}

export default CardPortfolio