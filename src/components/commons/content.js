import styled from 'styled-components';

const Content = styled.div`
  background-color: #ffffff;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  justify-content: flex-start;
  margin: 32px 8px;
  padding: 8px 12px;

  @media (min-width: 700px) {
    align-items: center;
    justify-content: center;
    margin: 64px auto;
    padding: 16px 32px;
    max-width: 650px;
  }

  @media (min-width: 1150px) {
    max-width: 980px;
  }
`;

export default Content;
