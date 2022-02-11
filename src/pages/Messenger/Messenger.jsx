import React, { useState } from 'react';
import * as S from './Messenger.style';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';

// import { connect } from 'react-redux';
// import { actionCreators } from '../../store';

// import Chat from '../../components/Chat/Chat';

function Messenger({ chatting, addChat }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId);
  const userName = useSelector(state => state.userName);
  const profileImg = useSelector(state => state.profileImg);

  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    dispatch({
      type: 'ADD_CHAT',
      userId: userId,
      userName: userName,
      profileImg: profileImg,
      text: text,
    });
    e.preventDefault();
    setText('');
  };

  const pressEnter = e => {
    if (e.key === 'Enter') {
      return handleSendBtn();
    }
  };

  const handleSendBtn = () => {
    if (!text || !text.trim()) return alert('메시지를 입력하세요');
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
            {/* {chatting.map(content => (
              <Chat {...content} key={content.id} />
            ))} */}
          </S.ChatList>
          <S.InputContainer>
            <S.InputText
              name="inputText"
              type="text"
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

// const mapStateProps = state => {
//   return { chatting: state };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     addChat: text => dispatch(actionCreators.addChat(text)),
//   };
// };
// export default connect(mapStateProps, mapDispatchToProps)(Messenger);
