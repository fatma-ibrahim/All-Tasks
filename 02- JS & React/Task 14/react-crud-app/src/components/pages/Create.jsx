import { useState } from "react";
import { addBook } from "../../services/books.service";
import { useNavigate } from "react-router-dom";
function Create() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    price: "",
    author: "",
    desc: "",
  });

  const storeBook = (event) => {
    event.preventDefault();
    if (book.title && book.price && book.author && book.desc) {
      addBook(book).then(() => {
        alert("Book Added Successfully");
        navigate("/");
      });
    } else {
      alert("Please Fill All Inputs");
      // navigate('/create')
    }
  };
  return (
    <>
      <header
        className="bg-dark my-5 py-4 rounded-4 container mx-auto w-50 
            text-center text-light"
      >
        <h2>Create New Book</h2>
      </header>

      <section className="my-5 mx-auto w-50 container">
        <form onSubmit={storeBook}>
          <div className="form-group my-2">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="price">Book Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              onChange={(e) => setBook({ ...book, price: e.target.value })}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="author">Book Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              onChange={(e) => setBook({ ...book, author: e.target.value })}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="desc">Book Description</label>
            <textarea
              className="form-control"
              id="desc"
              name="desc"
              onChange={(e) => setBook({ ...book, desc: e.target.value })}
            >
              {" "}
            </textarea>
          </div>
          <input type="submit" value="Add Book" className="btn btn-dark my-2" />
        </form>
      </section>
    </>
  );
}

export default Create;
