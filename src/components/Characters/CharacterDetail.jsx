

function CharacterDetail({characters, handleClickCharacter}) {
  


  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>{character.gender}</p>
      <p>{character.species}</p>
      <p>{character.house}</p>
    </div>
  )
}

export default CharacterDetail;