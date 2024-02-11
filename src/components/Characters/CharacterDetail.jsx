

function CharacterDetail({characters, handleClickCharacter}) {
  
  return (
    <div>
      <button>Volver</button>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>{character.gender}</p>
      <p>{character.species}</p>
      <p>{character.house}</p>
    </div>
  )
}

export default CharacterDetail;