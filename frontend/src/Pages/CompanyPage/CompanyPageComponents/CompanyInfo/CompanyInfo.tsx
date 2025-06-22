import React from 'react';
import { CompanyProfile } from '../../../../company';
import './CompanyInfo.css';

interface CompanyInfoProps {
  // company: CompanyProfile;
}

const CompanyInfo = () => (
  <div className="company-info">
    <h2>Company Info</h2>
    {/* <p><strong>Industry:</strong> {company.industry}</p>
    <p><strong>Sector:</strong> {company.sector}</p>
    <p><strong>CEO:</strong> {company.ceo}</p>
    <p><strong>Employees:</strong> {company.fullTimeEmployees}</p>
    <p><strong>Phone:</strong> {company.phone}</p>
    <p>
      <strong>Website:</strong>{' '}
      <a href={company.website} target="_blank" rel="noopener noreferrer">
        {company.website}
      </a>
    </p>
    <p><strong>IPO Date:</strong> {company.ipoDate}</p>
    <p>
      <strong>Address:</strong> {company.address}, {company.city}, {company.state} {company.zip}
    </p> */}
  </div>
);

export default CompanyInfo;
