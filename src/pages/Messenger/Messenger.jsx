import React, { useState } from 'react';
import * as S from './Messenger.style';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { formatingTime } from '../../utils';
import Conversation from '../../components/Conversation/Conversation';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

function Messenger() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userInfo.userId);
  const userName = useSelector(state => state.userInfo.userName);
  const profileImageSrc = useSelector(state => state.userInfo.profileImageSrc);
  const chatList = useSelector(state => state.chatList);
  const isModalOpen = useSelector(state => state.modalOpen);
  const date = formatingTime();

  // console.log(userId);
  // console.log(userName);
  // console.log(profileImageSrc);

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
