import { useEffect, useState } from "react";
import { urlMaker } from "../../services/GetCoinList";
import TableCoin from "../modules/TableCoin";
import { Triangle } from "react-loader-spinner";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(urlMaker())
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setTimeout(() => setIsLoading(false), 1500);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Triangle
          height="200"
          width="200"
          color="#A259FF"
          ariaLabel="triangle-loading"
          wrapperClass='flex justify-center mt-52'
        />
      ) : (
        <TableCoin coins={coins} />
      )}
    </>
  );
}

export default HomePage;
