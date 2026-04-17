import React, { createContext, useContext, useState, useEffect } from "react";
import mockData from "../ashendra.json";
import PortfolioLoader from "@/components/ui/PortfolioLoader";
import ErrorPage from "@/pages/ErrorPage";
import { getData } from "@/hooks/usePortfolio";
import { encryptID, decryptID } from '@/hooks/useCrypto'

type PortfolioContextType = {
  data: typeof mockData | null;
  loading: boolean;
  error: string | null;
};

const PortfolioContext = createContext<PortfolioContextType>({
  data: null,
  loading: true,
  error: null,
});

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<typeof mockData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async (id: string) => {
      try {
        setLoading(true);
        const userData = await getData(id);
        setData(userData);
      } catch (error) {
        setError("User not found with activated portfolio or invalid URL");
      } finally {
        setLoading(false);
      }
    };

    const path = window.location.pathname;
    const segments = path.split("/").filter(Boolean);
    const codedUserId = segments[segments.length - 1] || "";
    const localUserId = localStorage.getItem("codedUserId");

    // 🚫 Case 1: No URL ID but local exists → redirect
    if (!codedUserId && localUserId) {
      window.location.replace(`/${localUserId}`);
      return;
    }

    // 🚫 Case 2: No URL ID and no local → error
    if (!codedUserId && !localUserId) {
      setLoading(false);
      window.location.replace("/error");
      return;
    }

    // ✅ Case 3: Same ID → use existing state
    if (codedUserId === localUserId && data) {
      setLoading(false);
      return;
    }

    // ✅ Case 4: New ID OR no data → fetch
    fetchUserData(codedUserId);

  }, [window.location.pathname]);


  if (loading) {
    return <PortfolioLoader />;
  }

  if (error) {
    return (
      <ErrorPage error={error} />
    );
  }

  return (
    <PortfolioContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};
