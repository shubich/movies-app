import * as utils from '../utils';

const films = [
  {
    title: 'Pulp Fiction',
    release_date: '1994-09-10',
    vote_average: 8.3,
  },
  {
    title: 'Taxi',
    release_date: '1998-04-21',
    vote_average: 4.7,
  },
  {
    title: 'Terminator',
    release_date: '1999-02-01',
    vote_average: 5.6,
  },
];

describe('utils', () => {
  it('should sort films by rating', () => {
    expect(utils.sortFilms(films, 'rating')).toEqual([
      {
        title: 'Pulp Fiction',
        release_date: '1994-09-10',
        vote_average: 8.3,
      },
      {
        title: 'Terminator',
        release_date: '1999-02-01',
        vote_average: 5.6,
      },
      {
        title: 'Taxi',
        release_date: '1998-04-21',
        vote_average: 4.7,
      },
    ]);
  });

  it('should sort films by date', () => {
    expect(utils.sortFilms(films, 'date')).toEqual([
      {
        title: 'Terminator',
        release_date: '1999-02-01',
        vote_average: 5.6,
      },
      {
        title: 'Taxi',
        release_date: '1998-04-21',
        vote_average: 4.7,
      },
      {
        title: 'Pulp Fiction',
        release_date: '1994-09-10',
        vote_average: 8.3,
      },
    ]);
  });

  it('shouldn\'t sort films', () => {
    expect(utils.sortFilms(films)).toEqual([
      {
        title: 'Pulp Fiction',
        release_date: '1994-09-10',
        vote_average: 8.3,
      },
      {
        title: 'Taxi',
        release_date: '1998-04-21',
        vote_average: 4.7,
      },
      {
        title: 'Terminator',
        release_date: '1999-02-01',
        vote_average: 5.6,
      },
    ]);
  });

  it('should return queryString', () => {
    expect(utils.jsonToQueryString({
      language: 'en-US',
      include_adult: 'false',
      page: '1',
    })).toEqual('?language=en-US&include_adult=false&page=1');
  });

  it('should handleFilmDetails normal', () => {
    expect(utils.handleFilmDetails({
      genres: [{ name: 'g' }],
      release_date: '1999-09-09',
      runtime: 100,
      vote_average: 5.678,
    })).toEqual({
      genres: 'g',
      release_date: '1999',
      runtime: '100 min',
      vote_average: 5.7,
    });
  });

  it('should handleFilmDetails with empty details', () => {
    expect(utils.handleFilmDetails({})).toEqual({
      genres: undefined,
      release_date: '',
      runtime: '',
      vote_average: 0,
    });
  });

  it('should handlePersonDetails normal', () => {
    expect(utils.handlePersonDetails({
      birthday: '1895-10-03',
      deathday: '1925-12-28',
      place_of_birth: 'Russia',
      popularity: 9.9,
    })).toEqual({
      birthday: 'Born: Oct 3, 1895',
      deathday: 'Died: Dec 28, 1925',
      place_of_birth: ' in Russia',
      popularity: 10,
    });
  });

  it('should handlePersonDetails with empty details', () => {
    expect(utils.handlePersonDetails({})).toEqual({
      birthday: '',
      deathday: '',
      place_of_birth: '',
      popularity: 0,
    });
  });
});
