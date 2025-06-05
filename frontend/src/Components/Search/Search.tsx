import React, { JSX, SyntheticEvent } from 'react'

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search : React.FC<Props> =  ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {

  return (
    <div className="flex items-center gap-2 my-4">
      <form onSubmit={onSearchSubmit} className="flex items-center gap-2">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search companies..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Search