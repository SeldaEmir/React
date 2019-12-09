import React,{Component} from 'react';
import Navbar from "./components/Navbar"
import './App.css';
import Users from './components/Users';

class App extends Component{

  state = {
    users: [
      {
        id : 1,
        name: "Fatma",
        salary: "10000",
        department: "Bilişim"
      },
      {
        id : 2,
        name: "Ayşe",
        salary: "4000",
        department: "Üretim"
      },
      {
        id : 3,
        name: "Zeynep",
        salary: "9000",
        department: "Pazarlama"
      },

    {
      id: 4,
      name: "Mert",
      salary: "8000",
      department: "ArGe"
    }
    ]
  }
  deleteUser = (id) =>{
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }
  render() {
  return (
    <div className="container">
      <Navbar title = "User App"/>
      <hr/>
      <Users deleteUser = {this.deleteUser} users = {this.state.users}/>

    </div>
  );
}
}

export default App;
