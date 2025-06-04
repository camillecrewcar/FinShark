import React, { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';


function App() {
  const [search, setSearch] = useState<string>('');
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e.target.value);
  }
  const onPortfolioCreate = (e: any) => {
      e.preventDefault();
      if(portfolioValues.includes(e.target[0].value)) {
          setServerError("Portfolio already exists");
          return;
      }
      const updatedPortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
      console.log("Portfolio created" + e );
  }
  const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
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
      <ListPortfolio portfolioValues={portfolioValues} />
      <Search handleSearchChange ={handleSearchChange} search = {search} onSearchSubmit = {onSearchSubmit}/>
      {serverError && <div className="error">{serverError}</div>}
      <CardList List={searchResults} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
