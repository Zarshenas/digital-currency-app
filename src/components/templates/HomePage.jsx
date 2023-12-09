import { useEffect, useState } from "react";
import { urlMaker } from "../../services/GetCoinList";
import TableCoin from "../modules/TableCoin";


function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(urlMaker())
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return<TableCoin coins={coins}/>;
}

export default HomePage;
