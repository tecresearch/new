import React, { Component } from 'react';
import API from './services/dateAPI';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: ''
    };
  }

  handleButtonClick = async () => {
    const data = await API.getAPIResponse();
    console.log(data);
   
    this.setState({
      apiResponse: data
    })


  }

  render() {
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton handleButtonClick={this.handleButtonClick}></DateButton></center>
        <DateDisplay data={this.state.apiResponse} ></DateDisplay>
      </div>
    );
  }
}

export default App;
