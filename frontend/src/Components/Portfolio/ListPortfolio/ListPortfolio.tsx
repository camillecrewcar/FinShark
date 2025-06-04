import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
  portfolioValues: string[];
}
const ListPortfolio = (portfolioValues: Props) => {
  return (
    <div>
      <h3>Portfolio</h3>
       <div className="list-portfolio">
          <ul>
            portfolioValues: {portfolioValues.portfolioValues.map((value, index) => (
              <CardPortfolio key={index} value = {value} />
            ))}
          </ul>
        </div>
        
    </div>
  );

  
}

export default ListPortfolio;