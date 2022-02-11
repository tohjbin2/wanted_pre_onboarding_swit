import React, { useState } from 'react';
import * as S from './Messenger.style';
import { RiSendPlane2Fill } from 'react-icons/ri';

import { connect } from 'react-redux';
import { actionCreators } from '../../store';
import Chat from '../../components/Chat/Chat';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

function Messenger({ chatting, addChat }) {
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    addChat(text);
    e.preventDefault();
    setText('');
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
        <S.InputBox onSubmit={onSubmit}>
          <S.ChatList>
            {chatting.map(content => (
              <Chat {...content} key={content.id} />
            ))}
          </S.ChatList>
          <S.InputContainer>
            <S.InputText
              name="inputText"
              type="text"
              placeholder="Enter message"
              required="required"
              value={text}
              onChange={onChange}
            />
            <S.SendBtn>
              <RiSendPlane2Fill size="30px" color="white" />
            </S.SendBtn>
          </S.InputContainer>
        </S.InputBox>
      </S.ChatSection>
    </S.MessengerSection>
  );
}

const mapStateProps = state => {
  return { chatting: state };
};
const mapDispatchToProps = dispatch => {
  return {
    addChat: text => dispatch(actionCreators.addChat(text)),
  };
};
export default connect(mapStateProps, mapDispatchToProps)(Messenger);
