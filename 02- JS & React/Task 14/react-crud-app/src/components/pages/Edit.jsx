import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook, updateBook } from "../../services/books.service";
import { useNavigate } from "react-router-dom";
function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    id: id,
    title: "",
    price: "",
    author: "",
    desc: "",
  });

  useEffect(() => {
    getBook(id).then((res) => setBook(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(id, book).then(() => {
      alert("Book Updated Successfully !");
      navigate("/");
    });
  };

  return (
    <>
      <header className="bg-success my-5 py-4 rounded-4 container mx-auto w-50 text-center text-light">
        <h2>Edit Book</h2>
      </header>

      <section className="my-5 mx-auto w-50 container">
        <form onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={(e) => setBook({ ...book, title: e.target.value })}
              value={book.title}
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
              value={book.price}
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
              value={book.author}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="desc">Book Description</label>
            <textarea
              className="form-control"
              id="desc"
              name="desc"
              onChange={(e) => setBook({ ...book, desc: e.target.value })}
              value={book.desc}
            >
              {" "}
            </textarea>
          </div>
          <input
            type="submit"
            value="Edit Book"
            className="btn btn-success my-2"
          />
        </form>
      </section>
    </>
  );
}

export default Edit;
