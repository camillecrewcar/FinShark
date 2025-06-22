import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyInfo from "../Pages/CompanyPage/CompanyPageComponents/CompanyInfo/CompanyInfo";
import StockInfo from "../Pages/CompanyPage/CompanyPageComponents/CompanyStockInfo/StockInfo";
import DesignPage from "../Pages/DesignPage/DesignPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <HomePage />},
            {path: "/search", element: <SearchPage />},
            {path: "/design", element: <DesignPage />},

            {path: "/company/:ticker", element: <CompanyPage />,
            children: [
                {path: "company-info", element: <CompanyInfo />},
                {path: "stock-info", element: <StockInfo company={{} as any} />}
            ],
            },

        ]
    }
])