const CountryInfo = ({ x, y, z }) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const res = Array.isArray(y) ? (
    <div>
      <span className="font-semibold">{x}: </span>
      {y.map((item) => {
        return z ? (
          <span key={item.name} className="font-light">
            {item.name},{" "}
          </span>
        ) : (
          <span key={item} className="font-light">
            {item}
          </span>
        );
      })}
    </div>
  ) : (
    <div>
      <span className="font-semibold">{x}: </span>
      {typeof y === "number" ? formatNumber(y) : y}
    </div>
  );

  return <>{res}</>;
};

export default CountryInfo;
