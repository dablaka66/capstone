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
              <h5 className="card-title text-bg-primary ">{`${name}`}</h5>
              <p className="card-text">Play by {playedBy}</p>
            </div>
          </div>
          <div className="character-info-container">
            <div className="character-info">
              <h1>{`${name}`}</h1>
              <h3>{`${born}-${died}`}</h3>
              <h3>{`(${aliases})`}</h3>
              <h3>{` ${culture} `}</h3>
            </div>
            <div className="character-info">
              <div>
                <div className="titles">
                  <h3 className="titles">
                    {titles.length !== 0 ? "Titles:" : "No titles found"}
                  </h3>
                </div>
                <ul className="">
                  {titles.map((t) => {
                    return (
                      <li className="">
                        <h3>{`${t}`}</h3>
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
