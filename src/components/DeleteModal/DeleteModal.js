import React from 'react';
import * as S from './DeleteModal.style';
import Conversation from '../Conversation/Conversation';

function DeleteModal() {
  // FIXME
  // BackgroundModal 컴포넌트에 onClick 이벤트 발생할 시 modal 닫는 함수 넣어줘야됨.

  return (
    <S.ModalContainer>
      <S.BackgroundModal>
        <S.Modal onClick={el => el.stopPropagation()}>
          <S.CloseBtn src="/images/close.png" />
          <S.Title>Delete message</S.Title>
          <S.SubTitle>
            Will you delete this message? <br />
            This cannot be undone.
          </S.SubTitle>
          <Conversation onModal={true} />
          <S.BtnWrapper>
            <S.CancelBtn>Cancel</S.CancelBtn>
            <S.DeleteBtn>Delete</S.DeleteBtn>
          </S.BtnWrapper>
        </S.Modal>
      </S.BackgroundModal>
    </S.ModalContainer>
  );
}

export default DeleteModal;
