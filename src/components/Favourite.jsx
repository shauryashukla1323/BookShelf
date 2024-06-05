import React from "react";
import "../App";
import { useAppContext } from "./context/appContext";
const Favourite = () => {
  const { favourite, addToFavourite, removeFromFavourite } = useAppContext();
  console.log("favourite are", favourite);

  const favouriteChecker = (id) => {
    const boolean = favourite.some((book) => book.id == id);
    return boolean;
  };

  return (
    <div className="favourite">
      {favourite.length > 0 ? (
        favourite.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favouriteChecker(book.id) ? (
                <button
                  onClick={() => removeFromFavourite(book.id)}
                  className="button2">
                  Remove From Bookshelf
                </button>
              ) : (
                <button
                  onClick={() => addToFavourite(book)}
                  className="button2">
                  Add to Bookshelf
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any book in bookshelf</h1>
      )}
    </div>
  );
};

export default Favourite;
