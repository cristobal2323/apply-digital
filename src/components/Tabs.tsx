export const Tabs = () => {
  return (
    <section className="flex flex_center">
      <div className="tabs">
        <button className="tab_button">All</button>
      </div>
      <div className="tabs">
        <button className="tab_button active_right">My Faves</button>
      </div>
    </section>
  );
};
