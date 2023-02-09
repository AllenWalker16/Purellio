import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
  // eslint-disable-next-line no-console
  console.log(genres);
  const genreTitle = 'pop';
  return (
    <div className="flex flex-col">
      <div className="w-full h-full sm:flex-row flex-col mt-4 mb-10 text-center">
        <h2 className="font-bold text-3xl">Discover {genreTitle}</h2>
        <select onChange={() => {}} value="" className=" bg-dimwhite text-orange p-3 text-sm rounded-lg outline-none sm:mt-2 mt-5">
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}

      </div>
    </div>
  );
};

export default Discover;
