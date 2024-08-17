import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBook } from "../../services/books.service";

function Details() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getBook(id).then((res) => setBook(res.data));
  }, []);

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <header
        className="bg-dark my-5 py-4 rounded-4 container mx-auto w-50 
            text-center text-light"
      >
        <h2>Books List</h2>
      </header>

      <section className="my-5 container text-center w-50 mx-auto">
        <h2> Book Title : {book.title}</h2>
        <hr />
        <div className="alert alert-info py-3">
          Book Price : {book.price} Created By
          <strong> {book.author}</strong>
        </div>
        <p>{book.desc}</p>
        <button className="btn btn-dark my-2" onClick={redirectToHome}>
          Return to home
        </button>
      </section>
    </>
  );
}

export default Details;
