import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import MyProfile from "./MyProfile.jsx";
// import List from "./List.jsx";
// import MoodChanger from "./MoodChanger.jsx";
import TodoList from "./TodoList";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <MyProfile />
        <div>
          <List />
        </div>
        
        <MoodChanger /> */}
                <TodoList />
            </div>
        );
    }
}

export default App;
