import styled from 'styled-components';
import Btn from './components/UI/Btn.jsx';

const MainTitle = styled.h1`
  color: tomato;
  font-weight: normal;
  text-transform: uppercase;
`;

const Wrap = styled.div`
  padding-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default function App() {
  return (
    <Wrap>
      <MainTitle>Styled components</MainTitle>
      <Btn>Get Started</Btn>
    </Wrap>
  );
}
