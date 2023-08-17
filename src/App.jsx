import styled from 'styled-components';
import Btn, { GrayBtn } from './components/UI/Btn.styled.jsx';
import GlobalStyle from './components/GlobalStyle.jsx';
import GainMore from './components/GainMore.jsx';

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
      <GlobalStyle />
      <MainTitle>Styled components</MainTitle>
      <GainMore />
      {/* <Btn>Learn more</Btn> */}
      {/* <Btn secondary>Read more</Btn> */}
      {/* <GrayBtn>Read more</GrayBtn> */}
      {/* <Btn as='a' href='#'>
        Nuoroda kaip button
      </Btn> */}
    </Wrap>
  );
}
