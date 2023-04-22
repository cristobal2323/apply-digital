import { useState } from "react";

import { Header, Tabs, Select, Main, Loading } from "./components";

//Service
import { newsApi, useGetNewsQuery } from "./services/news";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  // Get the data
  const { data, isLoading, error, isError, isFetching } = useGetNewsQuery({
    query: query,
    page: page,
  });

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <>
      <Header />
      <Tabs />
      <Select query={query} setQuery={setQuery} />
      <Main news={data} />
      <Loading isLoading={isLoading} isFetching={isFetching} />
    </>
  );
};

export default App;
