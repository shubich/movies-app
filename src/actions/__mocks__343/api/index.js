const people = {
    4: { name: 'Mark' },
    5: { name: 'Paul' },
  };
  
export const requests = {
  people: (query) => (
    new Promise((resolve, reject) => {
      process.nextTick(
        () => query ? resolve({name: query}) : reject({
          error: 'User with ' + id + ' not found.',
        })
      );
    })
  ),
};


  
  // export const requests = {
  //   films: (query) => {
  //     const queryString = jsonToQueryString({ ...queries.films, query });
  //     const url = `${host}${paths.search}${queryString}`;
  //     return fetch(url);
  //   },
  //   details: (id) => {
  //     const queryString = jsonToQueryString({ ...queries.default });
  //     const url = `${host}${paths.movie}${id}${queryString}`;
  //     return fetch(url);
  //   },
  //   similar: (id) => {
  //     const queryString = jsonToQueryString({ ...queries.default });
  //     const url = `${host}${paths.movie}${id}/similar${queryString}`;
  //     return fetch(url);
  //   },
  //   people: (query) => {
  //     const queryString = jsonToQueryString({ ...queries.default, query });
  //     const url = `${host}${paths.people}${queryString}`;
  //     return fetch(url);
  //   },
  //   person: (id) => {
  //     const queryString = jsonToQueryString({ ...queries.default });
  //     const url = `${host}${paths.person}${id}${queryString}`;
  //     return fetch(url);
  //   },
  //   filmsWithCast: (withCast) => {
  //     const queryString = jsonToQueryString({ ...queries.default, withCast });
  //     const url = `${host}${paths.discover}${queryString}`;
  //     return fetch(url);
  //   },
  // };
  