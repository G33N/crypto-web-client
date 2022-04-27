import * as React from 'react';
import styled from 'styled-components/macro';

export function CardInfo() {
  return (
    <Wrapper>
      <Title>Informacion de usuario</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur minus
        veniam error? Beatae repellendus, vero eveniet quod recusandae
        exercitationem provident totam enim. Nulla quos vero molestiae nisi.
        Dolorem, consequatur repudiandae?
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${p => p.theme.primary};
  font-weight: bold;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: normal;
`;
