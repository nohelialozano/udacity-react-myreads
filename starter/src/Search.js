import Books from "./Books";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ books, searchedBooks, updateBookShelf }) => {  

    const [query, setQuery] = useState ("");

    const updateQuery = (query) => {
        setQuery(query);
        searchedBooks(query.toLowerCase());
    }

    const updateCategory = (book, shelf) => {
        updateBookShelf(book, shelf);
    }

    return(<div> 
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search"> 
                Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                <Books booksbycategory={books} updateBookShelf={updateCategory}/>
            </ol>
          </div>
        </div>
    </div>);
};

export default Search;