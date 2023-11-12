import "./character.css";
export default function CharactersComp({ character, showchar }) {
  const { id, name, aliases } = character;
  const mngClickcharacter = (c) => {
    showchar(character); //parameter the new character.
  };
  return (
    <div
      style={{ backgroundColor: "black" }}
      onClick={mngClickcharacter}
      className=" active list-box "
      id={id}
    >
      <h5>{`${id}. ${name} ( ${aliases})`}</h5>
    </div>
  );
}
