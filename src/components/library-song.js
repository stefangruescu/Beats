import React from 'react';

const LibrarySong = ({
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
  songs,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(currentSong);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...currentSong,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);

    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${currentSong.active ? 'selected' : ''}`}
    >
      <img src={currentSong.cover} alt={currentSong.name} />
      <div className='song-description'>
        <h3>{currentSong.name}</h3>
        <h4>{currentSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
