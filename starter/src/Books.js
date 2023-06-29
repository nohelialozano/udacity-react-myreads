import Book from "./Book";

const Books = ({ booksbycategory, updateBookShelf }) => { 

    const updateCategory = (book, shelf) => {
        updateBookShelf(book, shelf);
    }

    return (
        <ol className="books-grid">
            {booksbycategory.length > 0 ?
                booksbycategory.map((book) =>
                    <Book key={book.id} book={book} updateBookShelf={updateCategory}/>
                ): null
            }
        </ol>
    );
}

export default Books;