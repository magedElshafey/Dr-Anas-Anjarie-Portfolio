import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import type { ProcedureListType } from "../types/ProcedureList.types";
import { delayOptions } from "@/lib/tanstack-react-query/delayOptions";
const useGetAllProcedures = () => {
  return useQuery({
    queryKey: [apiRoutes?.categories_list],
    queryFn: async () => {
      const { data } = await Axios.get(apiRoutes?.categories_list);
      return data?.data as ProcedureListType[];
    },
    ...delayOptions,
  });
};

export default useGetAllProcedures;
