import React from 'react';
import logo from './Marvel_Studios_logo.jpg';


class Mar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // authors: "Steve Ditko, Stan Lee, Jack Kirby",
        characters:"Spider-Man, Captain America, Iron Man, Thor, Wolverine, the Hulk, Daredevil, Ghost Rider, Deadpool, Doctor Strange, Black Panther",
        teams:"the Avengers, the X-Men, the Fantastic Four and the Guardians of the Galaxy",
        antagonists:"Doctor Doom, Red Skull, Green Goblin, Thanos, Ultron, Doctor Octopus, Magneto, Venom and Loki"
    };
    }
    render() {
      return (
        <div className="App">
      
        <div className="Header">
          <p>Marvel</p>
        </div>
       <div className="Wrapper">
          <div className="Block-img">
            <div className="Image-main">       
                <img src={logo}  alt="Marvel big" width="100%" className="main-img"/>
            </div>
            <div className="Image-small">
                    <img src={logo} alt="small 1" className="small-img"/>
                    <img src={logo}  alt="small 2" className="small-img"/>
                    <img src={logo}  alt="small 3" className="small-img"/>
                    <img src={logo}  alt="small 4" className="small-img"/> 
            </div>
          </div>

          <div className="Block-text">
            <div className="About">
                <p>About marvel</p> 
            </div>
            <hr color="red"/>
            <div className="Description">
                <p>Marvel Comics is the brand name and primary imprint of Marvel Worldwide Inc., formerly Marvel Publishing, Inc. and Marvel Comics Group, a publisher of American comic books and related media. In 2009, The Walt Disney Company acquired Marvel Entertainment, Marvel Worldwide's parent company.

                Marvel started in 1939 as Timely Publications, and by the early 1950s, had generally become known as Atlas Comics. The Marvel branding began in 1961, the year that the company launched The Fantastic Four and other superhero titles created by {this.props.authors} and many others.
                
                Marvel counts among its characters such well-known superheroes as {this.state.characters}, such teams as the {this.state.teams}, and antagonists including {this.state.antagonists}. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City.</p>
            </div>
          </div>
       </div>
        
        
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
    </div>
      )
      
    }
  }

  export default Mar;