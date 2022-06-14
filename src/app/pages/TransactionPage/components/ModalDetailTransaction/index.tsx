import React from 'react';
import { ButtonTwo } from 'styles/StyleElements';
import { ButtonThree } from 'styles/StyleElements';
import Icon3 from '../../../../assets/icons/Deposit.svg';
import {
  Overlay,
  ConteinerModal,
  Contenido,
  Img,
  Title,
  Description,
} from './styles';

export const ModalDetailTransaction = ({
  openModal,
  closeModal,
  titleDetailTransaction,
  descriptionDetailTransaction,
  labelButton,
  isVisibleButonSuport,
}) => {
  return (
    <>
      {openModal && (
        <Overlay>
          <ConteinerModal>
            <Contenido>
              <Img src={Icon3} />
              <Title>{titleDetailTransaction}</Title>
              <Description>{descriptionDetailTransaction}</Description>
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
