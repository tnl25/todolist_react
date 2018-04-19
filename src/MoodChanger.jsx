import React, { Component } from 'react';
import Mood from './Mood.jsx';

class MoodChanger extends Component {
    constructor(props) {
    super(props);
    this.state = {
        currentMood: 'happy',
        face: ':-)',
        currentIndex: 0,
        moods : ['happy','sad','angry','neutral']
      };
    //   need to have the line below for it to work
    this.changeMood = this.changeMood.bind(this);

    }
    changeMood(e){
        const moodsObj = {
            happy: ':)',
            sad: ':(',
            angry: '>:(',
            neutral: '-_-'
        };
        let nextIndex = this.state.currentIndex + 1;
        if (nextIndex === this.state.moods.length){
            nextIndex = 0;
        };
        this.setState({
            face: moodsObj[this.state.currentMood],
            currentMood: this.state.moods[nextIndex],
            currentIndex: nextIndex
        })
    }
    
    
    render() {
        return (
            <div>
                <h2>{this.state.face}</h2>
                <button className="square" onClick={this.changeMood}>
                Wut?
                </button>
            </div>
        )
    }
}


export default MoodChanger;