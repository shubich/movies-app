export const requests = {
  people: query => (
    new Promise((resolve, reject) => {
      process.nextTick(() => (
        query
          ? resolve({ json: () => ({ results: [{ name: query }] }) })
          : reject(new Error(`query: ${query}`))
      ));
    })
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
};

export const a = 1;
