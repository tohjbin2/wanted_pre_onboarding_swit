import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 800px;
  border: 1px solid gray;
`;

export const Logo = styled.img`
  height: 100px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const InputWrap = styled.div``;

export const InputItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 240px;
  border: 2px solid #dbdbdb;
  border-radius: 3px;
  padding: 8px 10px;
  margin-left: 20px;
  font-size: 15px;

  &:focus {
    border: 2px solid #fe505f;
  }
`;

export const IdInput = styled(Input)`
  margin-left: 56px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 400px;
  margin: 10px 0px 40px 0px;
`;

export const ProfileHeader = styled.h2`
  margin-top: 20px;
  color: gray;
`;

export const ProfileItem = styled.img`
  width: 70px;
  height: 70px;
  margin: 7px;
  border-radius: 5px;
  box-shadow: ${props =>
    props.isActive ? 'none' : '0px 2px 2px rgba(0, 0, 0, 0.3)'};
  cursor: pointer;
`;

export const EnterBtn = styled.button`
  width: 320px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #fe505f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
