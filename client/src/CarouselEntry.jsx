import React from 'react';
import styled from 'styled-components';

const CarouselEntry = (props) => {
  // will render each entry passed down from props
  // might contain an additional module? slider inside
  // quick read info about each listing under the images
  // can be static data that only appears for the current listing

  const Entry = styled.div`
    padding-left: 40px;
    padding-right: 40px;
  `;

  const Favorite = styled.button`
    float:right;
  `;

  const Info = styled.div`
    margin: auto;
    text-align: center;
  `;

  return (
    <Entry className="slider-entry">
      <img src={props.property.photos[0]} alt="house" />
      <Info>
        Address
        <br />
        Rooms
      </Info>
    </Entry>
  );
};

export default CarouselEntry;
