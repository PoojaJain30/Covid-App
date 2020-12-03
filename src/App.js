import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      usStates: [],
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value }
    );
  };

  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/states")
      .then((response) => response.json())
      .then((data) => this.setState({ usStates: data }, console.log(data)));
  }

  render() {
    const { usStates, searchField } = this.state;
    const filterState = usStates.filter((data) => data.state.toLowerCase().includes(searchField.toLowerCase())) ;

    return (
      <div className="App">
        <h2>US Covid Cases</h2>
        <p>Per state covid case data</p>
        <SearchBox
          placeholder="search states"
          handleChange={this.handleChange}
        />
        <CardList stateData={filterState} />
      </div>
    );
  }
}

export default App;
