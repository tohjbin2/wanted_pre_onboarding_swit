import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './Conversation.style';

const Conversation = ({ contentId, chatItem, handleTempContentId }) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.login.userId);

  const handleDeleteBtn = () => {
    dispatch({ type: 'MODAL_OPEN' });
    handleTempContentId(contentId);
  };

  const handleReplyBtn = () => {
    dispatch({
      type: 'REPLY',
      id: chatItem.userId,
      content: chatItem.message,
      userName: chatItem.userName,
    });
  };

  return (
    <S.ConversationContainer>
      <S.ProfileImgWrapper>
        <S.ProfileImg src={chatItem.profileImageSrc} />
      </S.ProfileImgWrapper>
      <S.InfoAndMsgContainer>
        <S.InfoWrapper>
          <S.UserName>
            {chatItem.userName}
            {chatItem.userId === currentUserId ? <S.MyBadge>*</S.MyBadge> : ''}
          </S.UserName>
          <S.SendDate>{chatItem.sendDate}</S.SendDate>
        </S.InfoWrapper>
        <S.MsgWrapper>
          <S.MsgContent>{chatItem.message}</S.MsgContent>
          <S.BtnWrapper>
            <S.ReplyBtn
              src="/images/reply.png"
              title="답장하기"
              onClick={handleReplyBtn}
            />
            {chatItem.userId === currentUserId && (
              <S.DeleteBtn
                src="/images/delete.png"
                title="삭제하기"
                onClick={handleDeleteBtn}
              />
            )}
          </S.BtnWrapper>
        </S.MsgWrapper>
      </S.InfoAndMsgContainer>
    </S.ConversationContainer>
  );
};

export default Conversation;
