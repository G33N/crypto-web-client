import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../assets/avatarImage2.jpg';

function Navbar(props) {
  return (
    <NavbarContainer>
      <Text>
        Good morning,
        <span> {props.userName} </span>
      </Text>
      <Avatar>
        <img src={AvatarImage} alt="" />
      </Avatar>
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
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
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
