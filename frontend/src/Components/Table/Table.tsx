import React from 'react'
import { testIncomeStatementData } from './TestData'
import { render } from '@testing-library/react';

const data = testIncomeStatementData;

type Props = {}

type Company = (typeof data)[0];

const config = [
    {
        label: "Year",
        render: (item: Company) => item.acceptedDate,
    },
    {
        label: "Revenue",
        render: (item: Company) => item.revenue,
    },
    {
        label: "Cost of Revenue",
        render: (item: Company) => item.costOfRevenue,
    },
    {
        label: "Gross Profit",
        render: (item: Company) => item.grossProfit,
    },
    {
        label: "Operating Expenses",
        render: (item: Company) => item.operatingExpenses,
    },
    {
        label: "Operating Income",
        render: (item: Company) => item.operatingIncome,
    },
    {
        label: "Net Income",
        render: (item: Company) => item.netIncome,
    }
]

const Table = (props: Props) => {
    const renderedRows = data.map((item) => (
        <tr key={item.cik}>
            {config.map((col, idx) => (
                <td className="p-4 py-2 border-b" key={idx}>
                    {col.render(item)}
                </td>
            ))}
        </tr>
    ));
    console.log(renderedRows);
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
                <thead>
                    <tr>
                        {config.map((col, idx) => (
                            <th className="px-4 py-2 bg-gray-100 border-b font-semibold text-left" key={idx}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
        </div>
    )
}

export default Table