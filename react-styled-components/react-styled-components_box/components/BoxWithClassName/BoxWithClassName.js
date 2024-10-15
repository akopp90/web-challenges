import styled from "styled-components";

export default function BoxWithClassName({ isBlack }) {
  if (isBlack) {
    return <Box isBlack></Box>;
  }
  return <Box></Box>;
}
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  &:hover {
    background-color: red;
  }
  ${(props) => props.isBlack && `background-color: black;`}
`;
