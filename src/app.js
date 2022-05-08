import React from "react"
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./Pet";


// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),

//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),

//     React.createElement(Pet, {
//       name: "Lussi",
//       animal: "Bitch",
//       breed: "Pitbul",
//     }),

//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Bird",
//       breed: "Cockteil",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Lussi" animal="Bitch" breed="Cockteil" />
      <Pet name="Sillu" animal="Dog" breed="Jarmen Sefherd" /> */}
      <SearchParams />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
