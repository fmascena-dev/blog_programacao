import styled from 'styled-components';

export const Main = styled.main`
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 45, 79, 1) 45%,
    rgba(0, 192, 255, 1) 100%
  );
  font-size: 1.7rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    border-radius: 15px;
  }
`;

export const SectionPrincipal = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const Section = styled.section`
  background-color: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 45, 79, 1) 45%,
    rgba(0, 192, 255, 1) 100%
  );
  color: #000;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  /* width: 100%; */

  img {
    margin-right: 10%;
  }
`;

export const Inicio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionOne = styled.section`
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    width: 40%;
    letter-spacing: 0.1rem;
    font-size: 1.3rem;
  }
`;

export const SectionOfficial = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4rem;
  padding: 0 5rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5rem;

    p {
      width: 50%;
      flex-wrap: wrap;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-weight: 500;
    }

    ol {
      margin-left: 2rem;
    }

  }
  img {
    width: 40%;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  text-align: center;
  margin: 4rem 0;
`;

export const DivLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;


  li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

export const SectionInput = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Para = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  border: 2px solid #00d9ff;
  border-radius: 2rem;
  padding: 1rem;

  span {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

export const DivTag = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  margin: 2rem;

  p {
    font-weight: 500;
    font-size: 1.2rem;
    width: 40%;
    padding: 2rem;

    ul {
      margin: 1rem 0 0 1.3rem;
    }
  }
`;

export const FigureForm = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border: 0.1rem solid #000;
    background-color: #00d9ff;
    border-radius: 2rem;
    color: #222;
    cursor: pointer;
    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 1);
    
    &:hover {
      color: #e8e8e8;
      background-color:transparent;
      text-decoration: underline;
      box-shadow: 1px 1px 10px 5px rgba(0, 255, 255, 1);
    }
  }
`;

export const InputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const SectionSecond = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-weight: 500;
`;

export const SectionRadio = styled.section`
  display: flex;
  align-items: center;
  padding: 1rem;

  div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    font-size: 1.4rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  border: 2px solid #00d9ff;
  border-radius: 2rem;
  padding: 1rem;
  width: 70%;
`;

export const Image = styled.img`
  width: 20%;
  margin-left: 40%;
`

export const Image2 = styled.img`
  width: 50%;
`

export const SectionResumo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    border: 2px solid #00d9ff;
    border-radius: 2rem;
    padding: 1rem;
    width: 70%;
  }
`

export const BtnVoltar = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 2rem;
  padding: 0.5rem 3rem;
  margin: 2rem;
  border: 1px solid #00d9ff;
  font-size: 2rem;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 1px 1px 10px 5px #211;
  
  &:hover {
    box-shadow: 1px 1px 10px 5px #00d9ff;
  }
  `

export const LinkBtn = styled.a`
  color: #e8e8e8;
  text-decoration: none;
`;