import React from 'react';

import {
  Body,
  ButtonView,
  Container,
  SignIn,
  SubTitle,
  Title,
} from './LoginStyle';

export default function Login() {
  return (
    <Container>
      <Body>
        <Title>Let's sign you in.</Title>
        <SubTitle>Welcome back.</SubTitle>
        <SubTitle>You've been missed!</SubTitle>
      </Body>

      <ButtonView>
        <SignIn title="SignIn" />
      </ButtonView>
    </Container>
  );
}
