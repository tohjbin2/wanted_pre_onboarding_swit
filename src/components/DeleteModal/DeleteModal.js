import React from 'react';
import { useDispatch } from 'react-redux';

import * as S from './DeleteModal.style';

function DeleteModal({ content }) {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch({ type: 'MODAL_CLOSE' });
  };

  const handleDeleteContent = () => {
    dispatch({ type: 'DELETE_CHAT', message: content.message });
    handleCloseModal();
  };

  return (
    <S.ModalContainer>
      <S.BackgroundModal onClick={handleCloseModal}>
        <S.Modal onClick={el => el.stopPropagation()}>
          <S.CloseBtn src="/images/close.png" onClick={handleCloseModal} />
          <S.Title>Delete message</S.Title>
          <S.SubTitle>
            Will you delete this message? <br />
            This cannot be undone.
            {content.message}
          </S.SubTitle>
          {/* <Conversation onModal={true} /> */}
          <S.BtnWrapper>
            <S.CancelBtn onClick={handleCloseModal}>Cancel</S.CancelBtn>
            <S.DeleteBtn onClick={handleDeleteContent}>Delete</S.DeleteBtn>
          </S.BtnWrapper>
        </S.Modal>
      </S.BackgroundModal>
    </S.ModalContainer>
  );
}

export default DeleteModal;
