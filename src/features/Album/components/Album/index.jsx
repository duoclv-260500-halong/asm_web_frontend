import React from 'react';
import './styles.css'
function Album({album}) {
  return (
    <div className='album'>
      <div className='album-thumbnail'>
        <img src={album.thumbnail} alt={album.title} />
      </div>
      <p className='album-name'>{album.title}</p>
    </div>
  );
}

export default Album;