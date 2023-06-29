import Books from "./Books";
import { Link } from "react-router-dom";

const MyReads = ({ books, updateBookShelf, clearSearchBooks }) => {  

    const shelfs = [
        {
          id: "currentlyReading",
          name: "Currently Reading",
        },
        {
          id: "wantToRead",
          name: "Want to Read",
        },
        {
          id: "read",
          name: "Read",
        }
    ];

    const updateCategory = (book, shelf) => {
        updateBookShelf(book, shelf);
    }

    const clearSearch = () => {
        clearSearchBooks();
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfs.map((shelf) => {
                return (
                    <div key={shelf.name} className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.name}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <Books booksbycategory={books.filter((book) => book.shelf === shelf.id)} updateBookShelf={updateCategory}/>
                        </ol>
                    </div>
                    </div>   
                );            
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" onClick={clearSearch} className="open-search"> 
            Add a book
          </Link>
        </div>
      </div>
    );
}

export default MyReads;