export function pagination(currentNumberPage, quantityPages) {
  const pages = [...Array(quantityPages).keys()].map((x) => ++x);

  return pages
    .map((page) => {
      return `<span class="js-page number__pages ${
        currentNumberPage == page ? "current-page" : ""
      }" data-number=${page}>${page}</span>`;
    })
    .join("");
}
