import React from 'react'
import Button from '../Button';

const CharacterListItem = ({ name, id, description, onFavorite, onUnfavorite ,favorites = {}}) => {

  const [isFavorite, setIsFavorite] = React.useState(false);

  const onFavoriteHandler = () => {
    if (onFavorite) {
      onFavorite(id);
    }
  }

  const onUnfavoriteHandler = () => {
    if (onUnfavorite) {
      onUnfavorite(id);
    }
  }
  
  React.useEffect(() => {
    if (favorites[id]) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  },[id, favorites]);
  
  return (
    <li className="character-list-item">
      <h3>{name}</h3>
      <p>{description}</p>
      {isFavorite && <Button onClick={onUnfavoriteHandler} palette='success'>Desfavoritar</Button> ||
       <Button onClick={onFavoriteHandler}>Favoritar</Button>}

    </li>
  )
}

export default React.memo(CharacterListItem);
