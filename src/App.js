import React from 'react';
import './App.css';
import ShowInfo from './ShowInfo';
import ModifyName from './MofidyName';

class App extends React.Component {

  constructor( props ){
    super ( props );
    this.state = {
      firstName : "Alfredo",
      lastName : "Salazar"
    }
  }

  handleChangeName = ( newFirstName, newLastName ) => {

    //Fetch call url + query
    this.setState({
      firstName : newFirstName,
      lastName : newLastName
    });
  }

  render(){
    return (
      <div className="App">
       <ShowInfo firstName={this.state.firstName} lastName={this.state.lastName}/>
       <ModifyName handleChangeName={this.handleChangeName}/>
      </div>
    );
  }
}

export default App;
