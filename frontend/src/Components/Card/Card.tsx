import React, { JSX } from 'react'
import { CompanySearch } from '../../company'
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router';

interface Props {
    id: string;
    search: CompanySearch;
    onPortfolioCreate: (e: React.SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({search, id, onPortfolioCreate}: Props): JSX.Element => {
  return (
    
    <div className="w-80 rounded-xl shadow-lg bg-white overflow-hidden m-4 flex flex-col">
        <Link to={`/company/${search.symbol}`} className="hover:opacity-80 transition">
        <img
          className="w-full h-44 object-cover"
          src={`https://picsum.photos/300/180?random=${Math.floor(Math.random() * 1000)}`}
          alt="Random"
        />
        <div className="px-4 pt-4 pb-2 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold text-gray-800 tracking-wide mb-1">{search.name}</h2>
            <p className="text-gray-600 mb-1">{search.exchangeShortName}</p>
            <p className="font-bold text-blue-600 text-lg mt-1">{search.stockExchange}</p>
        </div>
        <p className="px-4 pb-4 pt-2 text-gray-700 text-sm leading-relaxed">
            {search.name ? search.name : 'No description available.'}
        </p>
        </Link>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={search.symbol}></AddPortfolio>
    </div>
  )
}

export default Card