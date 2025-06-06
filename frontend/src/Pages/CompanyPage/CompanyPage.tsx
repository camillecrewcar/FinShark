import React, { useEffect, useState } from 'react';
import { CompanyProfile } from '../../company';
import { useParams } from 'react-router-dom';
import { getCompanyProfile } from '../../api';

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <img
          src={company.image}
          alt={`${company.companyName} logo`}
          style={{ width: '80px', height: '80px', objectFit: 'contain' }}
        />
        <div>
          <h1 style={{ margin: 0 }}>{company.companyName} ({company.symbol})</h1>
          <p style={{ margin: 0, color: '#666' }}>{company.exchange} - {company.exchangeShortName}</p>
        </div>
      </div>

      {/* Stock Info */}
      <div style={{ marginBottom: '2rem', background: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
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

      {/* Company Info */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Company Info</h2>
        <p><strong>Industry:</strong> {company.industry}</p>
        <p><strong>Sector:</strong> {company.sector}</p>
        <p><strong>CEO:</strong> {company.ceo}</p>
        <p><strong>Employees:</strong> {company.fullTimeEmployees}</p>
        <p><strong>Phone:</strong> {company.phone}</p>
        <p><strong>Website:</strong> <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>
        <p><strong>IPO Date:</strong> {company.ipoDate}</p>
        <p><strong>Address:</strong> {company.address}, {company.city}, {company.state} {company.zip}</p>
      </div>

      {/* Description */}
      <div>
        <h2>About</h2>
        <p style={{ lineHeight: 1.6 }}>{company.description}</p>
      </div>
    </div>
  );
};

export default CompanyPage;
