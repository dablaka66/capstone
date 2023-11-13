import { useState, useEffect } from "react";
import getIdCodeFromUrl from "../services/getIdCodeFromUrl";
import CharacterData from "../data/charactersData.js";
import FilterItems from "../components/FilterItems.js";
import { Searchbar } from "../components/Searchbar";
import ListFilterItems from "../components/ListFilterItems";
import ExpCharactersComp from "../components/ExpCharaterComp";
import getOneCharacter from "../services/getOneCharecter";

export default function SearchPage() {
  const [items, setItems] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [characterId, setCharacterId] = useState("0");
  const [charSelected, setCharSelected] = useState({});
  const [valFromItems, setvalFromItems] = useState("");
  useEffect(() => {
    const x = CharacterData;
    const names = [];
    for (const n of x) {
      if (n.name == "") {
        names.push({ name: n.aliases[0], id: getIdCodeFromUrl(n.url) });
      } else {
        names.push({ name: n.name, id: getIdCodeFromUrl(n.url) });
      }
    }
    //sort by name  the objects in the array names.
    names.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    setItems(names);
  }, []);
  const getSelectedCharacter = async function (id) {
    const newchar = await getOneCharacter(id);
    setCharSelected(newchar);
    console.log("newchar: ", newchar);
    setCharacterId(id);
  };

  const setValueSearchBar = ({ name, id }) => {
    setvalFromItems(name);
  };

  return (
    <>
      <div className="contenedor">
        <h1>SearchPage</h1>
        <Searchbar
          items={items}
          setSearchResult={setSearchResult}
          val={charSelected}
        />
        <ListFilterItems
          items={searchResult}
          getSelectedCharacter={getSelectedCharacter}
        />
      </div>
      <div className="contenedor">
        <h1>character:</h1>
        <ExpCharactersComp character={charSelected} />
      </div>
    </>
  );
}
