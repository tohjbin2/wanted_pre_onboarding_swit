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
                key={idx}
                src={el}
                isActive={userData.profileImg === el}
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
