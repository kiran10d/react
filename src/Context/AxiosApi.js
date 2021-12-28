import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MyContext = createContext({
  data: "",
  setData: () => {},
});

function ContextAxios(props) {
  console.log("props", props);
  const [data, setData] = useState("");
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;
  return (
    <>
      <MyContext.Provider value={{ data }}>{props.children}</MyContext.Provider>
    </>
  );
}

export default ContextAxios;
