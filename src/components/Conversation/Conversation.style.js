import styled from 'styled-components';

export const ConversationContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 5px;
  margin: 10px 0;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

export const ProfileImgWrapper = styled.div`
  margin-right: 10px;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const InfoAndMsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
`;

export const MsgWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const MsgContent = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-right: 10px;
  white-space: pre-wrap;
`;

export const UserName = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin-right: 8px;
`;

export const SendDate = styled.h4`
  font-size: 12px;
  color: #8b8e95;
  margin-top: 2px;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  padding: 0 12px 8px 0;
`;

export const ReplyBtn = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 6px;
  cursor: pointer;
`;

export const DeleteBtn = styled.img`
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

export const MyBadge = styled.span`
  margin-left: 5px;
`;
