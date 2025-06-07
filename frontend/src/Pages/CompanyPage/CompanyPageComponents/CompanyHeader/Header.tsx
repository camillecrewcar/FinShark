import React from 'react'
import './Header.css'
interface HeaderProps {
    image: string;
    companyName: string;
    symbol: string;
    exchange: string;
    exchangeShortName: string;
}

const Header = (headerProps : HeaderProps) => {
  return (
    <div className="company-header">
      <img
        src={headerProps.image}
        alt={`${headerProps.companyName} logo`}
        className="company-header-logo"
      />
      <div>
        <h1 className="company-header-title">
          {headerProps.companyName} <span className="company-header-symbol">({headerProps.symbol})</span>
        </h1>
        <p className="company-header-exchange">
          {headerProps.exchange} <span className="company-header-exchange-short">- {headerProps.exchangeShortName}</span>
        </p>
      </div>
    </div>
  )
}

export default Header