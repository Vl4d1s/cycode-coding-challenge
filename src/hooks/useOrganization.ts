import { useState, useEffect } from "react";
import { OrganizationData } from "../types";

const URL = "/data.json";

type FetchState = {
  data: OrganizationData | null;
  isLoading: boolean;
  error: Error | null;
};

const useOrganization = (): FetchState => {
  const [data, setData] = useState<OrganizationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useOrganization;
