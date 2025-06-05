import { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
    value: string;
    deletePortfolio: (e : SyntheticEvent) => void;
}

const CardPortfolio = ({value, deletePortfolio}: Props) => {
  return (
    <div className="card-portfolio">
      <h3>{value}</h3>
        <p>Portfolio Value: {value}</p>
      <DeletePortfolio deletePortfolio={deletePortfolio} value={value} />
    </div>
  )
}

export default CardPortfolio