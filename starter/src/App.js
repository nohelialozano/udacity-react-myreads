import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksApi from "./BooksAPI"; // importing the API
import MyReads from "./MyReads";
import Search from "./Search";

function App() {

  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksApi.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  const updateBookShelf = (book, shelf) => {
    BooksApi.update(book, shelf);
    setBooks(books.filter(b => b.id !== book.id).concat({...book, shelf}));
    setSearchBooks(searchBooks.filter(b => b.id !== book.id).concat({...book, shelf}));
  };

  const clearSearchBooks = () => {
    setSearchBooks([]);
  }

  const searchedBooks = (query) => {
    if(query !== ""){
      const getSearchedBooks = async () => {
        const queryBooks = await BooksApi.search(query);
        if(!queryBooks["error"]){
          const finalbooks = () => queryBooks.map((searchBook) => {
              const bookOnShelf = books.find(({id}) => searchBook.id === id );
              const shelf = bookOnShelf ? bookOnShelf.shelf : 'noneShelf';
              return {
                ...searchBook,
                shelf: shelf
              }
          });
          setSearchBooks(finalbooks());
        }else{
          setSearchBooks([]);
        }
      };
      getSearchedBooks();
    }else{
      setSearchBooks([]);
    }
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <MyReads books={books} updateBookShelf={updateBookShelf} clearSearchBooks={clearSearchBooks}/>
      }/>
      <Route path="/search" element={
        <Search books={searchBooks} searchedBooks={searchedBooks} updateBookShelf={updateBookShelf}/>
      }/>
    </Routes>
  );
}

export default App;
