import { Header, Tabs, Select, News } from "./components";

function App() {
  return (
    <>
      <Header />
      <Tabs />
      <Select />
      <main className="container mt-1 flex gap-1">
        <News />
        <News />
        <News />
        <News />
      </main>
    </>
  );
}

export default App;
