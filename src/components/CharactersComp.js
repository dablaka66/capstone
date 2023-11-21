import "../css/character.css";
export default function CharactersComp({ character, showchar }) {
  const { id, name, aliases } = character;
  const mngClickcharacter = (c) => {
    showchar(character); //parameter the new character.
  };
  return (
    <div
      style={{ backgroundColor: "black" }}
      onClick={mngClickcharacter}
      className=" item-active li-item"
      id={id}
    >
      <p className="p3">{`${id}. ${name} ( ${aliases})`}</p>
    </div>
  );
}
