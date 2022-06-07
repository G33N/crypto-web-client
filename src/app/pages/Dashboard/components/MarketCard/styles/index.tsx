import styled from 'styled-components';
import {
  StyleConstants,
  StyleResponsive,
} from '../../../../../../styles/StyleConstants';

export const Card = styled.div`
  width: 660px;
  height: 520px;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    position: absolute;
    width: 328px;
    height: 355px;
    left: 36px;
    top: 430px;
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
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    img {
      height: 1.5rem;
      width: 1.5rem;
    }
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
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
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
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    display: none;
  }
`;

export const Box = styled.div`
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    height: max-content;
    width: max-content;
  }
`;
