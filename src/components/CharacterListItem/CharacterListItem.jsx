import React from 'react'

const CharacterListItem = ({name,description}) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  )
}

export default React.memo(CharacterListItem);
