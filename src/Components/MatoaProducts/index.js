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
        <>
          <Tab isSelected={selected === "Maple Series"}>
            {data.map((prod, id) => (
              <div key={id} className="tab-container">
                <div>
                  <img src={prod.image} alt="" />
                  <img
                    src="/images/Rectangle.png"
                    alt=""
                    width="131"
                    height="131"
                  />
                </div>

                <div style={{ marginLeft: "24px" }}>
                  <h6>{prod.title}</h6>
                  <h5>{prod.price}</h5>
                </div>
              </div>
            ))}
          </Tab>
          {/* <button>See More</button> */}
        </>

        <>
          <Tab isSelected={selected === "Ebony Series"}>
            {data.reverse().map((prod, id) => (
              <div key={id} className="tab-container">
                <div>
                  <img src={prod.image} alt="" />
                  <img
                    src="/images/Rectangle.png"
                    alt=""
                    width="131"
                    height="131"
                  />
                </div>

                <div style={{ marginLeft: "24px" }}>
                  <h6>{prod.title}</h6>
                  <h5>{prod.price}</h5>
                </div>
              </div>
            ))}
          </Tab>
        </>

        <>
          <Tab isSelected={selected === "Featured"}>
            {data.reverse().map((prod, id) => (
              <div key={id} className="tab-container">
                <div>
                  <img src={prod.image} alt="" />
                  <img
                    src="/images/Rectangle.png"
                    alt=""
                    width="131"
                    height="131"
                  />
                </div>

                <div style={{ marginLeft: "24px" }}>
                  <h6>{prod.title}</h6>
                  <h5>{prod.price}</h5>
                </div>
              </div>
            ))}
          </Tab>
          <button className="btn">See More</button>
        </>
      </TabNav>
    </div>
  );
}
