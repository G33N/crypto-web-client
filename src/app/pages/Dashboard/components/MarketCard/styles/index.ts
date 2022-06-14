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
  padding: 5px;
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

export const SubTitle = styled.p`
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
  }
`;

export const Title = styled.p`
  color: ${p => p.theme.text};
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  //border: 1px solid grey;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
  }
`;

export const TitleCoin = styled.p`
  color: ${p => p.theme.text};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  //border: 1px solid grey;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
  }
`;

export const Box = styled.div`
  //border: 1px solid violet;
  width: 100%;
  text-align: center;
  border-collapse: separate;
  justify-content: end;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    display: none;
  }
`;

export const TitleRowTable = styled.div`
  //border: 1px solid red;
  color: ${p => p.theme.text};
  font-weight: 800;
  font-size: 14px;
  line-height: 21px;
  margin-left: 5px;
  width: 65%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    visibility: hidden;
  }
`;

export const RowTable = styled.div`
  //border: 1px solid red;
  display: flex;
  justify-content: stretch;
  margin-left: 5px;
  width: 50%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: column;
  }
`;

export const RowTablePrice = styled.div`
  //border: 1px solid orange;
  display: flex;
  justify-content: center;
  width: 50%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: column;
  }
`;

export const TitleRowTablePrice = styled.div`
  //border: 1px solid orange;
  color: ${p => p.theme.text};
  font-weight: 800;
  font-size: 14px;
  line-height: 21px;
  width: 50%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    visibility: hidden;
  }
`;

export const RowTableb = styled.div`
  //border: 1px solid cadetblue;
  display: flex;
  justify-content: end;
  width: 50%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: column;
  }
`;

export const TitleRowTableb = styled.div`
  //border: 1px solid cadetblue;
  color: ${p => p.theme.text};
  font-weight: 800;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  justify-content: end;
  width: 50%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    visibility: hidden;
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
