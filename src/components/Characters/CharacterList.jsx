import { Link } from 'react-router-dom';

function CharacterList({ characters, filterName, filterHouse }) {

  if (characters.length === 0) {
    return <p className="error">No hay ningún personaje que coincida con tu búsqueda</p>;
  }

  return (
    <div className='allCharacters'>
        {characters.map(character => (
          <div 
          key={character.id} 
          className='allCharacters__each'>
            <Link to={`/characterDetail/${character.id}`}>
            <img src={character.image} alt={character.name} />
            </Link>
            <p> {character.name}</p>
            <p> {character.species}</p>
            
          </div>
        ))}
      </div>
  )
}

export default CharacterList