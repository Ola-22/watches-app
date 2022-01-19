import Tab from "./TabsProduct/Tab";
import TabNav from "./TabsProduct/TabNav";
import { useState } from "react";
import "./style.css";
import data from "./data";

export default function MatoaProducts(props) {
  const [selected, setSelected] = useState("Maple Series");

  const SelectTab = (tab) => {
    setSelected(tab);
  };

  return (
    <div className="main-tab">
      <TabNav
        tabs={["Maple Series", "Ebony Series", "Featured"]}
        selected={selected}
        SelectTab={SelectTab}
      >
        <Tab isSelected={selected === "Maple Series"}>
          {data.map((prod, id) => (
            <div key={id} style={{ display: "flex" }}>
              <img src={prod.image} alt="" />
              <h6>{prod.title}</h6>
              <h5>{prod.price}</h5>
            </div>
          ))}
        </Tab>
        <Tab isSelected={selected === "Ebony Series"}>
          {data.reverse().map((prod, id) => (
            <div key={id} style={{ display: "flex" }}>
              <img src={prod.image} alt="" />
              <h6>{prod.title}</h6>
              <h5>{prod.price}</h5>
            </div>
          ))}
        </Tab>
        <Tab isSelected={selected === "Featured"}>
          {data.map((prod, id) => (
            <div key={id} style={{ display: "flex" }}>
              <img src={prod.image} alt="" />
              <h6>{prod.title}</h6>
              <h5>{prod.price}</h5>
            </div>
          ))}
        </Tab>
      </TabNav>
    </div>
  );
}
