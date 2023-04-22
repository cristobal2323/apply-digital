import { FC } from "react";

interface Props {
  showFavorites: boolean;
  setShowFavorites: (showFavorite: boolean) => void;
}

export const Tabs: FC<Props> = ({ showFavorites, setShowFavorites }) => {
  return (
    <section className="flex flex_center">
      <div className="tabs">
        <button
          className={!showFavorites ? "tab_button active_left" : "tab_button "}
          onClick={() => setShowFavorites(false)}
        >
          All
        </button>
      </div>
      <div className="tabs" onClick={() => setShowFavorites(true)}>
        <button
          className={showFavorites ? "tab_button active_right" : "tab_button "}
        >
          My Faves
        </button>
      </div>
    </section>
  );
};
