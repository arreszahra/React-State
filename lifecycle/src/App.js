import React from 'react'
import './App.css';

class App extends React.Component {
 constructor(props){
  super(props)
  this.state={Person:{FullName: "Cristiano Ronaldo dos Santos Aveiro",
    profession : "FootBall player",
    bio:" is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team", 
    imgSrc: "../cris.jpg"}  
    , show: true , Mounted:0}
    }

 handleShowPerson = () => {
  this.setState({ show: !this.state.show });

};
componentDidMount(){
this.interval= setInterval(()=>{
 this.setState({Mounted:this.state.Mounted+1})
},1000) 
 
};
render (){
  return (
    <>
      {this.state.show && (
        <>
          <h1>{this.state.Person.FullName}</h1>
          <h1>{this.state.Person.bio}</h1>
          <img src={this.state.Person.imgSrc} alt="Naruto"></img>
          <h1>{this.state.Person.profession}</h1>
          <p>Componed Mounted {this.state.Mounted} second ago </p>
          <br></br>
        </>
      )}

      <button onClick={this.handleShowPerson}>Show Profile</button>
    </>
  );
}
};

export default App ;
