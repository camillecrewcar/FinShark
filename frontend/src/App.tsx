import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';


function App() {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e.target.value);
  }
  const mouseClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(search);
      const result = await searchCompanies(search);
      if (typeof result === 'string') {
          setServerError(result);
      } else if (Array.isArray(result.data)) {
          setSearchResults(result.data);
      }
      console.log(searchResults);
  }
  return (
    <div className="App">
      <Search handleChange ={handleChange} search = {search} mouseClick = {mouseClick}/>
      {serverError && <div className="error">{serverError}</div>}
      <CardList List={searchResults} />
    </div>
  );
}

export default App;
