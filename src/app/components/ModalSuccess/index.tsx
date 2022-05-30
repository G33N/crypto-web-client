import React from 'react';
import IconCheck from '../../assets/icons/Check.svg';
import { ButtonLink } from '../ButtonLink';
import { ButtonTwo } from 'styles/StyleElements';
import { ButtonThree } from 'styles/StyleElements';
import {
  Overlay,
  ConteinerModal,
  Contenido,
  Img,
  Title,
  Description,
} from './styles';

export const ModalSuccess = ({
  openModal,
  closeModal,
  title,
  description,
  labelButton,
  pathTo,
  isVisibleButonClose,
  isVisibleButonNavigate,
  isVisibleButonSuport,
}) => {
  return (
    <>
      {openModal && (
        <Overlay>
          <ConteinerModal>
            <Contenido>
              <Img src={IconCheck} />
              <Title>{title}</Title>
              <Description>{description}</Description>
              {isVisibleButonClose && (
                <ButtonTwo onClick={() => closeModal(false)}>
                  {labelButton}
                </ButtonTwo>
              )}
              {isVisibleButonNavigate && (
                <ButtonLink path={pathTo} label={'Continuar'} />
              )}
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
