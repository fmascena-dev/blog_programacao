import styled from 'styled-components';

export const Main = styled.main`
  background-color: #93d3e5;
  font-size: 1.2rem;

  hr {
    width: 100%;
    margin: 3rem 0;
    border: none;
    border-bottom: 4px solid #000;
  }

  img {
    border-radius: 15px;
  }
`;

export const SectionPrincipal = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Section = styled.section`
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 10%;
  }
`;

export const Inicio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6rem;

  h2 {
    margin-left: 2rem;
  }
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
  justify-content: space-between;
  gap: 4rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;

    p {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-weight: 500;
    }

    ol {
      margin-left: 1rem;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  text-align: center;
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
  border: 2px solid red;
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
      margin: 1rem 0 0 1rem;
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
    background-color: #ff0000;
    border-radius: 2rem;
    color: #fff;
    cursor: pointer;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 1);

    &:hover {
      background-color: #ff0056;
      text-decoration: underline;
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
  border: 2px solid red;
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

  p {
    font-size: 1.5rem;
    border: 2px solid red;
    border-radius: 2rem;
    padding: 1rem;
    width: 70%;
  }
`