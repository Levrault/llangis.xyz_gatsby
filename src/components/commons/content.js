import styled from 'styled-components';

const Content = styled.div`
  background-color: #ffffff;
  max-width: 980px;
  margin: 64px auto;
  padding: 16px 32px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 700px) {
    justify-content: flex-start;
    align-items: initial;
    margin: 32px 8px;
    padding: 8px 12px;
  }
`;

export default Content;
