import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios
      .get("http://localhost:4000/book")
      .then((res) => {
        this.setState(() => ({
          books: res.data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteBook = (isbn) => {
    axios
      .delete(`http://localhost:4000/book/${isbn}`)
      .then((res) => {
        this.getBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <h1 className="list-title">List of Books</h1>
          <Link to="/add/book">
            <button>Add Book</button>
          </Link>
        </div>
        <table border={2} cellPadding={2} cellSpacing={2} className="wrapper">
          <thead>
            <th>ISBN</th>
            <th>Name</th>
            <th>Price</th>
            <th>isInStock</th>
            <th>Edition</th>
          </thead>
          <tbody>
            {this.state.books.map((book) => {
              return (
                <tr key={book.isbn}>
                  <td>
                    <Link to={`/book/${book.isbn}`}>{book.isbn}</Link>
                  </td>
                  <td>{book.name}</td>
                  <td>{book.price}</td>
                  <td>{book.isInStock === true ? "Yes" : "No"}</td>
                  <td>{book.edition}</td>
                  <td>
                    <Link to={`book/edit/${book.isbn}`}>Edit</Link> |
                    <span
                      className="delete-btn"
                      onClick={() => this.deleteBook(book.isbn)}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Books;
