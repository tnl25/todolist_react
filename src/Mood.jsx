import React, { Component } from 'react';
import MoodChanger from './MoodChanger.jsx'

class Mood extends Component {
    constructor(props) {
    super(props);
    }
    render() {
        return this.state.moods.map(mood => <Mood mood={mood} />)
    }
}

export default Mood;