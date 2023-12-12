function Pagination({ pageData: { pageNumber, setPageNumber } }) {
  const decreasePageHandler = () => {
    if (pageNumber !== 1) {
      setPageNumber((prevPage) => prevPage - 1);
    } else {
      return;
    }
  };

  const increasePageHandler = () => {
    if (pageNumber < 20) {
      setPageNumber((prevPage) => prevPage + 1);
    } else {
      return;
    }
  };
  return (
    <div className="my-16 mx-auto flex justify-center">
      <button
        className={"button-primary w-24 disabled:button-disabled"}
        disabled={pageNumber === 1}
        onClick={decreasePageHandler}
      >
        Previous
      </button>
      <button
        className={pageNumber === 1 ? "button-primary" : "button-secondary"}
        onClick={() => setPageNumber(1)}
      >
        1
      </button>
      <button
        className={pageNumber === 2 ? "button-primary" : "button-secondary"}
        onClick={() => setPageNumber(2)}
      >
        2
      </button>
      {pageNumber > 2 && pageNumber < 18 ? (
        <>
          <span>...</span>
          <button className="button-primary">{pageNumber}</button>
          <span>...</span>
        </>
      ) : (
        <span>...</span>
      )}
      <button
        className={pageNumber === 19 ? "button-primary" : "button-secondary"}
        onClick={() => setPageNumber(19)}
      >
        19
      </button>
      <button
        className={pageNumber === 20 ? "button-primary" : "button-secondary"}
        onClick={() => setPageNumber(20)}
      >
        20
      </button>
      <button
        className={"button-primary w-24 disabled:button-disabled"}
        disabled={pageNumber === 20}
        onClick={increasePageHandler}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
