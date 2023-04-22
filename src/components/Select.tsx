//Icon
import { MdKeyboardArrowDown } from "react-icons/md";

//Image
import Angular from "../assets/angular.png";
import React from "../assets/react.png";
import Vue from "../assets/vue.png";

export const Select = () => {
  return (
    <section className="container mt-1">
      <div className="container_select">
        <span>Select your news</span>
        <span className="select_icon">
          <MdKeyboardArrowDown />
        </span>
        <div className="items_select">
          <ul>
            <li>
              <div>
                <img src={Angular} className="logo react" alt="React logo" />
              </div>
              <div>Angular</div>
            </li>
            <li className="active">
              <div>
                <img src={React} className="logo react" alt="React logo" />
              </div>
              <div>React</div>
            </li>
            <li>
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
