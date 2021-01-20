import styled  from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;    
    background-color: ${props => props.theme.primary};
`;

export const Body = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primary};
`;

export const Title = styled.Text`
    font-size: 30px;
    color:  ${props => props.theme.secondary};
    text-align: center;
    font-weight: 700;
    padding: 0 90px 0 90px;
`;

export const SubTitle = styled.Text`
    margin-top: 25px;
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    color: ${props => props.theme.secondary};
    padding: 0 70px 0 70px;
`;

export const ButtonView = styled.View`
    margin-bottom: 40px;
    flex-direction: row;
    justify-content: space-around;
    border: 1px;
    border-radius: 20px;
    width: 300px; 
    height: 66px;
    padding-top: 10px;
    position: relative;
    background: #44414C;
`;

export const Register = styled.Button`
    background: #ffffff;
    color: #ffffff;
`;

export const SignIn = styled.Button`
    background: ${props => props.theme.secondary};

`;