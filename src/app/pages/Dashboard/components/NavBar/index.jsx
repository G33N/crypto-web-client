import { i18n } from '../i18n';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  ImgConteiner,
  SLink,
  NavbarContainer,
  Text,
  ContainerButtonNavBar,
  AvatarButtonClose,
  Avatar,
  Card,
} from './styles';
import AvatarImage from '../../assets/avatarImage.jpg';
import Bell from '../../../../assets/icons/Bell.svg';
import Logo from '../../../../assets/icons/logo.svg';

function Navbar(props) {
  const { t } = i18n;
  const navigate = useNavigate();
  const notification = false;

  const goToSettings = () => {
    navigate('/settings');
  };

  return (
    <>
      <ImgConteiner hidden={false}>
        <SLink to="/home">
          <img src={Logo} alt="" />
        </SLink>
      </ImgConteiner>
      <NavbarContainer>
        <Text>
          {t('navbar__title')}
          {props.userName}
        </Text>
        <ContainerButtonNavBar>
          {notification && (
            <Card>
              <Avatar>
                <img src={Bell} alt="" />
              </Avatar>
            </Card>
          )}
          <AvatarButtonClose onClick={goToSettings}>
            <img src={AvatarImage} alt="" />
          </AvatarButtonClose>
        </ContainerButtonNavBar>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
