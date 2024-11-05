export function filtersParams(searchParams) {
  const sortBy = searchParams.get("price") || false;

  // const startPriceRange = searchParams.get('from') || false

  const priceRange = searchParams.get("range")?.split("-") || false;

  let startPriceRange;
  let priceRange1;
  let priceRange2;

  if (priceRange === false || priceRange === undefined || priceRange === null) {
    startPriceRange = false;
    priceRange1 = false;
    priceRange2 = false;
  }

  if (priceRange?.length === 1) {
    startPriceRange = priceRange[0];
  } else if (priceRange?.length === 2) {
    priceRange1 = priceRange[0];
    priceRange2 = priceRange[1];
  }

  // console.log("head = " + priceRange)
  // console.log("1 = "+priceRange1 )
  // console.log("2 = "+priceRange2)
  // console.log("start = " +startPriceRange)

  return { sortBy, startPriceRange, priceRange1, priceRange2, priceRange };
}
