import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import CarouselEntry from './CarouselEntry.jsx';

// should be a class
// might need state, will render each individual property
// will accept the list of properties from app
// map through to create individual listings
// needs buttons to scroll

const Slider = styled.div`
  min-height: 300px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  position: relative;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  z-index: -1;
  margin-left: auto;
  maring-right: auto;
  min-height: inherited;
  position: absolute;
  display: flex;
  overflow-x: hidden;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform: translateX(${props => props.activeProp * -100 / props.properties.length}%);
`;

const Button = styled.button`
  opacity: 0.4;
  height: 240px;
  position: absolute;
  z-index: 2;
  width: 50px;
  background: none;
  border: none;
  outline: none;
  transition: 0.5s;

  &:hover {
    background: black;
    color: whitesmoke; 
  } 

`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0  ;
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
        console.log(data);
        this.setState({
          properties: data
        });
      },
      error: () => {
        console.log('error mounting');
      }
    });
  }

  nextEntry() {
    // e.preventDefault();
    const newProp = this.state.activeProp + 1;
    this.setState({
      activeProp: newProp
    });
  }

  prevEntry() {
    // e.preventDefault();
    const newProp = this.state.activeProp - 1;
    this.setState({
      activeProp: newProp
    });
  }

  render() {
    return (
      <div>
        <Slider>
          <PrevButton className="prvBtn" onClick={this.prevEntry} disabled={this.state.activeProp === 0}><FontAwesomeIcon icon={faAngleDoubleLeft} size="4x" /></PrevButton>
          <Wrapper activeProp={this.state.activeProp} properties={this.state.properties}>
            {this.state.properties.map(property => (
              <CarouselEntry property={property} key={property._id} />
            ))}
          </Wrapper>
          <NextButton className="nxtBtn" onClick={this.nextEntry} disabled={this.state.activeProp === this.state.properties.length - 3}><FontAwesomeIcon icon={faAngleDoubleRight} size="4x" /></NextButton>
        </Slider>
      </div>
    );
  }
}
export default CarouselSlider;
