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
    //box-shadow: ${StyleConstants.hoverEffect};
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
  img {
    height: 2.5rem;
    width: 2.5rem;
  }
  //border: 1px solid blue;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;

export const TitleTransaction = styled.div`
  //border: 1px solid yellow;

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    color: grey;
  }
`;

export const SubTitle = styled.h5`
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
  }
`;

export const Title = styled.h5`
  color: ${p => p.theme.text};
  cursor: pointer;
  text-align: center;
  //border: 1px solid grey;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
  }
`;

export const Box = styled.div`
  border: 1px solid violet;
  width: 100%;
  text-align: center;
  border-collapse: separate;
  justify-content: end;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    display: none;
  }
`;

export const RowTable = styled.div`
  //border: 1px solid red;
  display: flex;
  justify-content: start;
  width: 30%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: column;
  }
`;

export const RowTableb = styled.div`
  //border: 1px solid orange;
  display: flex;

  justify-content: end;
  width: 70%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //border: 1px solid;
  //width: 100%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

/****tabla***/

export const TableCoin = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;

  // border: 1px solid green;
`;
