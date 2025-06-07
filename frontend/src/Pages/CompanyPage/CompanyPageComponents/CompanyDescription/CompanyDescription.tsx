import React from 'react';
import './CompanyDescription.css';

interface CompanyDescriptionProps {
  description: string;
}

const CompanyDescription = ({ description }: CompanyDescriptionProps) => (
  <div className="company-description">
    <h2>About</h2>
    <p>{description}</p>
  </div>
);

export default CompanyDescription;
