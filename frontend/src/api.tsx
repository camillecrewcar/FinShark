import axios from 'axios';
import { CompanyProfile } from './company';

interface SearchResult {
    data: CompanyProfile[];
}
export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResult>(
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