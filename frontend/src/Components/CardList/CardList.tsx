import React, { JSX } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  List : CompanySearch[];
}

const CardList : React.FC<Props> = ({List}: Props): JSX.Element => {
  return (
    <div>
      {List.length > 0 ? (
      List.map((item) => (
        <Card
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