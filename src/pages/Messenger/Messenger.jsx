import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiSendPlane2Fill } from 'react-icons/ri';

import Conversation from '../../components/Conversation/Conversation';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { formatingTime } from '../../utils';
import * as S from './Messenger.style';

const Messenger = () => {
  const dispatch = useDispatch(); // MEMO: redux관련
  const navigate = useNavigate(); // MEMO: useNavigate관련
  const date = formatingTime();
  const scrollRef = useRef(); // MEMO: useRef관련

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
  // MEMO: 키 이벤트를 걸어 메시지 입력창에서 엔터키를 누르면 -> handleSendBtn()이 반환된다(=메시지가 전송된다).

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  // MEMO: useRef를 이용해 채팅창에 입력하는 순간 마우스 스크롤이 가장 아래로 내려가도록(가장 최신 상태의 메시지가 있는 위치) 만들었다.

  const handleSendBtn = () => {
    !content || !content.trim() ? alert('메시지를 입력하세요') : onSubmit();
  };
  // MEMO: content가 없거나(=아무 입력을 하지 않은 상태) ||(='or') 공백만 있는 경우( trim을 이용해 글자 없이 띄어쓰기만 써서 공백만 있는 상태를 인지하게끔 만듦)가 -> true라면 경고창 반환, false라면 onSubmit()실행

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);
  // MEMO: useEffect의 실행 조건을 chatList가 실행될 때(=채팅창의 input값을 의미함)로 만들었다. 이렇게 조건을 건 이유는 useRef를 실행시키기 위해서

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
