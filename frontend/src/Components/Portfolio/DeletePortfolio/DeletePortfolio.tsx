import React, { SyntheticEvent } from 'react'

interface Props {
    value: string;
    deletePortfolio: (e : SyntheticEvent) => void;
}

const DeletePortfolio = ( {deletePortfolio, value} : Props) => {
  return (
    <form className="delete-portfolio" onSubmit={deletePortfolio}>
        <input hidden = {true} value={value} />
        <button type='submit'>X</button>
    </form>
  )
}

export default DeletePortfolio