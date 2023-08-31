import { styled } from 'styled-components';

export const WrapperDiv = styled.div`
  max-width: 500px;
  margin: 180px auto;
  img {
    display: block;
    width: 250px;
    margin: 0 auto 70px auto;
  }
`;

export const LoginContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .login-memberType-box {
    display: flex;
  }
`;

export const LoginForm = styled.form`
  width: 550px;
  padding: 30px;
  padding-bottom: 0;
  border: 1px solid #c4c4c4;
  border-top: 0;

  input:not(:last-of-type) {
    margin-bottom: 40px;
  }
  .login-btn {
    margin: 36px 0;
    background-color: var(--main-color);
    color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    border-radius: 5px;
    padding: 19px 215px;
  }
`;
export const JoinGroupDiv = styled.div`
  color: #333333;
  margin-top: 30px;
  a:first-child::after {
    content: '';
    border-right: 1px solid #333333;
    margin: 0 14px;
  }
`;