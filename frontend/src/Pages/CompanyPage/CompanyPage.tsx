import React, { useEffect, useState } from 'react';
import { CompanyProfile } from '../../company';
import { useParams } from 'react-router-dom';
import { getCompanyProfile } from '../../api';
import Header from './CompanyPageComponents/CompanyHeader/Header';
import StockInfo from './CompanyPageComponents/CompanyStockInfo/StockInfo';
import CompanyInfo from './CompanyPageComponents/CompanyInfo/CompanyInfo';
import CompanyDescription from './CompanyPageComponents/CompanyDescription/CompanyDescription';

const CompanyPage = () => {
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
      {/* Stock Info */}
      <StockInfo company={company} />
      {/* Company Info */}
      <CompanyInfo company={company} />
      {/* Description */}
      <CompanyDescription description={company.description} />
    </div>
  );
};

export default CompanyPage;
