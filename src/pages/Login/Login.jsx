import React, { useState } from 'react';

import { PROFILE_IMAGE } from '../../constants';
import * as S from './Login.style';

const Login = () => {
  const [userData, setUserData] = useState({
    userId: '',
    userName: '',
    profileImg: '',
  });

  const pickProfileImg = item => {
    setUserData({ ...userData, profileImg: item });
  };

  const isActive = userData.profileImg ? true : false;

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo src="/images/swit_logo.png" />
        <S.InputWrap>
          <S.InputItem>
            ID <S.IdInput type="text" placeholder="ID" />
          </S.InputItem>
          <S.InputItem>
            NAME <S.Input type="text" placeholder="NAME" />
          </S.InputItem>
        </S.InputWrap>
        <S.ProfileHeader>프로필 이미지를 선택해주세요.</S.ProfileHeader>
        <S.ProfileWrap>
          {PROFILE_IMAGE.map((el, idx) => {
            return (
              <S.ProfileItem
                src={el}
                key={idx}
                isActive={isActive}
                onClick={() => pickProfileImg(el)}
              />
            );
          })}
        </S.ProfileWrap>

        <S.EnterBtn>LOGIN</S.EnterBtn>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
