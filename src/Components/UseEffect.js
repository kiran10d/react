import { useEffect, useState } from "react";
import styled from "styled-components";

function useEff() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //On First Render / Mount

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    console.log("First Render/Mount");
  }, []);

  // On Every render / Update

  useEffect(() => {
    console.log("I am re-rendering / Update");
  });

  //on first render and when ever dependancy change / Update on dependancy change

  useEffect(() => {
    console.log(
      `Re-render on dependancy change / Update on dependancy change ${name}`
    );
  }, [name]);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <>
      <StyledMiddle>
        <h1>The UseEffect Hook</h1>
        <h2>The Window Width is : {windowWidth}</h2>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </StyledMiddle>
    </>
  );
}
// Styled Components
const StyledMiddle = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default useEff;
