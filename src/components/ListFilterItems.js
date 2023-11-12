import React from "react";
import FilterItems from "./FilterItems";

export default function ListFilterItems(props) {
  const { items, getSelectedCharacter } = props;

  const listItems = items?.map((item) => (
    <FilterItems
      key={item.id}
      id={item.id}
      item={item.name}
      getSelectedCharacter={getSelectedCharacter}
    />
  ));
  const content = listItems?.length ? listItems : <div>No Matching items</div>;

  return <div>{content}</div>;
}
