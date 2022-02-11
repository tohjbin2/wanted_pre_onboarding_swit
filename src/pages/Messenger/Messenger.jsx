import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiSendPlane2Fill } from 'react-icons/ri';

import Conversation from '../../components/Conversation/Conversation';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { formatingTime } from '../../utils';
import * as S from './Messenger.style';

const Messenger = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = formatingTime();
  const scrollRef = useRef();

  const userId = useSelector(state => state.login.userId);
  const userName = useSelector(state => state.login.userName);
  const profileImageSrc = useSelector(state => state.login.profileImageSrc);
  const chatList = useSelector(state => state.messenger);
  const isModalOpen = useSelector(state => state.modals.showModal);
  const replyData = useSelector(state => state.reply);

  const [content, setContent] = useState('');
  const [tempContentId, setTempContentId] = useState();

  const onChange = e => {
    replyData.onReply && dispatch({ type: 'REPLY_OFF' });
    setContent(e.target.value);
  };

  const handleTempContentId = id => {
    setTempContentId(id);
  };

  const onSubmit = () => {
    if (userId !== undefined) {
      dispatch({
        type: 'ADD_CHAT',
        userId: userId,
        userName: userName,
        profileImageSrc: profileImageSrc,
        message: content,
        sendDate: date,
      });
      setContent('');
    } else {
      alert('로그인이 필요합니다');
      navigate('/');
    }
  };

  const pressEnter = e => {
    if (e.key === 'Enter') {
      return handleSendBtn();
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const handleSendBtn = () => {
    !content || !content.trim() ? alert('메시지를 입력하세요') : onSubmit();
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  return (
    <S.MessengerSection>
      {isModalOpen && <DeleteModal contentId={tempContentId} />}
      <S.ChatSection>
        <S.ChatInfoBar>
          <S.TitleBox>
            <S.Title>삼전십만가조</S.Title>
          </S.TitleBox>
          <S.IconBox />
        </S.ChatInfoBar>
        <S.ChatBox onSubmit={onSubmit} ref={scrollRef}>
          {chatList.map((chatItem, idx) => {
            return (
              <Conversation
                key={idx}
                contentId={idx}
                chatItem={chatItem}
                handleTempContentId={handleTempContentId}
              />
            );
          })}
        </S.ChatBox>
        <S.InputBox>
          <S.InputContainer>
            <S.InputText
              name="inputText"
              type="textarea"
              placeholder="Enter message"
              required="required"
              value={
                replyData.onReply
                  ? `${replyData.userName}\n${replyData.content}\n(회신)\n${content}`
                  : content
              }
              onChange={onChange}
              onKeyPress={pressEnter}
            />
            <S.SendBtn onClick={handleSendBtn}>
              <RiSendPlane2Fill size="30px" color="white" />
            </S.SendBtn>
          </S.InputContainer>
        </S.InputBox>
      </S.ChatSection>
    </S.MessengerSection>
  );
};

export default Messenger;
