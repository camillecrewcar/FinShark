import axios from 'axios';
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from './company';


export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<CompanySearch[]>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle Axios error
            console.error('Axios error:', error.message);
            return error.message;
        } else {
            // Handle non-Axios error
            console.error('Unexpected error:', error);
            return 'An unexpected error occurred';
        }
    }
}
export const getCompanyProfile = async (query: string): Promise<CompanyProfile[] | null> => {
  try {
    const response = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
