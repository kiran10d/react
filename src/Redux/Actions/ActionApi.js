export const GET_POST = "GET_POST";

export const getApiData = () => {
  return async (dispatch) => {
    let requestOptions = {};
    await fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then((response) => {
        return response;
      })
      .then((response) => response.text())
      .then((result) => {
        dispatch({ type: GET_POST, payload: JSON.parse(result) });
      });
  };
};
