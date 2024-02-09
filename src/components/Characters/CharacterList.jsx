
function CharacterList({ characters }) {
  return (
    <div className='allCharacters'>
        {/* Mostrar personajes aquí */}
        {characters.map(character => (
          <div key={character.id} className='allCharacters__each'>
            <img src={character.image} alt={character.name} />
            <p> {character.name}</p>
            <p> {character.species}</p>
          </div>
        ))}
      </div>
  )
}

export default CharacterList