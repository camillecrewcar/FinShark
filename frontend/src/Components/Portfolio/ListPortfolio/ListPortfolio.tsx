import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
  portfolioValues: string[];
  deletePortfolio: (e : SyntheticEvent) => void;
}
const ListPortfolio = ({portfolioValues, deletePortfolio} : Props) => {
  return (
    <div>
      <h3>Portfolio</h3>
       <div className="list-portfolio">
          <ul>
            portfolioValues: {portfolioValues.map((value, index) => (
              <CardPortfolio deletePortfolio={deletePortfolio} key={index} value = {value} />
            ))}
          </ul>
        </div>
        
    </div>
  );

  
}

export default ListPortfolio;