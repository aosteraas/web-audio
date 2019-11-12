import styled from 'styled-components/macro';
// I Like this green
// #09d3ac
export const AppStyle = styled.main`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  .controls {
    display: flex;
    flex-direction: row;
  }
`;

interface RowProps {
  justifyContent: string;
}
export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.justifyContent};
`;
