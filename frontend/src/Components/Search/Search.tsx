import React, { JSX, use, useState } from 'react'

interface Props {
  mouseClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  search: string | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search : React.FC<Props> =  ({mouseClick, search, handleChange}: Props): JSX.Element => {

  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)} type="text" />
        <button onClick={(e) => mouseClick(e)}>Search</button>
    </div>
  )
}

export default Search