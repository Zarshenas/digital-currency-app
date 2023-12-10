import { useEffect, useState } from "react";
import { urlMaker } from "../../services/GetCoinList";
import TableCoin from "../modules/TableCoin";
import { Triangle } from "react-loader-spinner";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setIsLoading(true)
    fetch(urlMaker(pageNumber))
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setTimeout(() => setIsLoading(false), 700);
      });
  }, [pageNumber]);

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
          <TableCoin coins={coins} />
          <Pagination pageData={{ pageNumber, setPageNumber }} />
        </>
      )}
    </>
  );
}

export default HomePage;
