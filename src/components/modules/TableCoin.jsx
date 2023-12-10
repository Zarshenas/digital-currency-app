import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
function TableCoin({ coins }) {
  console.log(coins);
  return (
    <div>
      <div
        id="table-head"
        className="px-5 py-3 text-captext border border-secondbg rounded-2xl grid grid-cols-12 items-center justify-items-center"
      >
        <span className="col-start-1 col-end-2">#Rank</span>
        <span className="col-start-2 col-end-4">Coin</span>
        <span className="col-start-4 col-end-7">Name</span>
        <span className="col-start-7 col-end-8">Price</span>
        <span className="col-start-8 col-end-10">24h</span>
        <span className="col-start-10 col-end-13">Total Volume</span>
        <span className="col-start-13 col-end-14 w-20"></span>
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
    <div className='bg-secondbg  rounded-xl my-6 px-5 py-3 grid grid-cols-12 items-center justify-items-center'>
      <div className="col-start-1 col-end-2">
        <span>{market_cap_rank}</span>
      </div>
      <div className="flex items-center w-max col-start-2 col-end-4">
        <img className="w-8 h-8 mr-3" src={image} alt={id} />
        <span className="font-bold text-lg">{symbol.toUpperCase()}</span>
      </div>
      <div className="col-start-4 col-end-7">
        <span className="font-bold text-lg w-max ">{name}</span>
      </div>
      <div className="col-start-7 col-end-8">
        <span className="font-extralight text-lg">${current_price.toLocaleString()}</span>
      </div>
      <div className="col-start-8 col-end-10">
        {price_change > 0 ? (
          <span className="text-green-400 font-extralight text-lg">{price_change.toFixed(4)}%</span>
        ) : (
          <span className="text-red-400 font-extralight text-lg">{price_change.toFixed(4)}%</span>
        )}
      </div>
      <div className="col-start-10 col-end-13">
        <span className="font-extralight text-lg w-max" >${total_volume.toLocaleString()}</span>
      </div>
      <div className="col-start-13 col-end-14">
        {price_change > 0 ? (
          <img className="w-20" src={chartUp} alt={id} />
        ) : (
          <img className="w-20" src={chartDown} alt={id} />
        )}
      </div>
    </div>
  );
};
