import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import LibrarySong from './library-song';

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            setCurrentSong={setCurrentSong}
            currentSong={song}
            audioRef={audioRef}
            isPlaying={isPlaying}
            id={song.id}
            songs={songs}
            setSongs={setSongs}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
