//import { Link } from 'react-router-dom';


function CharacterList({ characters }) {

  //if (!characters.length) {
    //return <p>No hay coincidencias</p>;
  //}

  if (characters.length === 0) {
    return <p className="error">No hay ningún personaje que coincida con tu búsqueda</p>;
  }

  return (
    <div className='allCharacters'>
        {/* Mostrar personajes aquí */}
        {characters.map(character => (
          <div 
          key={character.id} 
          className='allCharacters__each'>
            <img src={character.image} alt={character.name} />
            <p> {character.name}</p>
            <p> {character.species}</p>
            
          </div>
        ))}
      </div>
  )
}

export default CharacterList