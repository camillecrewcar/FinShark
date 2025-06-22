import React, { useEffect, useState } from 'react';
import { CompanyProfile } from '../../company';
import { Outlet, useParams } from 'react-router-dom';
import { getCompanyProfile } from '../../api';
import Header from './CompanyPageComponents/CompanyHeader/Header';

import CompanyDescription from './CompanyPageComponents/CompanyDescription/CompanyDescription';
import Sidebar from './CompanyPageComponents/Sidebar/Sidebar';

const CompanyPage = ({ children }: { children?: React.ReactNode }) => {
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

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    );

  if (!company)
    return <div className="p-8 text-lg text-center text-red-500">Company not found!</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-2 md:px-0 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-8">
        {/* Header */}
        <Header
          image={company.image}
          companyName={company.companyName}
          symbol={company.symbol}
          exchange={company.exchange}
          exchangeShortName={company.exchangeShortName}
        />
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar />
          <div className="flex-1 flex flex-col gap-8">
            <div className="w-full">
              <Outlet context={ticker}/>
              {children}
            </div>
            <CompanyDescription description={company.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
