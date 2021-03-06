import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
// import { Component } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField]);

  const onSearchChnage = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    // setting the input field value in state
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChnage}
        placeholder="search monsters"
        className="search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   //fetching the users from api
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   onSearchChnage = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     // setting the input field value in state
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   //rendering the elements

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChnage } = this;
//     //this variable contains the filtered monsters according to the input values
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     //returnin the actual element

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChnage}
//           placeholder="search monsters"
//           className="search-box"
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
