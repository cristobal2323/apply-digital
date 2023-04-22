import { FC } from "react";

//Icon
import { MdKeyboardArrowDown } from "react-icons/md";

//Image
import Angular from "../assets/angular.png";
import React from "../assets/react.png";
import Vue from "../assets/vue.png";
import { Hit } from "../interfaces";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  setAllData: (array: Hit[]) => void;
  setPage: (page: number) => void;
}

const imgs: { angular: string; react: string; vue: string } = {
  angular: Angular,
  react: React,
  vue: Vue,
};

export const Select: FC<Props> = ({ setQuery, setAllData, setPage, query }) => {
  const filter = (selectedQuery: string) => {
    localStorage.setItem("query", selectedQuery);
    setQuery(selectedQuery);
    setAllData([]);
    setPage(0);
  };

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
              onClick={() => {
                filter("angular");
              }}
              className={query === "angular" ? "active" : ""}
            >
              <div>
                <img src={Angular} className="logo react" alt="React logo" />
              </div>
              <div>Angular</div>
            </li>
            <li
              onClick={() => {
                filter("react");
              }}
              className={query === "react" ? "active" : ""}
            >
              <div>
                <img src={React} className="logo react" alt="React logo" />
              </div>
              <div>React</div>
            </li>
            <li
              onClick={() => {
                filter("vue");
              }}
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
