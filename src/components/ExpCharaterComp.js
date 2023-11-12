import getMainOnesData from "../services/getMainOnesData";
import "./character.css";
import getIdCodeFromUrl from "../services/getIdCodeFromUrl";
import getLocalImage from "../services/getLocalimage";

export default function ExpCharactersComp({ character }) {
  //**************** */
  const charImg = require.context("../images/Characters", true);
  console.log("charImg: ", charImg);

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
      <div>
        <div classMame="Character__info">
          <h1>{`${name}`}</h1>
          <h3>{`${born}-${died}`}</h3>
          <h3>{`(${aliases})`}</h3>
          {` ${culture} `}
        </div>
        <div>
          <div className="Character__info ">
            <div className="card w-20 infounit" style={{ maxWidth: "18rem" }}>
              <img
                src={charImg(`./${imageUrl}`)}
                className="imagen"
                alt={`${name}`}
              />
              <div className="card-body">
                <h5 className="card-title text-bg-primary mb-5">{`${name}`}</h5>
                <p className="card-text">Play by {playedBy}</p>
              </div>
            </div>
            <div className="card w-20 infounit ">
              <div className="titles">
                <h5 className="card-title ">
                  {titles.length !== 0 ? "Titles:" : "No titles found"}
                </h5>
              </div>
              <ul className="">
                {titles.map((t) => {
                  return (
                    <li className="li-item">
                      <h5>{`${t}`}</h5>
                    </li>
                  );
                })}
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Character__info">
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
    </>
  );
}
