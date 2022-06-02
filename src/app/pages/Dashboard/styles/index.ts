import styled from 'styled-components/macro';
import { device } from '../../../../styles/StyleConstants';

export const Container = styled.div`
  background: ${p => p.theme.backgroundDashboard};

  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    display: flex;
    flex-direction: column;
  }
`;

export const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
  }
`;
export const SectionOne = styled.div`
  display: flex;
  //  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 80%;
  }
`;
export const ColumnOne1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

export const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
export const ColumnOne2 = styled.div`
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
