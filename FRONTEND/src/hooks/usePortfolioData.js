import { useEffect, useState } from "react";
import { fetchPortfolioData } from "../api/portfolio";

export function usePortfolioData() {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    let active = true;

    async function loadPortfolio() {
      try {
        const data = await fetchPortfolioData();
        if (active) {
          setState({ data, loading: false, error: "" });
        }
      } catch (error) {
        if (active) {
          setState({
            data: null,
            loading: false,
            error:
              error.response?.data?.message ||
              "Unable to load portfolio data. Start the API server and try again.",
          });
        }
      }
    }

    loadPortfolio();

    return () => {
      active = false;
    };
  }, []);

  return state;
}
