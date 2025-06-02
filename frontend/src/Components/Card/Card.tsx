import React, { JSX } from 'react'
import './Card.css'
import { CompanySearch } from '../../company'

interface Props {
    id: string;
    search: CompanySearch;
}

const Card: React.FC<Props> = ({search, id}: Props): JSX.Element => {
  return (
    <div className='card' id ={id}>
        <img
          className='card-image'
          src={`https://picsum.photos/300/180?random=${Math.floor(Math.random() * 1000)}`}
          alt='Random'
        />
        <div className='detail'>
            <h2>{search.name}</h2>
            <p>{search.exchangeShortName}</p>
            <p className='price'>{search.stockExchange}</p>
        </div>
        <p className='info'>
            {search.name ? search.name : 'No description available.'}
        </p>

    </div>
  )
}

export default Card