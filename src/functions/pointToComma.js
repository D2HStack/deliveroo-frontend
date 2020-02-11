const pointToComma = num => {
  if (typeof num === "string") {
    const strComma = num.replace(".", ",");
    return strComma;
  } else if (typeof num === "number") {
    const str = num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      useGrouping: false
    });
    const strComma = str.replace(".", ",");
    return strComma;
  }
};

export default pointToComma;
