import { useState } from "react";
import { Listbox } from "@headlessui/react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <Listbox value={selectedRegion} onChange={setSelectedRegion}>
      <div className="w-48 sm:w-60 lg:w-72 bg-transparent rounded-md shadow-sm font-medium">
        <Listbox.Button className="w-full flex justify-between items-center shadow-sm text-left bg-white dark:bg-blue-light rounded-md px-5 py-4 focus:outline-none focus:ring-1 focus:ring-gray-dark dark:focus:ring-white">
          <span className="font-semibold truncate">
            {selectedRegion ? selectedRegion : "Filter by region"}
          </span>
          <span className="pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Listbox.Button>
        <Listbox.Options className="bg-white dark:bg-blue-light shadow-sm rounded-md mt-2 p-1 focus:outline-none ">
          {regions.map((region, index) => (
            <Listbox.Option
              key={index}
              value={region}
              className={({ active }) =>
                `${
                  active
                    ? "bg-gray-200 dark:bg-blue-dark bg-opacity-60 dark:bg-opacity-50 font-extrabold"
                    : "font-semibold"
                } cursor-default select-none rounded-md px-5 py-2`
              }
            >
              {({ selected }) => (
                <span
                  className={`${
                    selected
                      ? "font-extrabold"
                      : "text-blue-light dark:text-gray-light"
                  } truncate`}
                >
                  {region}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Filter;
