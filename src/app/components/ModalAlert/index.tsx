import React from 'react';
import { ButtonTwo } from 'styles/StyleElements';
import { ButtonThree } from 'styles/StyleElements';
import Alert from '../../assets/icons/alert.svg';
import {
  Overlay,
  ConteinerModal,
  Contenido,
  Img,
  Title,
  Description,
} from './styles';

export const ModalAlert = ({
  openModal,
  closeModal,
  titleAlert,
  descriptionAlert,
  labelButton,
  isVisibleButonSuport,
}) => {
  return (
    <>
      {openModal && (
        <Overlay>
          <ConteinerModal>
            <Contenido>
              <Img src={Alert} />
              <Title>{titleAlert}</Title>
              <Description>{descriptionAlert}</Description>
              <ButtonTwo onClick={() => closeModal(false)}>
                {labelButton}
              </ButtonTwo>

              {isVisibleButonSuport && (
                <ButtonThree type="submit">Contactar a soporte</ButtonThree>
              )}
            </Contenido>
          </ConteinerModal>
        </Overlay>
      )}
    </>
  );
};
