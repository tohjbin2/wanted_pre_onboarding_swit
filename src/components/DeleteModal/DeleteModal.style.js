import styled from 'styled-components';

export const ModalContainer = styled.div``;

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 400px;
  max-width: 300px;
  background-color: white;
  position: relative;
  padding: 20px;
  border-radius: 0.25rem;
`;

export const CloseBtn = styled.img`
  position: absolute;
  right: 20px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  padding: 0 50px 20px 0;
`;

export const SubTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const MsgWrapepr = styled.div`
  font-size: 14px;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  width: 140px;
  overflow: hidden;
`;

export const BtnWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const CancelBtn = styled.div`
  text-align: center;
  height: 30px;
  padding: 0 20px;
  margin-left: 10px;
  font-size: 12px;
  line-height: 28px;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 20px;
  margin-left: 10px;
  border: 1px solid #e6e6e8;
  color: #8b8e95;

  &:hover {
    border: 1px solid darkgray;
  }
`;

export const DeleteBtn = styled.div`
  text-align: center;
  height: 30px;
  background: #a51200;
  border: 1px solid #a51200;
  color: #fff;
  font-size: 12px;
  line-height: 28px;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 20px;
  margin-left: 10px;
`;
