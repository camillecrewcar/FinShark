import React, { SyntheticEvent } from 'react'

interface Props {
    value: string;
    deletePortfolio: (e : SyntheticEvent) => void;
}

const DeletePortfolio = ( {deletePortfolio, value} : Props) => {
  return (
    <form className="delete-portfolio flex items-center" onSubmit={deletePortfolio}>
        <input hidden={true} value={value} />
        <button
          type='submit'
          className="ml-2 px-2 py-1 rounded bg-red-500 text-white font-bold hover:bg-red-600 transition"
          title="Delete portfolio"
        >
          X
        </button>
    </form>
  )
}

export default DeletePortfolio