import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import CarouselEntry from './CarouselEntry.jsx';

// should be a class
// might need state, will render each individual property
// will accept the list of properties from app
// map through to create individual listings
// needs buttons to scroll

const Slider = styled.div`
  min-height: 400px;
  max-width: 100%;
  display: flex;
  position: relative;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  z-index: -1;
  min-height: 400px;
  position: absolute;
  display: flex;
  overflow-x: hidden;
  transform: translateX(${props => props.activeProp * -500}px);
`;

const Button = styled.button`
  height: 100%;
  position: absolute;
  z-index: 2;
`;

const NextButton = styled(Button)`
  right: 0;
`;

class CarouselSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      activeProp: 0
    };
    this.nextEntry = this.nextEntry.bind(this);
    this.prevEntry = this.prevEntry.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/recommendations',
      success: data => {
        // console.log(data);
        this.setState({
          properties: data
        });
      },
      error: () => {
        console.log('error mounting');
      }
    });
  }

  nextEntry(e) {
    e.preventDefault();
    const newProp = this.state.activeProp + 1;
    this.setState({
      activeProp: newProp
    });
  }

  prevEntry(e) {
    e.preventDefault();
    const newProp = this.state.activeProp - 1;
    this.setState({
      activeProp: newProp
    });
  }

  render() {
    return (
      <div>
        <Slider>
          <Button onClick={this.prevEntry}>Prev</Button>
          <Wrapper activeProp={this.state.activeProp}>
            {this.state.properties.map(property => (
              <CarouselEntry property={property} key={property._id} />
            ))}
          </Wrapper>
          <NextButton onClick={this.nextEntry}>Next</NextButton>
        </Slider>
      </div>
    );
  }
}
export default CarouselSlider;
