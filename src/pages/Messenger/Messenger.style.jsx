import styled, { css } from 'styled-components';

const borderRadiusTop = css`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const borderRadiusBottom = css`
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const borderLineTop = css`
  border-top: solid 1px #dbdbdb;
`;

const borderLineBottom = css`
  border-bottom: solid 1px #dbdbdb;
`;

const borderLineRL = css`
  border-right: solid 1px #dbdbdb;
  border-left: solid 1px #dbdbdb;
`;

const scrollbarStyle = css`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #dbdbdb;
  }
  ::-webkit-scrollbar-track {
    background-color: #f7f7f7;
  }
`;

export const MessengerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 800px;
  margin-top: 40px;
`;

export const ChatInfoBar = styled.div`
  ${borderRadiusTop}
  ${borderLineTop}
  ${borderLineBottom}
  ${borderLineRL}
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 10px 20px;
  background-color: white;
`;

export const TitleBox = styled.div`
  margin-left: 0;
`;

export const Title = styled.div`
  color: #fe505f;
  font-size: 16px;
  font-weight: 600;
`;

export const IconBox = styled.div`
  margin-right: 0;
`;

export const ChatBox = styled.ul`
  ${borderLineRL}
  ${scrollbarStyle}
  height: 85%;
  padding: 0 10px 0 20px;
  background-color: #f7f7f7;
  overflow-x: hidden;
  overflow-y: scroll;
  word-wrap: break-word;
`;

export const InputBox = styled.form`
  ${borderRadiusBottom}
  ${borderLineBottom}
  ${borderLineRL}
  display: flex;
  flex-direction: column;
  padding: 0 20px 10px 20px;
  background-color: #f7f7f7;
`;

// export const ChatList = styled.ul``;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputText = styled.textarea`
  width: 85%;
  padding: 14px 10px 0 10px;
  border: solid 1px #dbdbdb;
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  font-size: 16px;
  line-height: 25px;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #dbdbdb;
  }
  &:focus {
    outline: none;
  }
`;

export const SendBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  border: solid 1px #dbdbdb;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fe505f;
  &:hover {
    cursor: pointer;
  }
`;
