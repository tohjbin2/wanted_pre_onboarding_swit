import React from 'react';
import * as S from './DeleteModal.style';
import Conversation from '../Conversation/Conversation';
import { useDispatch, useSelector } from 'react-redux';
// import { actionCreators } from '../../modalStore';

function DeleteModal() {
  const isModalOpen = useSelector(state => state.modalOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch({ type: 'MODAL_CLOSE' });
  };

  // FIXME
  // 삭제하기 기능이 일어나야 함.

  return (
    <S.ModalContainer>
      <S.BackgroundModal onClick={handleCloseModal}>
        <S.Modal onClick={el => el.stopPropagation()}>
          <S.CloseBtn src="/images/close.png" onClick={handleCloseModal} />
          <S.Title>Delete message</S.Title>
          <S.SubTitle>
            Will you delete this message? <br />
            This cannot be undone.
          </S.SubTitle>
          {/* <Conversation onModal={true} /> */}
          <S.BtnWrapper>
            <S.CancelBtn onClick={handleCloseModal}>Cancel</S.CancelBtn>
            <S.DeleteBtn>Delete</S.DeleteBtn>
          </S.BtnWrapper>
        </S.Modal>
      </S.BackgroundModal>
    </S.ModalContainer>
  );
}

export default DeleteModal;
