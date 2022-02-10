import React, { useState } from 'react';

import { PROFILE_IMAGE } from '../../constants';
import * as S from './Login.style';

const Login = () => {
  const [userData, setUserData] = useState({
    userId: '',
    userName: '',
    profileImg: '',
  });

  const { userId, userName, profileImg } = userData;

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const pickProfileImg = item => {
    setUserData({ ...userData, profileImg: item });
  };

  const submitValid =
    userId.length > 0 && userName.length > 0 && profileImg.length > 0;

  const submitUserData = () => {
    submitValid ? alert('가입완료') : alert('가입 형식을 확인하세요');
  };

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
              placeholder="NAME"
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
                isActive={userData.profileImg === el}
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
