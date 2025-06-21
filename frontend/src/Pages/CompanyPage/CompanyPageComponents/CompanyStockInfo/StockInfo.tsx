import React from 'react';
import './StockInfo.css';
import { CompanyProfile } from '../../../../company';
import Table from '../../../../Components/Table/Table';

interface StockInfoProps {
  company: CompanyProfile;
}

const StockInfo = () => (
  <div className="stock-info">
    <h2>Stock Info</h2>
    <Table ></Table>

  </div>
);

export default StockInfo;
