import React, { SyntheticEvent } from 'react'

type Props = {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = (props: Props) => {
  return (
    <form onSubmit={props.onPortfolioCreate} className="flex items-center">
      <input readOnly={true} hidden={true} value={props.symbol} />
      <button
        type="submit"
        className="portfolio-button ml-2 px-4 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition"
      >
        Add to Portfolio
      </button>
    </form>
  )
}

export default AddPortfolio