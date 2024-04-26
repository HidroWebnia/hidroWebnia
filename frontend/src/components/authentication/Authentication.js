import React from "react"
import styled from "styled-components"
import Userfront, { SignupForm, LoginForm, LogoutButton } from "@userfront/toolkit/react"

Userfront.init("7n8drz6n")

const CenteredContainer = styled.div`
  padding-top: 130px;
`;

const ButtonSize = styled.div`
  font-size: 10px;
`;

export function Signup() {
  return (
    <CenteredContainer>
      <SignupForm />
    </CenteredContainer>
  )
}

export function Login() {
  return (
    <CenteredContainer>
      <LoginForm />
    </CenteredContainer>
  )
}

export function Logout() {
  return (
    <ButtonSize>
      <LogoutButton />
    </ButtonSize>
  )
} 
