import React, { JSX } from 'react'
import './Card.css'

interface Props {
    companyName?: string;
    ticker: string;
    price?: string;
    description?: string;
}

const Card: React.FC<Props> = ({companyName, ticker, price, description}: Props): JSX.Element => {
  return (
    <div className='card'>
        <img
          className='card-image'
          src={`https://picsum.photos/300/180?random=${Math.floor(Math.random() * 1000)}`}
          alt='Random'
        />
        <div className='detail'>
            <h2>{companyName}</h2>
            <p>{ticker}</p>
            <p className='price'>{price}</p>
        </div>
        <p className='info'>
            {description ? description : 'No description available.'}
        </p>

    </div>
  )
}

export default Card