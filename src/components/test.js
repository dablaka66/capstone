import React from "react";

export default function test() {
  return (
    <ted>
      <div className="list-group accordion-item">
        <h2
          className="list-group-item active accordion-header"
          aria-current="true"
        >
          {`${c.name} esto es test`}{" "}
        </h2>

        <CharactersComp className="accordion-collapse collapse" character={c} />
      </div>
    </ted>
  );
}
