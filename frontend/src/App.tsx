import React, { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/hero';


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
  const deletePortfolio = (e: any) => {
      const portfolioName = e.target[0].value;
      console.log("Portfolio deleted: " + portfolioName);
      setPortfolioValues(prevValues => prevValues.filter(value => value !== portfolioName));
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
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <Hero></Hero>
      <ListPortfolio deletePortfolio={deletePortfolio} portfolioValues={portfolioValues}  />
      <Search handleSearchChange ={handleSearchChange} search = {search} onSearchSubmit = {onSearchSubmit}/>
      {serverError && <div className="error text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded mb-4">{serverError}</div>}
      <CardList List={searchResults} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
