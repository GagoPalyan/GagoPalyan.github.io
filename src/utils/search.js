export const searchFunc = (search, filter, products) => {
  return search != ""
    ? products.filter((obj) =>
        filter == ""
          ? obj.name.toLowerCase().indexOf(search.toLowerCase()) > -1
          : obj.category.toUpperCase() == filter.toUpperCase() &&
            obj.name.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    : filter != ""
    ? products.filter(
        (obj) => obj.category.toUpperCase() == filter.toUpperCase()
      )
    : products;
};
