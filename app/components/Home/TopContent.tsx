"use client";

import { useState } from "react";
import articles from "../../api/articles.json";

const TopContent = () => {
  const tabs = [
    { id: 1, name: "Top Attractions" },
    { id: 2, name: "Top Religious Places" },
    { id: 3, name: "Top Territories" },
  ];

  const [recordsPerPage] = useState(4);
  // const numberOfPages = Math.ceil(articles.length / recordsPerPage);
  const [currentTab, setCurrentTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = articles.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="flex flex-col flex-wrap max-w-[80%] h-fit mx-auto mb-10 relative">
      <div className="flex h-fit border-b-2">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => {
              setCurrentTab(index + 1);
              setCurrentPage(index + 1);
            }}
            className={`h-fit border-b-2 px-5 py-2 cursor-pointer transition-colors duration-400 ease-linear  ${
              index + 1 === currentTab
                ? "border-orange-500"
                : "border-white hover:bg-orange-400 hover:border-orange-400 hover:text-white"
            }`}
          >
            {tab.name}
          </div>
        ))}
      </div>
      {/* <div>{tabs[currentTab].name}</div> */}
      <main className="flex flex-wrap justify-start p-5 gap-4 w-full">
        {currentRecords.map((n) => (
          <div
            key={n.id}
            className="card card-compact w-[16rem] h-[20rem] bg-base-100 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <figure>
              <img src={n.image} alt="Shoes" className="w-full h-[200px]" />
            </figure>
            <div className="card-body border-[.1rem] rounded-b-lg">
              <h2 className="card-title badge uppercase text-[1.1rem] text-orange-600">
                {n.topic}
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
            </div>
          </div>
        ))}
      </main>

      {/* <div role="tablist" className="tabs tabs-bordered">
        {tabs.map((tab) => (
          <div key={tab.id} role="tab">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab"
              aria-label={tab.name}
            />
            <div role="tabpanel" className="tab-content p-10">
              {tab.name}
            </div>
          </div>
        ))}

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 1"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Tab 3"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 3
        </div>
      </div> */}
    </div>
  );
};

export default TopContent;
