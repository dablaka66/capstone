import getMainOnesData from "../services/getMainOnesData";
import "../css/character.css";
import getIdCodeFromUrl from "../services/getIdCodeFromUrl";
import getLocalImage from "../services/getLocalimage";

export default function ExpCharactersComp({ character }) {
  //**************** */
  const charImg = require.context("../images/Characters", true);
  console.log("type of  ", typeof character);

  const { name, aliases, culture, born, died, titles, playedBy, books } =
    character;
  let imageUrl;

  if (typeof name !== "undefined") {
    //imageUrl = getMainOnesData(name);looking image from web
    imageUrl = getLocalImage(name, "characters");
    console.log("imageUrl: from character", imageUrl);
    // these statements execute
  } else {
    return (
      <div>
        <h4>no available yet</h4>
      </div>
    );
  }

  console.log("imageUrl", imageUrl);
  return (
    <>
      <div className="character">
        <div className="character-first-row">
          <div className="character-image-container">
            <div className="imagen">
              <img
                src={charImg(`./${imageUrl}`)}
                className="imagen"
                alt={`${name}`}
              />
            </div>
            <div className="card-body">
              <div className="text-bg-primary p1 ">{`${name}`}</div>
              <div className="p2">Play by {playedBy}</div>
            </div>
          </div>
          <div className="character-info-container">
            <div className="character-info">
              <div className="P1">{`${name}`}</div>
              <div clasName="p2">{`${born}-${died}`}</div>
              <div clasName="p2">{`(${aliases})`}</div>
              <div clasName="p2">{` ${culture} `}</div>
            </div>
            <div className="character-info">
              <div>
                <div className="titles">
                  <div className="titles">
                    {titles.length !== 0 ? "Titles:" : "No titles found"}
                  </div>
                </div>
                <ul className="">
                  {titles.map((t) => {
                    return (
                      <li className="">
                        <div className="p3">{`${t}`}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="character-second-row">
          <div className="list-books">
            {books.map((b) => {
              return (
                <div className="books">
                  <img
                    src={require(`../images/books/GOTbook${getIdCodeFromUrl(
                      b
                    )}.jpg`)}
                    className="imagen"
                    alt={``}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
