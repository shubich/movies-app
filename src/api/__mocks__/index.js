export const requests = {
  people: query => (
    new Promise((resolve, reject) => {
      process.nextTick(() => (
        query
          ? resolve({ json: () => ({ results: [{ name: query }] }) })
          : reject(new Error(`query is ${query}`))
      ));
    })
  ),
  films: query => (
    new Promise((resolve, reject) => {
      process.nextTick(() => (
        query
          ? resolve({ json: () => ({ results: [{ title: query }] }) })
          : reject(new Error(`query is ${query}`))
      ));
    })
  ),
};

export const a = 1;
