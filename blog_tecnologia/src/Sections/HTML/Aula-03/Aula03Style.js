import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  h2 {
    margin: 1rem 0;
    text-decoration: underline;
  }

  img {
    margin: 2rem 0;
    border-radius: 15px;
  }

  .padlet {
    width: 100%;
    border-radius: 15px;
  }

  .img_estruturada {
    width: 40%;
    border-radius: 15px;
  }
`;
