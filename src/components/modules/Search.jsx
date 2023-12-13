import { useEffect, useState } from "react";
import RegionConfig from "./RegionConfig";
import { getSearched } from "../../services/CurrencyApi";
import { RotatingLines } from "react-loader-spinner";

function Search({ regionData: { region, setRegion } }) {
  const [searched, setSearched] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    if (!searched) return;
    const debounceTimer = setTimeout(() => {
      try {
        fetch(getSearched(searched), { signal: abortController.signal })
          .then((res) => res.json())
          .then((json) => {
            if (json.coins) {
              setSearchResult(json.coins);
              setIsLoading(false);
            } else {
              alert(json.status.error_message);
            }
          });
      } catch (error) {
        alert(error.message);
      }
    }, 250);

    return () => {
      abortController.abort();
      clearTimeout(debounceTimer);
    };
  }, [searched]);

  const searchHandler = (e) => {
    setSearched(e.target.value);
    setIsLoading(true);
    if (e.target.value === "") {
      setSearchResult([]);
    }
  };

  return (
    <div className="w-full my-8 relative">
      <div className="flex">
        <div className="relative  mr-16">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="bg-secondbg border border-captext text-deftext text-sm rounded-lg  focus:outline-none focus:ring-theme-color focus:border-theme-color w-cus block w-96 ps-10 p-2.5"
            placeholder="Search coin name..."
            required
            onChange={searchHandler}
            value={searched}
            onBlur={()=>setSearched('')}
          />
        </div>
        <RegionConfig regionData={{ region, setRegion }} />
      </div>
      {!!searched.length && (
        <div className="bg-mainbg border border-theme-color rounded-lg no-scrollbar overflow-y-auto min-w-cus h-96 absolute mt-3 px-5 ">
          {isLoading && (
            <div className="w-full h-full flex justify-center items-center">
              <RotatingLines
              strokeWidth="4"
              animationDuration="0.75"
              width="96"
              visible={true}
              strokeColor="#A259FF"
            />
            </div>
          )}
          <div className={isLoading? 'hidden' :'' }>
            {searchResult.map((searchData) => (
              <Result key={searchData.id} data={searchData} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;

const Result = ({ data: { id, name, thumb } }) => {
  return (
    <div className="my-6 flex justify-start items-center  ">
      <img className="w-8 h-8 mr-3" src={thumb} alt={id} />
      <span className="font-extralight text-md">{name}</span>
    </div>
  );
};
