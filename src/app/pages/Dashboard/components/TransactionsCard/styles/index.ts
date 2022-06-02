import styled from 'styled-components';
import {
  StyleConstants,
  device,
} from '../../../../../../styles/StyleConstants';

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
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    position: absolute;
    width: 328px;
    height: 443px;
    left: 16px;
    top: 809px;
  }
`;

export const CardContent = styled.div`
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    margin: 0px;
    padding: 0px;
    width: max-content;
    justify-content: center;
    align-items: center;
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
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    margin-right: 3px;
  }
`;

export const TitleCard = styled.h5`
  margin-left: 30px;
  text-align: start;
  color: ${p => p.theme.text};
  cursor: pointer;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    margin-right: 3px;
  }
`;

export const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 120%;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    flex-direction: row;
    width: 100%;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  img {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    height: 1rem;
    width: 1rem;
  }
`;

export const TextContainer = styled.div`
  margin-left: 1rem;

  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 12px;
  }
`;

export const Title = styled.h4``;
export const SubTitle = styled.h5`
  font-weight: 400;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  margin-left: 1rem;
  /* display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center; */
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export const Price = styled.div``;
