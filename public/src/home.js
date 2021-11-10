function sortnSplice(arr) {
  arr.sort((entryA,entryB) => entryB.count - entryA.count)
  return arr.splice(0,5)
}

let getTotalBooksCount = books => books.length;

let getTotalAccountsCount = accounts => accounts.length;

let getBooksBorrowedCount = books => 
(borrowedCount = books.filter((book) =>
!book.borrows[0].returned).length);

let getMostCommonGenres = books => {
  const genreCount = {};
  books.forEach(({ genre }) => {
    genreCount[genre] = genreCount[genre] ? genreCount[genre] + 1 : 1;
  });
  return Object.keys(genreCount)
  .map((genre) => ({name: genre, count: genreCount[genre] }))
  .sort((genreA, genreB) => genreB.count - genreA.count)
  .slice(0,5);
  };
   
let getMostPopularBooks = books => 
books
.map(({borrows, title }) => ({name: title, count: borrows.length}))
.sort ((borrowA, borrowB) => borrowB.count - borrowA.count)
.slice(0,5);

let getMostPopularAuthors = (books, authors, count = {}) =>
sortnSplice(books.reduce((acc,book,entry) => {
  let author = authors.find(match => match.id === book.authorId).name
  acc[entry] = { name: `${author.first} ${author.last}`, count: book.borrows.length}
  return acc;
}, []))

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
