import React from 'react'
import { TestDataCompany } from '../Table/TestData'

const data = TestDataCompany[0];

type Company = typeof data;

const config = [
  {
    label: "Symbol",
    subtitle: "Ticker symbol",
    render: (item: Company) => item.symbol,
  },
  {
    label: "Price",
    subtitle: "Current stock price",
    render: (item: Company) => item.price,
  },
  {
    label: "Beta",
    subtitle: "Volatility compared to market",
    render: (item: Company) => item.beta,
  },
  {
    label: "Volume Avg",
    subtitle: "Average trading volume",
    render: (item: Company) => item.volAvg,
  },
  {
    label: "Market Cap",
    subtitle: "Market capitalization",
    render: (item: Company) => item.mktCap,
  },
  {
    label: "Last Dividend",
    subtitle: "Most recent dividend",
    render: (item: Company) => item.lastDiv,
  },
  {
    label: "Range",
    subtitle: "52-week price range",
    render: (item: Company) => item.range,
  },
  {
    label: "Changes",
    subtitle: "Price change",
    render: (item: Company) => item.changes,
  },
  {
    label: "Company Name",
    subtitle: "Full company name",
    render: (item: Company) => item.companyName,
  },
  {
    label: "Currency",
    subtitle: "Trading currency",
    render: (item: Company) => item.currency,
  },
  {
    label: "Industry",
    subtitle: "Industry sector",
    render: (item: Company) => item.industry,
  },
  {
    label: "CEO",
    subtitle: "Chief Executive Officer",
    render: (item: Company) => item.ceo,
  },
  {
    label: "Sector",
    subtitle: "Business sector",
    render: (item: Company) => item.sector,
  },
  {
    label: "Employees",
    subtitle: "Number of employees",
    render: (item: Company) => item.fullTimeEmployees,
  },
  {
    label: "IPO Date",
    subtitle: "Initial public offering date",
    render: (item: Company) => item.ipoDate,
  },
  {
    label: "DCF Diff",
    subtitle: "Discounted cash flow difference",
    render: (item: Company) => item.dcfDiff,
  },
  {
    label: "DCF",
    subtitle: "Discounted cash flow",
    render: (item: Company) => item.dcf,
  }
];

const RatioList = () => {
    const renderedRows = config.map((col, idx) => (
        <li
            key={idx}
            className="ratio-item bg-white rounded-lg shadow p-4 mb-4 flex flex-col gap-1 border border-gray-100 list-decimal list-inside"
        >
            <h3 className="ratio-label text-blue-700 font-semibold text-lg">{col.label}</h3>
            <p className="ratio-value text-gray-900 text-xl font-bold">{col.render(data)}</p>
            <p className="ratio-subtitle text-gray-500 text-sm">{col.subtitle}</p>
        </li>
    ));
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-decimal list-inside">
            {renderedRows}
        </ul>
    )
}

export default RatioList
