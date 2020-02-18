import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "raja",
      price: "$10",
      id: 10922
    },
    {
      name: "siva",
      price: "$30",
      id: 109221
    },
    {
      name: "ranam",
      price: "$20",
      id: 109222
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
