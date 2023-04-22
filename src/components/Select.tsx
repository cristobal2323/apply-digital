import { FC } from "react";

//Icon
import { MdKeyboardArrowDown } from "react-icons/md";

//Image
import Angular from "../assets/angular.png";
import React from "../assets/react.png";
import Vue from "../assets/vue.png";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const imgs: { angular: string; react: string; vue: string } = {
  angular: Angular,
  react: React,
  vue: Vue,
};

export const Select: FC<Props> = ({ setQuery, query }) => {
  return (
    <section className="container mt-1">
      <div className="container_select">
        <span>
          {query === "" ? (
            "Select your news"
          ) : (
            <>
              <img
                src={
                  query === "angular" || query === "react" || query === "vue"
                    ? imgs[query]
                    : ""
                }
                className="logo react"
                alt="React logo"
              />{" "}
              {query}
            </>
          )}
        </span>
        <span className="select_icon">
          <MdKeyboardArrowDown />
        </span>
        <div className="items_select">
          <ul>
            <li
              onClick={() => setQuery("angular")}
              className={query === "angular" ? "active" : ""}
            >
              <div>
                <img src={Angular} className="logo react" alt="React logo" />
              </div>
              <div>Angular</div>
            </li>
            <li
              onClick={() => setQuery("react")}
              className={query === "react" ? "active" : ""}
            >
              <div>
                <img src={React} className="logo react" alt="React logo" />
              </div>
              <div>React</div>
            </li>
            <li
              onClick={() => setQuery("vue")}
              className={query === "vue" ? "active" : ""}
            >
              <div>
                <img src={Vue} className="logo react" alt="React logo" />
              </div>
              <div>Vue</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
