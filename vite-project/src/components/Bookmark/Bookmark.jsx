import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Bookmark() {
  const bookmarkData = useSelector((state) => state.bookmark);

  return (
    <div>
      <h2>
        <NavLink to={"/"}>Go to Home</NavLink>
      </h2>
      <h1>Bookmarks</h1>
      {bookmarkData.bookmarks.map((val) => {
        return <h2>{val}</h2>;
      })}
    </div>
  );
}

export default Bookmark;
