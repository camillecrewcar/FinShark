import React, { JSX } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  List : CompanySearch[];
  onPortfolioCreate: (e: React.SyntheticEvent) => void;
}

const CardList : React.FC<Props> = ({List, onPortfolioCreate}: Props): JSX.Element => {
  return (
    <div>
      {List.length > 0 ? (
      List.map((item) => (
        <Card
          onPortfolioCreate={onPortfolioCreate}
          id={item.name}
          key={uuidv4()}
          search={item}
        />
      ))) : (
        <div className="no-results">
          <p>No results found. Please try a different search.</p>
        </div>
      )}
      
    </div>
  )
}

export default CardList