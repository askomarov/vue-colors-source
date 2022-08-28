export function normalizeData(arr) {
  return arr.map((product, index) => {
    product.id = Date.now() + index;
    return product;
  });
}

export function getNubmerFromPrice(str) {
  return str.split(" ")[0];
}

export function sortByAscendingPrice(arr) {
  return arr.sort((prev, next) => {
    console.log(prev.price);
    return getNubmerFromPrice(next.price) - getNubmerFromPrice(prev.price);
  });
}

export function sortByDescendingPrice(arr) {
  return arr.sort((prev, next) => {
    return getNubmerFromPrice(prev.price) - getNubmerFromPrice(next.price);
  });
}

export function arraysContainSame(a, b) {
  a = Array.isArray(a) ? a : [];
  b = Array.isArray(b) ? b : [];
  return a.every((el) => b.includes(el));
}
