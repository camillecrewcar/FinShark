import React, { Children, useEffect, useState } from 'react';
import { CompanyProfile } from '../../company';
import { Outlet, useParams } from 'react-router-dom';
import { getCompanyProfile } from '../../api';
import Header from './CompanyPageComponents/CompanyHeader/Header';
import StockInfo from './CompanyPageComponents/CompanyStockInfo/StockInfo';
import CompanyInfo from './CompanyPageComponents/CompanyInfo/CompanyInfo';
import CompanyDescription from './CompanyPageComponents/CompanyDescription/CompanyDescription';
import Sidebar from './CompanyPageComponents/Sidebar/Sidebar';

type Props = {
  children?: React.ReactNode;
}


const CompanyPage = ({children} : Props) => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfileInit = async () => {
      if (!ticker) return;

      const data = await getCompanyProfile(ticker);
      if (data && data.length > 0) {
        setCompany(data[0]);
      } else {
        setCompany(null);
      }
      setLoading(false);

    };

    getProfileInit();

  }, [ticker]);

  if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;

  if (!company) return <div style={{ padding: '2rem' }}>Company not found!</div>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <Header
        image={company.image}
        companyName={company.companyName}
        symbol={company.symbol}
        exchange={company.exchange}
        exchangeShortName={company.exchangeShortName}
      />
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <div className="flex flex-wrap">{children}</div>
          <div className="flex flex-wrap">{<Outlet />}</div>
        </div>
      </div>
      {/* Description */}
      <CompanyDescription description={company.description} />
    </div>
  );
};

export default CompanyPage;
