import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState<any>();
  const [name, setName] = useState();
  const [pokemon, setPokemon] = useState("pikachu");
  
  var URL = "https://pokeapi.co/api/v2/pokemon/"+pokemon;


  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data);
      setName(response.data.name);
    }).catch((err)=>{
      //window.alert(err);
      console.log(err);
    })
  }, [URL])


  console.log(pokemon);
  return (
    <>
      <div>
        <h1>Pokedex</h1>
        <h2>{name}</h2>
        <img width={500} height={500} src={data ? data.sprites.front_default : "<p>LOADING...</p>S"}/>
        <input placeholder='Escolha o seu pokemon' onChange={ e => setPokemon(e.target.value)}/>
      </div>
    </>
    )
}

export default App;
