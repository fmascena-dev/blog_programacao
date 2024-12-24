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
    font-size: 2rem;
    text-decoration: underline;
  }

  img {
    margin: 2rem 0;
    border-radius: 1rem;
  }

  .padlet {
    width: 100%;
    border-radius: 1rem;
  }

  .img_estruturada {
    width: 40%;
    border-radius: 1rem;
  }
`;

export const ButtonVoltar = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 2rem;
  padding: 0.5rem 3rem;
  margin-bottom: 2rem;
  border: 1px solid #00d9ff;
  font-size: 2rem;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 1px 1px 10px 5px #211;
  
  &:hover {
    box-shadow: 1px 1px 10px 5px #00d9ff;
  }
`

export const LinkButton = styled.a`
  color: #e8e8e8;
  text-decoration: none;
`;