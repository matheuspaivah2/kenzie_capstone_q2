import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: var(--font-roboto);

  > div {
    max-height: 568px;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
`;

export const ModalHeader = styled.div`
  width: 320px;
  background-color: var(--color-black);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
  font-size: var(--font-menu-mobile);
  color: var(--color-green);

  span {
    color: var(--light-gray);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: var(--font-menu-desktop);
  }
`;

export const ModalBody = styled.div`
  width: 320px;
  background-color: var(--light-gray);
  display: flex;
  flex-direction: column;
  padding: 15px 0;

  select {
    background-color: var(--color-black);
    color: var(--light-gray);
    height: 40px;
    border-radius: 5px;
    padding: 6px;
    margin-bottom: 10px;
    font-size: var(--font-title-mobile);
  }

  input {
    background-color: var(--color-black);
    color: var(--light-gray);
    height: 40px;
    border-radius: 3px;
    padding-left: 15px;
    font-size: var(--font-title-mobile);
  }

  ul {
    background-color: var(--color-black);
    color: var(--light-gray);
    border-radius: 3px;
    height: 150px;
    overflow-y: auto;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      padding: 8px;
    }
  }

  button {
    margin: 10px 0;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
`;

export const DivSelect = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  border-radius: 3px;
  padding: 15px 0;
  margin: 10px 0;
`;
