import React from 'react';


import { 
    Container, 
    Body,
    Title, 
    SubTitle,
    ButtonView,
    Register,
    SignIn
} from './Style';

export default function StarterPage({ navigation }) {
    return(
        <Container>
            <Body>
                <Title>Enterprise team collaboration.</Title>
                <SubTitle>Bring together your files, your tools, projects and people, including a new mobile and desktop application.</SubTitle>                
            </Body>

            <ButtonView>
                <Register title='Register' onPress={ () => navigation.navigate('Register')}></Register>
                <SignIn title='SignIn' onPress={ () => navigation.navigate('Login')}></SignIn>                
            </ButtonView>
        </Container>
    );
}
