import ListGroup from "./components/ListGroup";

function App() {
    let items = ["Mars", "Saturn", "Earth", "Venus", "Mercury"];
  
  return (
    <div>
      <ListGroup items={items} heading={'Planets'}/>
    </div>
  );
}

export default App;
