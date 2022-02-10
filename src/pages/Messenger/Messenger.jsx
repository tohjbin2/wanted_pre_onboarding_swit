import React from 'react';
import * as S from './Messenger.style';
import { RiSendPlane2Fill } from 'react-icons/ri';

function Messenger() {
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
          />
          <S.SendBtn>
            <RiSendPlane2Fill size="30px" color="white" />
          </S.SendBtn>
        </S.InputBox>
      </S.ChatSection>
    </S.MessengerSection>
  );
}

export default Messenger;
