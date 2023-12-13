import { useEffect, useState } from "react";
import { urlMaker } from "../../services/CurrencyApi";
import TableCoin from "../modules/TableCoin";
import { Triangle } from "react-loader-spinner";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [region, setRegion] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(urlMaker(pageNumber, region))
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setTimeout(() => setIsLoading(false), 700);
      });
  }, [pageNumber, region]);
  return (
    <>
      {isLoading ? (
        <Triangle
          height="200"
          width="200"
          color="#A259FF"
          ariaLabel="triangle-loading"
          wrapperClass="flex justify-center mt-52"
        />
      ) : (
        <>
          {chart && <Chart setChart={setChart} chart={chart}  />}
          <Search regionData={{ region, setRegion }} />
          <TableCoin setChart={setChart} currency={region} coins={coins} />
          <Pagination pageData={{ pageNumber, setPageNumber }} />
        </>
      )}
    </>
  );
}

export default HomePage;
