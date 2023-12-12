function RegionConfig({ regionData: { region, setRegion } }) {
  const regionHandler = (e) => {
    setRegion(e.target.value)
  };
  return (
    <>
      <select
      value={region}
        onChange={regionHandler}
        className=" focus:outline-none bg-mainbg border border-secondbg text-sm rounded-lg focus:ring-theme-color focus:border-theme-color block w-32 p-2.5 "
      >
        <option  value="usd">
          USD
        </option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
        <option value="bnb">BNB</option>
      </select>
    </>
  );
}

export default RegionConfig;
