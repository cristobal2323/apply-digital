import { useState, useEffect } from "react";

import { Header, Tabs, Select, Main, Loading, Favorites } from "./components";

//Service
import { useGetNewsQuery } from "./services/news";

//Interface
import { Hit, IFavorite } from "./interfaces";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [likedNews, setLikedNews] = useState<IFavorite[]>([]);
  const [allData, setAllData] = useState<Hit[]>([]);

  // Get the data
  const { data, isLoading, error, isError, isFetching } = useGetNewsQuery({
    query: query,
    page: page,
  });

  useEffect(() => {
    setLikedNews(JSON.parse(localStorage.getItem("likedNews") || "[]"));
    setQuery(localStorage.getItem("query") || "");
  }, []);

  useEffect(() => {
    if (!isFetching && !isLoading && !isError && !isFetching) {
      const final = data?.hits ? data.hits : [];
      setAllData((prev) => [...prev, ...final]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, isLoading]);

  //Pagination
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        showFavorites === false
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <>
      <Header />
      <Tabs setShowFavorites={setShowFavorites} showFavorites={showFavorites} />
      <Select
        setPage={setPage}
        setAllData={setAllData}
        query={query}
        setQuery={setQuery}
      />
      {showFavorites ? (
        <Favorites likedNews={likedNews} setLikedNews={setLikedNews} />
      ) : (
        <Main
          news={allData}
          likedNews={likedNews}
          setLikedNews={setLikedNews}
        />
      )}

      <Loading isLoading={isLoading} isFetching={isFetching} />
    </>
  );
};

export default App;
