import styled from 'styled-components';
import { StyleConstants } from '../../../../../../styles/StyleConstants';

export const Card = styled.div`
  height: max-content;
  width: max-content;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

export const Avatar = styled.div`
  margin-left: 2rem;
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 4rem;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2rem;
`;
export const TitleTransaction = styled.h3`
  margin-left: 2rem;
  padding-right: 6rem;
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;

export const SubTitle = styled.h5`
  padding-right: 2rem;
  font-weight: 300;
  padding-left: 4rem;
`;

export const Title = styled.h5`
  text-align: start;
  color: ${p => p.theme.text};
  cursor: pointer;
`;
