import { v4 as uuidv4 } from 'uuid';

const chillHop = () => {
  return [
    {
      name: 'Toofpick',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
      artist: 'Blue Wednesday, Shopan',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11227',
      id: uuidv4(),
      active: true,
      color: ['#695BA6', '#F4B4DB'],
    },
    {
      name: 'Lax Incense',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg',
      artist: 'Mama Aiuto, Daphné',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125',
      id: uuidv4(),
      active: false,
      color: ['#1A5968', '#436E6E'],
    },
    {
      name: 'Bloom',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
      artist: 'Blue Wednesday, Shopan',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=11235',
      id: uuidv4(),
      active: false,
      color: ['#695BA6', '#F4B4DB'],
    },
    {
      name: 'New Horizons',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg',
      artist: 'Nymano, Epektase',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10142',
      id: uuidv4(),
      active: false,
      color: ['#704E70', '#8E6A8B'],
    },
    {
      name: 'Taste of Heaven',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
      artist: 'C Y G N',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=19058',
      id: uuidv4(),
      active: false,
      color: ['#D783D0', '#33404F'],
    },
    {
      name: 'Cascade',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg',
      artist: 'Knowmadic',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13092',
      id: uuidv4(),
      active: false,
      color: ['#73C49D', '#FD9553'],
    },
    {
      name: 'Clocks Forward',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/db956cc3e3bb2d3725d0ce3f9aaf7190671c9451-1024x1024.jpg',
      artist: 'Psalm Trees, Guillaume Muschalle',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8094',
      id: uuidv4(),
      active: false,
      color: ['#F4BC59', '#FDF8DB'],
    },
  ];
};

export default chillHop;
