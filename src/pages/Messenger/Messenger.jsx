import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiSendPlane2Fill } from 'react-icons/ri';

import Conversation from '../../components/Conversation/Conversation';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { formatingTime } from '../../utils';
import * as S from './Messenger.style';

function Messenger() {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.login.userId);
  const userName = useSelector(state => state.login.userName);
  const profileImageSrc = useSelector(state => state.login.profileImageSrc);
  const chatList = useSelector(state => state.messenger);
  const isModalOpen = useSelector(state => state.modals.showModal);

  const date = formatingTime();

  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
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
  };

  const pressEnter = e => {
    if (e.key === 'Enter') {
      return handleSendBtn();
    }
  };

  const handleSendBtn = () => {
    if (!text || !text.trim()) {
      return alert('메시지를 입력하세요');
    } else {
      onSubmit();
    }
  };

  return (
    <S.MessengerSection>
      {isModalOpen && <DeleteModal />}
      <S.ChatSection>
        <S.ChatInfoBar>
          <S.TitleBox>
            <S.Title>삼전십만가조</S.Title>
          </S.TitleBox>
          <S.IconBox />
        </S.ChatInfoBar>
        <S.ChatBox />
        <S.InputBox onSubmit={onSubmit}>
          <S.ChatList>
            {chatList.map((content, idx) => {
              return <Conversation key={idx} message={content} />;
            })}
          </S.ChatList>
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
