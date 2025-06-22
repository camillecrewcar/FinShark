import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/TestData';

type Props = {}
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];
const DesignPage = (props: Props) => {
  return (
    <>
    <h1 className="text-3xl font-bold text-center mt-10">Design Page</h1>
    <p className="text-center mt-4">This page shows design of app </p>
    <Table></Table>
    <RatioList data = {testIncomeStatementData} config={tableConfig}></RatioList>
    </>
  )
}
export default DesignPage