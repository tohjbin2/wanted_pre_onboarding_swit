import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './Conversation.style';

function Conversation({ message, handleTempMessage }) {
  const isModalOpen = useSelector(state => state.modalOpen);
  const currentUserId = useSelector(state => state.login.userId);
  const dispatch = useDispatch();

  const handleDeleteBtn = () => {
    dispatch({ type: 'MODAL_OPEN' });
    handleTempMessage(message);
  };

  return (
    <S.ConversationContainer onModal={isModalOpen}>
      <S.ProfileImgWrapper>
        <S.ProfileImg src={message.profileImageSrc} />
      </S.ProfileImgWrapper>
      <S.InfoAndMsgContainer>
        <S.InfoWrapper>
          <S.UserName>
            {message.userName}
            {message.userId === currentUserId ? <S.MyBadge>*</S.MyBadge> : ''}
          </S.UserName>
          {!isModalOpen && <S.SendDate>{message.sendDate}</S.SendDate>}
        </S.InfoWrapper>
        <S.MsgWrapper>
          <S.MsgContent onModal={isModalOpen}>{message.message}</S.MsgContent>
          {!isModalOpen && (
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
