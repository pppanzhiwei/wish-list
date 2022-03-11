const isEmptyArray = (arr) => {
  return arr.length === 0 ? true : false;
};

const formatDate = (time) => {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.gerDate();
  return `${year}-${month}-${day}`;
};

export { isEmptyArray, formatDate };
