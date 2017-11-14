export const imagePrefix = 'https://image.tmdb.org/t/p/w640';

export const requests = {
  people: query => (
    {
      results: [
        {
          name: query,
          mock: true,
        },
      ],
    }
    // new Promise((resolve, reject) => {
    //   process.nextTick(() => (
    //     query
    //       ? resolve({ json: () => ({ results: [{ name: query }] }) })
    //       : reject(new Error(`query: ${query}`))
    //   ));
    // })
  ),
  details: id => (
    new Promise((resolve, reject) => {
      process.nextTick(() => (
        id
          ? resolve({ json: () => ({ title: 'test' }) })
          : reject(new Error(`id: ${id}`))
      ));
    })
  ),
  filmsWithCast: id => (
    new Promise((resolve, reject) => {
      process.nextTick(() => (
        id
          ? resolve({ json: () => ({ results: [{ title: 'test' }] }) })
          : reject(new Error(`id: ${id}`))
      ));
    })
  ),
};
