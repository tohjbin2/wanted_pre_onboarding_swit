import React from 'react';
import * as S from './Conversation.style';

const CONVERSATION_DATA = {
  id: 1,
  userName: '프론트엔드',
  userId: 'frontend123',
  profileImageSrc: '/images/profile-icon-1.jpg',
  sendDate: '2022-01-01 01:00:00',
  message: '프론트엔드는 너무 재밌어 !',
};

function Conversation({ onModal }) {
  return (
    <S.ConversationContainer onModal={onModal}>
      <S.ProfileImgWrapper>
        <S.ProfileImg src={CONVERSATION_DATA.profileImageSrc} />
      </S.ProfileImgWrapper>
      <S.InfoAndMsgContainer>
        <S.InfoWrapper>
          <S.UserName>{CONVERSATION_DATA.userName} *</S.UserName>
          {!onModal && <S.SendDate>{CONVERSATION_DATA.sendDate}</S.SendDate>}
        </S.InfoWrapper>
        <S.MsgWrapper>
          <S.MsgContent onModal={onModal}>
            {CONVERSATION_DATA.message}
          </S.MsgContent>
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
