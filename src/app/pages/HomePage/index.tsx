import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { ModalAlert } from '../../components/ModalAlert';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Conteiner>
        <Text> HOME PAGE</Text>
        <Text>- Se ve sin estar logeado -</Text>
        <button onClick={() => setIsOpen(!isOpen)}>ver errores test</button>
        <ModalAlert openModal={isOpen} closeModal={setIsOpen} />
      </Conteiner>
    </>
  );
}
const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  background: papayawhip;
`;
const Text = styled.p`
  font-size: 18px;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;
