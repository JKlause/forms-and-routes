
/* eslint-disable no-console */
export const callApi = (searchQuery, page = 1) => { 
console.log(page);
  if(page < 1) page = 1;

  let query = searchQuery;

  if(searchQuery !== 'random') {
    query = `?name=${searchQuery}&page=${page}`; 
  }

  if(searchQuery === undefined) {
    query = `?page=${page}`;
  }

  const url = `https://last-airbender-api.herokuapp.com/api/v1/characters/${query}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    }); 
};
