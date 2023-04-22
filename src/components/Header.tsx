import Logo from "../assets/hacker-news.png";

export const Header = () => {
  return (
    <header className="container__header">
      <section className="container">
        <h1>
          <a href="/" target="_blank">
            <img src={Logo} className="logo react" alt="React logo" />
          </a>
        </h1>
      </section>
    </header>
  );
};
