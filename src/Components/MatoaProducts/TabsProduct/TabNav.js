import React from "react";

export default function TabNav(props) {
  return (
    <div>
      <div className="nav nav-tabs">
        {props.tabs.map((tab) => {
          const active = tab === props.selected ? "active" : "";
          return (
            <li className="nav-item" key={tab}>
              <div
                className={"tab-link" + active}
                onClick={() => props.SelectTab(tab)}
              >
                {tab}
              </div>
            </li>
          );
        })}
      </div>
      {props.children}
    </div>
  );
}
