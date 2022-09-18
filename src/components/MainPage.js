// import React from "react";
// import Header from "./Header";
// import SearchBox from "./SearchBox";
// import Scroll from "./Scroll";
// import CardList from "./CardList";

// const MainPage = () => {
//     return (
//         <>
//         <Header />
//         <SearchBox searchChange={onSearchChange}/>
//         <Scroll>
//           <CardList robots={filteredRobots} />
//         </Scroll>
//         </>
//     )
// }

import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { requestRobots, setSearchField } from '../actions';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

    filterRobots = robots => {
    return robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
          <CardList robots={this.filterRobots(robots)} />
          </Scroll>
        </div>
      );
  }
}

export default MainPage