import React, { useEffect, useState } from "react";
import getCharacters from "../services/getCharacters";
import { json } from "react-router-dom";
import CharactersComp from "../components/CharactersComp";
import getIdCodeFromUrl from "../services/getIdCodeFromUrl";
import "../css/pages.css";
import ExpCharactersComp from "../components/ExpCharaterComp";
import setId from "../services/SetId";
import "../css/character.css";

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
        <div className="contenedor">
          <div className="izquierda">
            <div className="contenedor">
              <button type="button" className="button" onClick={mngBefore}>
                Before
              </button>
              <button type="button" h className=" button " onClick={mngNext}>
                Next
              </button>
              <button type="button" className="button" onClick={mngGetMore}>
                Get More
              </button>
              {/*  <h6 className="">pag requested: {reqPage}</h6>
              <h6>page: {showPage}</h6> */}
            </div>
            <h3 className="sub-title">Characters:</h3>
            <div className="list-box">
              {characters.map((c) => {
                let str = c.url;

                let id = getIdCodeFromUrl(str);
                c = { ...c, id: id };

                return (
                  <>
                    <CharactersComp character={c} showchar={showCharacter} />
                  </>
                );
              })}
            </div>
          </div>

          <div className=" derecha contenedor ">
            <ExpCharactersComp character={charSelected} />
          </div>
        </div>
      </div>
    </>
  );
}
