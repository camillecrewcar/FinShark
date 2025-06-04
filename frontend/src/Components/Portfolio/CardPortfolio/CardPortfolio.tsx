import React from 'react'

interface Props {
    value: string;
}

const CardPortfolio = (value: Props) => {
  return (
    <div className="card-portfolio">
      <h3>{value.value}</h3>
        <p>Portfolio Value: {value.value}</p>
        <button>X</button>
    </div>
  )
}

export default CardPortfolio