import styled from 'styled-components';

export const ConversationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: ${({ onModal }) => (!onModal ? '0 10px' : '10px')};
  margin: 5px 0;
  background-color: ${({ onModal }) => onModal && '#f8f8f8'};
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
  align-items: center;
  justify-content: space-between;
`;

export const MsgContent = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-right: 10px;
  white-space: pre-wrap;

  text-overflow: ${({ onModal }) => onModal && 'ellipsis'};
  white-space: ${({ onModal }) => onModal && 'nowrap'};
  word-wrap: ${({ onModal }) => onModal && 'normal'};
  width: ${({ onModal }) => onModal && '140px'};
  overflow: ${({ onModal }) => onModal && 'hidden'};
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
  display: flex;
  padding-bottom: 6px;
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
