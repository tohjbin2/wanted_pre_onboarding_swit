import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './Conversation.style';

function Conversation({ onModal, message }) {
  const isModalOpen = useSelector(state => state.modalOpen);
  const dispatch = useDispatch();

  const handleDeleteBtn = () => {
    dispatch({ type: 'MODAL_OPEN' });
  };

  return (
    <S.ConversationContainer onModal={onModal}>
      <S.ProfileImgWrapper>
        <S.ProfileImg src={message.profileImageSrc} />
      </S.ProfileImgWrapper>
      <S.InfoAndMsgContainer>
        <S.InfoWrapper>
          <S.UserName>{message.userName} *</S.UserName>
          {!onModal && <S.SendDate>{message.sendDate}</S.SendDate>}
        </S.InfoWrapper>
        <S.MsgWrapper>
          <S.MsgContent onModal={onModal}>{message.message}</S.MsgContent>
          {!onModal && (
            <S.BtnWrapper>
              <S.ReplyBtn src="/images/reply.png" title="답장하기" />
              <S.DeleteBtn
                src="/images/delete.png"
                title="삭제하기"
                onClick={handleDeleteBtn}
              />
            </S.BtnWrapper>
          )}
        </S.MsgWrapper>
      </S.InfoAndMsgContainer>
    </S.ConversationContainer>
  );
}

export default Conversation;
