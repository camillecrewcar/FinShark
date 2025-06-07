import React from 'react';
import { CompanyProfile } from '../../../../company';
import './StockInfo.css';

interface StockInfoProps {
  company: CompanyProfile;
}

const StockInfo = ({ company }: StockInfoProps) => (
  <div className="stock-info">
    <h2>Stock Info</h2>
    <p><strong>Price:</strong> ${company.price} {company.currency}</p>
    <p><strong>Market Cap:</strong> ${company.mktCap.toLocaleString()}</p>
    <p><strong>Beta:</strong> {company.beta}</p>
    <p><strong>Volume Avg:</strong> {company.volAvg.toLocaleString()}</p>
    <p><strong>Last Dividend:</strong> {company.lastDiv}</p>
    <p><strong>52 Week Range:</strong> {company.range}</p>
    <p><strong>DCF:</strong> {company.dcf} ({company.dcfDiff >= 0 ? '+' : ''}{company.dcfDiff})</p>
    <p><strong>Changes:</strong> {company.changes}</p>
  </div>
);

export default StockInfo;
