const CountryInfo = ({ x, y, z }) => {
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const formatListItems = () => {
    return z
      ? y.map((item) => item.name).join(", ")
      : y.map((item) => item).join(", ");
  };

  const res = Array.isArray(y) ? (
    <div>
      <span className="font-semibold">{x}: </span>
      {formatListItems() || "none"}
    </div>
  ) : (
    <div>
      <span className="font-semibold">{x}: </span>
      {typeof y === "number" ? formatNumber(y) : y || "none"}
    </div>
  );

  return <>{res}</>;
};

export default CountryInfo;
