import React, { JSX } from 'react'
import Card from '../Card/Card'

interface Props {
  List : {
    companyName: string;
    ticker: string;
    price: string;
    description: string;
  }[];
}

const CardList : React.FC<Props> = ({List}: Props): JSX.Element => {
  return (
    <div>
      {List.map((item, index) => (
        <Card
          key={index}
          companyName={item.companyName}
          ticker={item.ticker}
          price={item.price}
          description={item.description}
        />
      ))}
      
    </div>
  )
}

export default CardList