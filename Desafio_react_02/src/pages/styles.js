import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;

  margin: 20px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Content = styled.div`
  display: contents;

  h2 {
    margin: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
