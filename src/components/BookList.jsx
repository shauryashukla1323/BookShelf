import React, { useState, useEffect } from "react";
import "../App";
import { API_URL } from "../API";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";
const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favourite, addToFavourite, removeFromFavourite } = useAppContext();

  const navigate = useNavigate();
  const favouriteChecker = (id) => {
    const boolean = favourite.some((book) => book.id == id);
    return boolean;
  };
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img
              src={book.image_url}
              alt="#"
              onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            {favouriteChecker(book.id) ? (
              <button
                onClick={() => removeFromFavourite(book.id)}
                className="button2">
                Remove From Bookshelf
              </button>
            ) : (
              <button onClick={() => addToFavourite(book)} className="button2">
                Add to Bookshelf
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
