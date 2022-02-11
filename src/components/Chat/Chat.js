import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';
// import * as S from './Conversation.style';

function Chat({ text, onDelBtnClick }) {
  return (
    <Content>
      {text} <DelButton onClick={onDelBtnClick}>DEL</DelButton>
    </Content>
  );
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelBtnClick: () => dispatch(actionCreators.deleteChat(ownProps.id)),
  };
};
const Content = styled.li`
  margin-bottom: 20px;
`;
const DelButton = styled.button`
  background: none;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 10px;
`;

export default connect(null, mapDispatchToProps)(Chat);
