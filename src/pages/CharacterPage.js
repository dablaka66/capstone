import React, { useEffect, useState } from "react";
import getCharacters from "../services/getCharacters";
import { json } from "react-router-dom";
import CharactersComp from "../components/CharactersComp";
import getIdCodeFromUrl from "../services/getIdCodeFromUrl";
import pages from "../css/pages.css";
import ExpCharactersComp from "../components/ExpCharaterComp";
import setId from "../services/SetId";

export default function CharacterPage() {
  const char = { name: "", born: "", died: "", alias: "", url: "" };
  const [characters, setCharacters] = useState([char]);
  const [characterPag, setCharacterPag] = useState([]);
  const [charSelected, setCharSelected] = useState([char]);
  let [showPage, setShowPage] = useState(0);
  let [reqPage, setReqPage] = useState(1);
  const size = 10;

  async function getmorecharacters() {
    let newCharacters = await getCharacters(reqPage, size);
    setId(newCharacters);

    setCharacters(newCharacters);
    setCharacterPag([...characterPag, newCharacters]);
  }
  const mngGetMore = () => {
    getmorecharacters();
    setReqPage((page) => page + 1);
    setShowPage((page) => page + 1);
  };

  const mngBefore = () => {
    if (showPage > 0) {
      setShowPage((page) => page - 1);
      setCharacters(characterPag[showPage - 1]);
    }
  };
  const mngNext = () => {
    if (showPage < reqPage) {
      setShowPage((page) => page + 1);
      setCharacters(characterPag[showPage]);
    }
  };
  const showCharacter = (char) => {
    setCharSelected(char);
  };

  useEffect(() => {
    mngGetMore();
  }, []);

  return (
    <>
      <div className="contenedor">
        <div className="contenedor row">
          <div className="contenedor">
            <button
              type="button"
              className="btn btn-primary"
              onClick={mngBefore}
            >
              before
            </button>
            <button
              type="button"
              h
              className="btn btn-primary"
              onClick={mngNext}
            >
              Next
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={mngGetMore}
            >
              get More
            </button>
            <h6 className="">pag requested: {reqPage}</h6>
            <h6>page: {showPage}</h6>
          </div>
          <div className="izquierda container p-2  ">
            <h3>Characters:</h3>
            <div className="">
              {characters.map((c) => {
                let str = c.url;

                let id = getIdCodeFromUrl(str);
                c = { ...c, id: id };

                return (
                  <>
                    <ul className=" li-item">
                      <li className="li-item" key={c.id}>
                        <CharactersComp
                          character={c}
                          showchar={showCharacter}
                        />
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>

          <div className=" derecha col container flex-shrink p-2  g-col-4">
            <ExpCharactersComp character={charSelected} />
          </div>
        </div>
      </div>
    </>
  );
}
