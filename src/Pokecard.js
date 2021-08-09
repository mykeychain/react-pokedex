function Pokecard(props) {

  const { name, id, type } = props;

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
  <div className="pokemon">
    <h2 className="blue">{name}</h2>
    <img className="image" src={url} alt={name}/>
    <p>{type}</p>
  </div>
  );
}

export default Pokecard;