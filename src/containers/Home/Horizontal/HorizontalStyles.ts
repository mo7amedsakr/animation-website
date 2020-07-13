import styled from 'styled-components';

export const Card = styled.div`
  height: 100%;
  width: 100vw;
  padding: 10rem;
  display: flex;

  /*
    Small devices (landscape phones, less than 768px)
  */
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
`;

const CardMain = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  @media (max-width: 767.98px) {
    width: 95%;
    /* align-items: center !important; */
    justify-content: center !important;
  }
`;

export const CardLeft = styled(CardMain)`
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin-bottom: 3rem;
  }
  font-size: 1rem;
  @media (max-width: 767.98px) {
    font-size: 0.8rem;
  }
`;

export const Info = styled.h1`
  font-size: 1.4em;
`;

export const Title = styled.h2`
  font-size: 6em;
  font-weight: 900;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  width: 75%;
`;

export const CardRight = styled(CardMain)`
  align-items: center;
  justify-content: flex-end;
`;

export const CardImg = styled.img`
  max-width: 90%;
`;
