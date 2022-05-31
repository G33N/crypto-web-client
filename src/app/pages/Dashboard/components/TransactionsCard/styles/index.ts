import styled from 'styled-components';
import { StyleConstants } from '../../../../../../styles/StyleConstants';

export const TransactionContainer = styled.div`
  width: 414px;
  border-radius: 1rem;
  background-color: white;
  height: max-content;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LinkTitle = styled.h5`
  margin-right: 30px;
  text-align: end;
  color: ${p => p.theme.text};
  cursor: pointer;
`;

export const TitleCard = styled.h5`
  margin-left: 30px;
  text-align: start;
  color: ${p => p.theme.text};
  cursor: pointer;
`;

export const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  img {
    height: 2rem;
    width: 2rem;
    border-radius: 3.5rem;
  }
`;

export const TextContainer = styled.div`
  margin-left: 1rem;
`;

export const Title = styled.h4``;
export const SubTitle = styled.h5`
  font-weight: 400;
`;

export const Container = styled.div`
  margin-left: 1rem;
  /* display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center; */
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export const Price = styled.div``;
