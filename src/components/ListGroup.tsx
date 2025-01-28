import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {/* {item} */}
            <button 
              className="btn btn-primary list-group-item-action"
              onClick={(e) => {
                e.stopPropagation();
                console.log(`Button clicked for ${item}`, index);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;