import React, { SyntheticEvent, useState } from 'react';
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';
import Hero from '../../Components/Hero/hero';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import Search from '../../Components/Search/Search';
import CardList from '../../Components/CardList/CardList';

interface Props {}

const SearchPage = (props: Props) => {
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
      <Hero></Hero>
      <ListPortfolio deletePortfolio={deletePortfolio} portfolioValues={portfolioValues}  />
      <Search handleSearchChange ={handleSearchChange} search = {search} onSearchSubmit = {onSearchSubmit}/>
      {serverError && <div className="error text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded mb-4">{serverError}</div>}
      <CardList List={searchResults} onPortfolioCreate={onPortfolioCreate} />
    </div>
  
  )
}

export default SearchPage