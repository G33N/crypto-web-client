import styled from 'styled-components';
import {
  StyleConstants,
  StyleResponsive,
} from '../../../../../../styles/StyleConstants';
interface Props {
  ColorPrice?: string;
}

export const Card = styled.div`
  position: absolute;
  width: 660px;
  height: 520px;
  top: 472px;
  left: 295px;
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    //box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    position: absolute;
    //border: 1px solid blue;
    width: 328px;
    height: 355px;
    left: 56px;
    top: 430px;
  }
`;

export const BoxTitle = styled.div`
  //border: 1px solid blue;
  display: flex;
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
      height: 2rem;
      width: 2rem;
    }
  }
`;

export const TitleTransaction = styled.div`
  //border: 1px solid yellow;

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    color: grey;
  }
`;

export const Title = styled.div`
  color: ${p => p.theme.text};
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  //border: 1px solid grey;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const TitleCoin = styled.div`
  color: ${p => p.theme.text};
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  //border: 1px solid grey;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
  }
`;

export const WrapperBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //border: 1px solid;
  //width: 100%;
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
  align-items: center;
  width: 50%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    justify-content: end;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    width: 14px;
    height: 14px;
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
    justify-content: space-between;
  }
`;

export const BoxArrow = styled.i<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    p {
      color: ${props => props.ColorPrice};
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
    }
  }
`;

export const RowTableb = styled.div`
  //border: 1px solid cadetblue;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    //border: 1px solid cadetblue;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const ResponsiveBox = styled.div`
  //border: 1px solid cadetblue;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    //border: 1px solid cadetblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //border: 1px solid;

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

/****tabla***/

export const TableCoin = styled.table`
  width: 100%;
  font-size: 14px;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    //border: 1px solid green;
  }
`;
