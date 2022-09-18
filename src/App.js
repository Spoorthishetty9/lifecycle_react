import React from "react";
import "./style.css";

import React, {Component} from 'react';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = { hello: "we  all love javaScript" };
  }
 
  render() {
    return (
      <div>
        <h1>React is not at all achoce</h1>
        <h2> I know that {this.state.hello}</h2>
        <button onClick={this.changeState}>click me !!</button>
      </div>
    );
  }
  componentWillMount(){
    console.log('component will mount')
  }
  componentDidMount(){
    console.log("component did mount")
  }
  changeState=()=>{
    this.setState({hello:"i can!!!!!!!"});
   
   }
   componentWillRecieveProps(newProps){
     console.log("comp will recieve props")
   }
   shouldComponentUpdate(newProps,newSate){
    return true;
  
   }
   componentDidMount(){
     console.log("did mounted")
   }
   componentWillUnmount(){
     console.log("un mounted")
   }
    

}


export default Book;

function App(){
  return(
    <div>

<Book/>

      </div>
  )

}
export default App;