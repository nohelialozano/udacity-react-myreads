import PropTypes from "prop-types";

const Book = ({ book, updateBookShelf }) => { 

    const updateCategory = (shelf) => {
        updateBookShelf(book, shelf);
    }

    const img = () => {
        let thumbnail = "";

        if(book.hasOwnProperty('imageLinks') === true){
            thumbnail = book.imageLinks.thumbnail;
        }
        return thumbnail;
    }

    return (                 
        <li key={book.id}>
            
            <div className="book">
                <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                        'url('+img()+')',
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select value={book.hasOwnProperty('shelf') === true ? book.shelf : "noneShelf"} onChange={(event) => updateCategory(event.target.value)}>
                        <option value="none" disabled="disabled">
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="noneShelf">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
}

export default Book;