import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../../services/books.service";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  };

  const onDeleteBook = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      deleteBook(id)
        .then(() => {
          alert("Book Deleted Successfully");
          setBooks(books.filter((book) => book.id !== id));
        })
        .catch((err) => console.error("Error deleting book:", err));
    }
  };

  return (
    <>
      <header className="bg-dark my-5 py-4 rounded-4 container mx-auto w-50 text-center text-light">
        <h2>Books List</h2>
      </header>

      <section className="my-5 container text-center">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="fw-bolder fs-5">Id</th>
              <th className="fw-bolder fs-5">Title</th>
              <th className="fw-bolder fs-5">Price</th>
              <th className="fw-bolder fs-5">Author</th>
              <th className="fw-bolder fs-5">Description</th>
              <th className="fw-bolder fs-5">Actions</th>
            </tr>
          </thead>
          {books.length > 0 && (
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.price}</td>
                  <td>{book.author}</td>
                  <td>{book.desc}</td>
                  <td>
                    <Link
                      to={`/${book.id}`}
                      className="btn btn-sm btn-primary mx-1"
                    >
                      Show
                    </Link>
                    <Link
                      to={`/edit/${book.id}`}
                      className="btn btn-sm btn-success mx-1"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger mx-1"
                      onClick={() => onDeleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </section>
    </>
  );
}

export default Home;
