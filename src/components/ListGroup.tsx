function ListGroup() {
  let items = ["Mars", "Saturn", "Earth", "Venus", "Mercury"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No items to display</p> : null}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
