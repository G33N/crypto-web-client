import { i18n } from '../i18n';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import { StyleConstants } from '../../../../../styles/StyleConstants';
import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../../assets/avatarImage.jpg';
import Bell from '../../../../assets/icons/Bell.svg';
import { Container } from 'styles/StyleElements';

function Navbar(props) {
  const { t } = i18n;
  const navigate = useNavigate();

  const useAuth = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const goToSettings = () => {
    navigate('/settings');
  };

  return (
    <NavbarContainer>
      <Text>
        {t('navbar__title')}
        <span> {props.userName} </span>
      </Text>
      <ContainerButtonNavBar>
        {/* <Card>
          <Avatar>
            <img src={Bell} alt="" />
          </Avatar>
        </Card> */}

        <AvatarButtonClose onClick={goToSettings}>
          <img src={AvatarImage} alt="" />
        </AvatarButtonClose>
      </ContainerButtonNavBar>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const ContainerButtonNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AvatarButtonClose = styled.button`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
  border-radius: 4rem;
`;

const Card = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${p => p.theme.background};
  border-radius: 1rem;
  margin-right: 42px;
  padding: 1rem 1rem 0.3rem 1rem;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
`;

const Avatar = styled.div`
  img {
    height: 1.5rem;
    width: 1.5rem;
    color: ${p => p.theme.background};
  }
`;

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

export default Navbar;
