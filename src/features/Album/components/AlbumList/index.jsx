import React from 'react';
import Album from '../Album';
import './styles.css'

function AlbumList({albumList}) {
  return (
    <ul className='album-list d-block'>
      {albumList.map(album => (
        <li key={album.id}>
          <Album album={album}></Album>
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;