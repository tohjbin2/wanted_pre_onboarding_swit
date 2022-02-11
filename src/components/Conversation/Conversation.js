import React from 'react';
import * as S from './Conversation.style';

function Conversation({ onModal, message }) {
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
              <S.DeleteBtn src="/images/delete.png" title="삭제하기" />
            </S.BtnWrapper>
          )}
        </S.MsgWrapper>
      </S.InfoAndMsgContainer>
    </S.ConversationContainer>
  );
}

export default Conversation;
