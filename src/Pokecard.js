import "./Pokecard.css";

function Pokecard({name, id, type}) {

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
  <div className="Pokecard">
    <h2 className="Pokecard-name">{name}</h2>
    <img className="Pokecard-image" src={url} alt={name}/>
    <p>Type: {type}</p>
  </div>
  );
}

export default Pokecard;