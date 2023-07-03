# MyReads Project

This project is a book sorting and API search application built using React, as part of the Udacity course. The main objective of this application is to provide users with a platform to organize their books based on their reading status (read, want to read, or currently reading), as well as to search for new books using an external API.

# Features

Book Sorting: The application allows users to categorize their books into three main shelves: "Currently Reading", "Want to Read", and "Read". Users can easily move books between these shelves using a dropdown functionality.

Search Books: The application provides a search functionality that enables users to explore a vast collection of books through an external API. Users can enter keywords or phrases in the search bar, and the application will display a list of relevant books. Users can then add any desired books to their personal shelves.

## Getting Started

To run the application on your local machine, follow these steps:

1. Clone the repository: git clone "https://github.com/nohelialozano/udacity-react-myreads.git"
2. Navigate to the project directory: cd starter
3. Install the required dependencies: npm install
3. Start the development server: npm start
4. Open your web browser and visit http://localhost:3000 to access the application.

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. Contains the books and searchBooks states to pass to the routes, and also the functions we need to manage the books (update and search).
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── MyReads.js # A JavaScript that contains the Shelfs information including the  HTML and the Books component call
    ├── Books.js # A JavaScript that maps the books by calling the Book component
    ├── Book.js # A JavaScript that contains each book's information
    ├── Search.js # A JavaScript component which contains the Search HTML
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # It has the implementation of <BrowserRouter> which allows us to manage the links through the site
```
## Contributing

Contributions to this project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the project's GitHub repository. You can also fork the repository, make your changes, and submit a pull request.

## Authors

* **Nohelia Lozano** - *Initial work* - [Udacity](https://github.com/udacity/nd0191-c1-myreads.git)

## Acknowledgements

This project was completed as part of the Udacity course, which provided the necessary guidelines and materials. Thanks to the instructors and mentors for their support and guidance throughout the course.

Please note that this project is for educational purposes only and does not intend to infringe upon any copyrights or intellectual property. The external API usage is subject to the terms and conditions provided by the API provider.