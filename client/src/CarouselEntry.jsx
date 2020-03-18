import React from 'react';
import styled from 'styled-components';

const CarouselEntry = (props) => {
  // will render each entry passed down from props
  // might contain an additional module? slider inside
  // quick read info about each listing under the images
  // can be static data that only appears for the current listing

  const Entry = styled.div`
  `;

  return (
    <Entry>
      <img src={props.property.photos[0]} alt="house" />
      <div>
        Address
        Rooms
      </div>
    </Entry>
  );
};

export default CarouselEntry;
