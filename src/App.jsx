import React from "react";
import Pokedex from "./Pokedex";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex />
    </div>
  );
}

export default App;



// import React from "react";
// import Pokecard from "./Pokecard";

// function App() {
//   const sample = {
//     id: 4,
//     name: "Charmander",
//     type: "fire",
//     base_experience: 62
//   };

//   return (
//     <div>
//       <h1>Pokedex Test</h1>
//       <Pokecard {...sample} />
//     </div>
//   );
// }

// export default App;
