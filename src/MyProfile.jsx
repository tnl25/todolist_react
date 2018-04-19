import React, { Component } from 'react';
import BusinessCard from './BusinessCard';

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BusinessCard
          name="Jacob M. W."
          title="Psychology Disruptor"
          links={[
            'http://www.google.com'
            
          ]}
        />
      </div>
    );
  }
}

export default MyProfile;