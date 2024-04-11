import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface LoginFormProps {
  onSubmit?(e: { email: string; password: string }): void;
}

export const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Title>로그인</Title>
      <FormStyled
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit?.({ email, password });
        }}
      >
        <InputContainer>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            required
          />
          <SubmitButton type="submit">회원가입</SubmitButton>
        </InputContainer>
      </FormStyled>
      <p className="info">
        계정이 없으신가요? <Link to="/join">가입하기</Link>
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 72px 24px;
  width: 100%;
  max-width: 600px;

  .info {
    padding: 30px 0;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
