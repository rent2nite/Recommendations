import React from 'react';
import styled from 'styled-components';

const Entry = styled.div`
  min-width: 400px;
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  transform: 
`;

// const Favorite = styled.button`
//   float: right;
// `;

const Info = styled.div`
  margin: auto;
  text-align: center;
`;

class CarouselEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: props.property.photos,
      counter: 0
    };
    this.counterIncrement = this.counterIncrement.bind(this);
  }

  componentDidMount() {
    setInterval(this.counterIncrement, 2000);
  }

  counterIncrement() {
    const newCounter = (this.state.counter + 1) % this.state.photos.length;
    this.setState({
      counter: newCounter
    });
  }

  render() {
    return (
      <Entry className="slider-entry">
        <Img>
          <img src={this.state.photos[this.state.counter]} alt="house" />
        </Img>
        <Info>
          Address
          <br />
          Rooms
        </Info>
      </Entry>
    );
  }
}

export default CarouselEntry;
