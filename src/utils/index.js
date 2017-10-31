const handleDate = (str) => {
  const [year, month, day] = str.split('-');
  const date = new Date(year, month - 1, day, 1);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  return date.toLocaleString('en-US', options);
};

export const sortFilms = (films, field) => {
  films.sort((a, b) => {
    switch (field) {
      case 'rating':
        return b.vote_average - a.vote_average;
      case 'date':
        return Number(b.release_date.split('-')[0]) - Number(a.release_date.split('-')[0]);
      default:
        return 1;
    }
  });
  return films;
};

export const handleFilmDetails = (details) => {
  const handledDetails = { ...details };
  handledDetails.vote_average = (details.vote_average < 10)
    ? Number(details.vote_average.toFixed(1))
    : details.vote_average || '';

  handledDetails.genres = details.genres && details.genres
    .map(genre => genre.name).join(', ');

  handledDetails.release_date = (details.release_date)
    ? details.release_date.split('-')[0]
    : '';

  handledDetails.runtime = (details.runtime)
    ? `${details.runtime} min`
    : '';
  return handledDetails;
};

export const handlePersonDetails = (details) => {
  const handledDetails = { ...details };
  handledDetails.birthday = (details.birthday)
    ? `Born: ${handleDate(details.birthday)}`
    : '';
  handledDetails.deathday = details.deathday
    ? `Died: ${handleDate(details.deathday)}`
    : '';
  handledDetails.place_of_birth = (details.place_of_birth)
    ? ` in ${details.place_of_birth}`
    : '';
  handledDetails.popularity = (details.popularity)
    ? Math.round(details.popularity)
    : '';
  return handledDetails;
};

export const jsonToQueryString = json => `?${
  Object.keys(json).map(key => `${encodeURIComponent(key)}=${
    encodeURIComponent(json[key])}`).join('&')}`;

