import ListGroup from "./components/ListGroup";

function App() {
    let items = ["Mars", "Saturn", "Earth", "Venus", "Mercury"];
    const handleSelectItem =(item: string) => {
        console.log(item);
    }
  
  return (
    <div>
      <ListGroup items={items} heading={'Planets'} onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
