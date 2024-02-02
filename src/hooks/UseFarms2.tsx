import { useQuery } from "@tanstack/react-query";
import { fetchFarms } from "../services/farmService";

// const getFarmsEndpoint = apiEndpoints.farm;

const useFarms = () => {
    const {
      data: farms,
      isLoading,
      error,
      refetch
    } = useQuery({queryKey:['farms'], queryFn: () => fetchFarms()});

    console.log("useFarms isLoading:", isLoading);
  
  
    return { farms, isLoading, error, refetch };
  };
  
  export default useFarms;