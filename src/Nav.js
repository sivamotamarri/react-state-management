import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      <p>Movies Count : {movies.length}</p>
    </div>
  );
};

export default Nav;
