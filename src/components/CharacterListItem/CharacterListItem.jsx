import React from 'react'

const CharacterListItem = ({name,description}) => {
  return (
    <li className="character-list-item">
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  )
}

export default React.memo(CharacterListItem);
