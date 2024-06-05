import { createContext, useContext } from "react";
import { useState } from "react";
const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Appcontext must be written app contextprovider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const addToFavourite = (book) => {
    const oldFavourite = [...favourite];
    const newFavourite = oldFavourite.concat(book);
    setFavourite(newFavourite);
  };
  const removeFromFavourite = (id) => {
    const oldFavourite = [...favourite];
    const newFavourite = oldFavourite.filter((book) => book.id !== id);
    setFavourite(newFavourite);
  };
  return (
    <AppContext.Provider
      value={{ favourite, addToFavourite, removeFromFavourite }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
