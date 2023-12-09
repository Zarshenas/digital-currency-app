import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
function TableCoin({ coins }) {
  console.log(coins);
  return (
    <div>
      <div
        id="table-head"
        className="px-5 py-3 w-full text-captext border border-secondbg rounded-2xl grid grid-cols-7 items-center justify-center justify-items-center"
      >
        <span>#Rank</span>
        <span>Coin</span>
        <span>Name</span>
        <span>Price</span>
        <span>24h</span>
        <span>Total Volume</span>
      </div>
      <div id="table-rows">
        {coins.map((coinData) => (
          <TableRow key={coinData.id} coin={coinData} />
        ))}
      </div>
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    market_cap_rank,
    name,
    image,
    symbol,
    id,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  },
}) => {
  return (
    <div className='bg-secondbg  rounded-xl my-6 px-4 py-3 grid grid-cols-7 items-center justify-center justify-items-center'>
      <div>
        <span>{market_cap_rank}</span>
      </div>
      <div className="flex items-center">
        <img className="w-8 h-8 mr-3" src={image} alt={id} />
        <span className="font-bold text-lg">{symbol.toUpperCase()}</span>
      </div>
      <div>
        <span className="font-bold text-lg">{name}</span>
      </div>
      <div>
        <span className="font-extralight text-lg">${current_price.toLocaleString()}</span>
      </div>
      <div>
        {price_change > 0 ? (
          <span className="text-green-400 font-extralight text-lg">{price_change}%</span>
        ) : (
          <span className="text-red-400 font-extralight text-lg">{price_change}%</span>
        )}
      </div>
      <div>
        <span className="font-extralight text-lg" >${total_volume.toLocaleString()}</span>
      </div>
      <div>
        {price_change > 0 ? (
          <img className="w-20" src={chartUp} alt={id} />
        ) : (
          <img className="w-20" src={chartDown} alt={id} />
        )}
      </div>
    </div>
  );
};
