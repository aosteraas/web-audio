import styled from 'styled-components/macro';

export const ControlStyle = styled.section`
  border: 2px solid #dfdfdf;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: #15181c;
  width: 13rem;
  /* height: 13rem; */
  margin: 0 15px;
  padding: 0 15px;
  header {
    padding: 0.5rem 0;
  }
`;

export const PlayPause = styled.div`
  box-sizing: border-box;
  height: 74px;
  border-color: transparent transparent transparent #039903;
  transition: 100ms all ease;
  will-change: border-width;
  cursor: pointer;
  border-style: solid;
  border-width: 37px 0 37px 60px;
  &.pause {
    border-color: #c01e1e;
    border-style: double;
    border-width: 0px 0 0px 60px;
  }
`;

interface LoopProps {
  loop: boolean;
}

export const Loop = styled.button<LoopProps>`
  border: none;
  width: 100%;
  margin-left: 1rem;
`;

export const Range = styled.section`
  padding: 1rem 0;
  .header {
    span {
      background: #15181c;
      padding: 0 10px;
    }
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #fff;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }
`;
export const RangeInput = styled.input`
  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
`;
