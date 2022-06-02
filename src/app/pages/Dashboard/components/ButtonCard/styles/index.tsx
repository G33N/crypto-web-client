import styled from 'styled-components';
import {
  StyleConstants,
  device,
} from '../../../../../../styles/StyleConstants';

export const InfoCard = styled.div`
  height: 7rem;
  width: 100%;
  padding: 1rem;
  color: white;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    height: max-content;
    width: 80%;
  }
`;

export const Card = styled.div`
  width: 128px;
  height: 72px;
  background-color: ${p => p.theme.background};
  border-radius: 1rem;
  margin-right: 42px;
  padding: 1rem 1rem 0.3rem 1rem;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    height: max-content;

    width: 80%;
  }
`;

export const LastCard = styled.div`
  width: 128px;
  height: 72px;
  background-color: ${p => p.theme.background};
  border-radius: 1rem;
  margin-right: 15px;
  padding: 1rem 1rem 0.3rem 1rem;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  text-align: center;
  margin-top: 8px;
  img {
    height: 22px;
    width: 22px;
    color: ${p => p.theme.background};
  }
`;

export const Title = styled.div`
  margin-top: 11px;
  margin-bottom: 17px;
  text-align: center;
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;
