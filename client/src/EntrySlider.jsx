import React from 'react';
import styled from 'styled-components';

// const Photo = styled.div`

// `;

class EntrySlider extends React.Component {
  // will contain the miniature slider for each listing
  // initially will be unused and static images while I work on slider functionality
  // can use big slider logic here in small slider
  constructor(props) {
    super(props);
    this.state = {
      photos: props.photos,
      counter: 0
    };
  }

  render() {
    return (
      <img src={this.state.photos[this.state.counter]} alt="house" />
    );
  }
}

export default EntrySlider;
