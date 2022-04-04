import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PROFILE_IMAGE } from '../../constants';
import * as S from './Login.style';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // MEMO-REDUX: 입력된 정보는 useDispatch를 통해 store로 전달된다.
  const [userData, setUserData] = useState({
    userId: '',
    userName: '',
    profileImageSrc: '',
  });
  /* MEMO: 위의 것을 풀어쓰면 다음과 같다. 
  const [userId, setUserId]= useState('');
  const [userName, setUserName] = useState('');
  const [profileImageSrc, setProfileImageSrc] = useState('');
  */

  const { userId, userName, profileImageSrc } = userData;
  /* MEMO: 위쪽의 state들을 묶은 것과 함께 쓰기 위해 만든 것. 
  비구조화 할당을 통해 값을 추출한 것.
  userData에 userId, userName, profileImageSrc를 한꺼번에 묶어 소속시킨 것이다. */

  const handleUserInput = e => {
    const { name, value } = e.target; // MEMO: e.target에서 name과 value를 추출해냄
    setUserData({
      ...userData, // MEMO: 기존의 userData객체를 복사한 후
      [name]: value, // MEMO: name키를 가진 값을 value로 설정
    });
  };

  const pickProfileImg = item => {
    setUserData({
      ...userData, // MEMO: 기존의 userData객체를 복사한 후
      profileImageSrc: item, // MEMO: profileImageSrc에 해당하는 값을 item이라는 값으로 가져옴
    });
  };

  const submitValid =
    userId.length > 0 && userName.length > 0 && profileImageSrc.length > 0;

  const submitUserData = () => {
    dispatch({
      type: 'USER_LOGIN',
      userId: userId,
      userName: userName,
      profileImageSrc: profileImageSrc,
    });
    submitValid ? alert('환영합니다.') : alert('가입 형식을 확인하세요');
    navigate('/messenger');
  }; // MEMO-REDUX: useDispatch를 통해 action 생성함수를 정의했다.

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo />
        <S.InputWrap>
          <S.InputItem>
            ID
            <S.IdInput
              type="text"
              name="userId"
              placeholder="ID"
              onChange={handleUserInput}
            />
          </S.InputItem>
          <S.InputItem>
            NAME
            <S.Input
              type="text"
              name="userName"
              placeholder="표시될 이름을 적어주세요."
              onChange={handleUserInput}
            />
          </S.InputItem>
        </S.InputWrap>
        <S.ProfileHeader>프로필 이미지를 선택해주세요.</S.ProfileHeader>
        <S.ProfileWrap>
          {PROFILE_IMAGE.map((el, idx) => {
            return (
              <S.ProfileItem
                key={idx}
                src={el}
                isActive={userData.profileImageSrc === el}
                onClick={() => pickProfileImg(el)}
              />
            );
          })}
        </S.ProfileWrap>
        <S.EnterBtn
          isActive={submitValid}
          disabled={!submitValid}
          onClick={submitUserData}
        >
          LOGIN
        </S.EnterBtn>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
