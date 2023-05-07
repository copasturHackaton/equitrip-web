import { useEffect } from "react";
import { useRouter } from "next/router";

interface QueryObj {
  [key: string]: string | null;
}

const useQuery = () => {
  const router = useRouter();
  const { query } = router;

  return query;
};

const setQuery = (queryObj: QueryObj) => {
  const router = useRouter();
  const query = useQuery();

  useEffect(() => {
    const newQuery = { ...query };

    Object.keys(queryObj).forEach((key) => {
      newQuery[key] = queryObj[key] !== null ? queryObj[key] : "";
    });

    router.push({ query: newQuery });
  }, [query, queryObj, router]);
};

export default setQuery;
