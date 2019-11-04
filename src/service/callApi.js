
/* eslint-disable no-console */
export const callApi = (queries) => {  

  const url = `https://last-airbender-api.herokuapp.com/${queries}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    }); 
};
