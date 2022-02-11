import React, { useState } from 'react';
import * as S from './Messenger.style';
import { RiSendPlane2Fill } from 'react-icons/ri';

function Messenger() {
  const [inputMessage, setInputMessage] = useState('');

  const inputValue = e => {
    setInputMessage(e.target.value);
  };

  const pressEnter = e => {
    if (e.key === 'Enter') {
      return handleSendBtn();
    }
  };

  const handleSendBtn = () => {
    if (!inputMessage || !inputMessage.trim())
      return alert('메시지를 입력하세요');
  };

  return (
    <S.MessengerSection>
      <S.ChatSection>
        <S.ChatInfoBar>
          <S.TitleBox>
            <S.Title>삼전십만가조</S.Title>
          </S.TitleBox>
          <S.IconBox />
        </S.ChatInfoBar>
        <S.ChatBox />
        <S.InputBox>
          <S.InputText
            name="inputText"
            type="text"
            placeholder="Enter message"
            required="required"
            onChange={inputValue}
            onKeyPress={pressEnter}
          />
          <S.SendBtn onClick={handleSendBtn}>
            <RiSendPlane2Fill size="30px" color="white" />
          </S.SendBtn>
        </S.InputBox>
      </S.ChatSection>
    </S.MessengerSection>
  );
}

export default Messenger;
