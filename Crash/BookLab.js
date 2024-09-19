// Book class definition
class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    // Method to return book's information as a string
    getInfo() {
      return `${this.title} by ${this.author}, published in ${this.year} - Genre: ${this.genre}`;
    }
  }
  
  // Factory function to create a new book
  function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
  }
  
  // Library class definition
  class Library {
    constructor() {
      this.books = []; // Initializes an empty array of books
    }
  
    // Method to add a new book to the collection
    addBook(book) {
      this.books.push(book);
    }
  
    // Method to filter books published after a given year
    filterBooksByYear(year) {
      return this.books.filter(book => book.year > year);
    }
  
    // Method to return an array of all book titles
    getAllBookTitles() {
      return this.books.map(book => book.title);
    }
  
    // Method to calculate the total number of books
    getTotalBooks() {
      return this.books.reduce((total, book) => total + 1, 0);
    }
  
    // Method to calculate the average publication year of all books
    getAveragePublicationYear() {
      if (this.books.length === 0) return 0;
      const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
      return totalYears / this.books.length;
    }
  }
  
  // Example usage:
  
  // Creating a Library instance
  let myLibrary = new Library();
  
  // Adding books using the factory function
  myLibrary.addBook(createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel"));
  myLibrary.addBook(createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"));
  myLibrary.addBook(createBook("1984", "George Orwell", 1949, "Dystopian"));
  myLibrary.addBook(createBook("The Catcher in the Rye", "J.D. Salinger", 1951, "Fiction"));
  
  // Display all book titles
  console.log("All book titles:", myLibrary.getAllBookTitles());
  
  // Filter books published after 1950
  console.log("Books published after 1950:", myLibrary.filterBooksByYear(1950).map(book => book.getInfo()));
  
  // Get the total number of books
  console.log("Total number of books:", myLibrary.getTotalBooks());
  
  // Calculate the average publication year of all books
  console.log("Average publication year:", myLibrary.getAveragePublicationYear());
  