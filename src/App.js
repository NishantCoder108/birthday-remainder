import "./App.css";
import List from "./List";
import data from "./data";
import { useState } from "react";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main className="main">
      <section className="container">
       <h3>{people.length} birthdays today</h3> 
        <List peoples={people} />
        <button className="button" onClick = {() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
