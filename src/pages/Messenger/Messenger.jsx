import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiSendPlane2Fill } from 'react-icons/ri';

import Conversation from '../../components/Conversation/Conversation';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { formatingTime } from '../../utils';
import { selectReply } from '../../redux/reducers/reply';
import * as S from './Messenger.style';

function Messenger() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector(state => state.login.userId);
  const userName = useSelector(state => state.login.userName);
  const profileImageSrc = useSelector(state => state.login.profileImageSrc);
  const chatList = useSelector(state => state.messenger);
  const isModalOpen = useSelector(state => state.modals.showModal);
  const date = formatingTime();
  const [text, setText] = useState('');
  const [tempMessage, setTempMessage] = useState();

  const onChange = e => {
    setText(e.target.value);
  };

  const handleTempMessage = item => {
    setTempMessage(item);
  };

  const onSubmit = e => {
    if (userId !== undefined) {
      dispatch({
        type: 'ADD_CHAT',
        userId: userId,
        userName: userName,
        profileImageSrc: profileImageSrc,
        message: text,
        sendDate: date,
      });
      // e.preventDefault();
      setText('');
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

  const scrollRef = useRef();

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const handleSendBtn = () => {
    !text || !text.trim() ? alert('메시지를 입력하세요') : onSubmit();
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  return (
    <S.MessengerSection>
      {isModalOpen && <DeleteModal content={tempMessage} />}
      <S.ChatSection>
        <S.ChatInfoBar>
          <S.TitleBox>
            <S.Title>삼전십만가조</S.Title>
          </S.TitleBox>
          <S.IconBox />
        </S.ChatInfoBar>
        <S.ChatBox onSubmit={onSubmit} ref={scrollRef}>
          {chatList.map((content, idx) => {
            return (
              <Conversation
                key={idx}
                message={content}
                handleTempMessage={handleTempMessage}
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
              value={text}
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
}

export default Messenger;
