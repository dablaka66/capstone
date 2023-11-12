import React from "react";

export default function FilterItems(props) {
  let id = props.id;
  return (
    <div
      className="filterItem"
      key={props.key}
      id={props.id}
      onClick={async () => {
        await props.getSelectedCharacter(id);
      }}
    >
      {props.item}
    </div>
  );
}
