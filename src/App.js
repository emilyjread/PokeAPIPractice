
import './App.css';
import React, {useState} from 'react'


function App() {
  
  const [poke, setPoke] = useState([]);

   const fetchpoke=()=>{
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response=>{
        console.log("fetched")
        return response.json();
      }).then(response=>{
          setPoke(response.results)
      }).catch(err=> {console.log("error")})
    }

    return(
      <div>
        <h1> Pokemon </h1>
        <button onClick={fetchpoke}>Fetch Pokemon</button>
        {poke.length>0&& poke.map((poke, index)=>{
          return(
            <div key={index}>
              <ul>
                <li>{poke.name}</li>
              </ul>
            </div>
          )
        })}
      </div>
    )

  
  // return (
  //   <div className="App">
  //     <button onClick={FetchPoke}>Fetch Pokemon</button>
      
  //   </div>
  // );
}

export default App;
