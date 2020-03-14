import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/recommendations',
      success: (data) => {
        console.log(data);
      },
      error: () => {
        console.log('error mounting');
      }
    });
  }

  render() {
    return <img src="https://fec-placeholder-photos.s3-us-west-1.amazonaws.com/0" />;
  }
}

export default App;
