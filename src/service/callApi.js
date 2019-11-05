
/* eslint-disable no-console */
export const callApi = (searchQuery) => { 

  let query = searchQuery;

  if(searchQuery !== 'random') {
    query = `?name=${searchQuery}`; 
  }


  const url = `https://last-airbender-api.herokuapp.com/api/v1/characters/${query}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    }); 
};
