import { Link } from "react-router-dom";

function CharacterDetail({character}) {
  
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p> Género: {character.gender}</p>
      <p>Especie: {character.species}</p>
      <p>Casa: {character.house}</p>
      <p>Estado: {character.alive ? "Vivo" : "Fallecido"}</p>
      <Link to="/" className="btn">
        <button>Volver</button>
      </Link>
    </div>
  )
}

export default CharacterDetail;