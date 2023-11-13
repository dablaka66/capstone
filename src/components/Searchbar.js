import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Search from "../css/search.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const Searchbar = ({ items, setSearchResult, val }) => {
  console.log("val: ", val.name);
  const [search, setSearch] = useState(val.name);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResult(items);
    const resultsArray = items.filter(
      (x) =>
        x.name.toLowerCase().slice(0, e.target.value.length) ==
          e.target.value.length ||
        x.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResult(resultsArray);
  };
  const manageEnter = (e) => {
    return handleSubmit;
  };

  return (
    <div className="contenedor">
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
          value={search}
          val={(val) => {
            console.log("val: in sideval ", val);
            setSearch(val.name);
          }}
        />
        <b> </b>
        <button className="search__button" onClick={manageEnter}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};
