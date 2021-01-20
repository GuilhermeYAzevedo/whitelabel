import React from 'react';
import { useState } from 'react';

import { 
    Container, 
    Body,
    Title, 
    SubTitle,    
    ButtonView,
    SignIn    
} from './LoginStyle';

export default function Login() {
    return(
        <Container>
            <Body>
                <Title>Let's sign you in.</Title>
                <SubTitle>Welcome back.</SubTitle>                
                <SubTitle>You've been missed!</SubTitle>
            
                
            </Body>

            <ButtonView>
                <SignIn title='SignIn'></SignIn>                
            </ButtonView>
        </Container>
    );
}