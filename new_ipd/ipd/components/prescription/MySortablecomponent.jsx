import React, { useRef, useEffect } from "react";

const MySortableComponent = () => {
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
    "Elderberry",
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return <SortableContainerComponent items={items} onSortEnd={onSortEnd} />;
};
export default MySortableComponent;
