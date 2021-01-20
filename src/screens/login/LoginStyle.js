import styled  from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;    
    background-color: ${props => props.theme.primary};
`;

export const Body = styled.View`
    flex: 1;
    justify-content: center;
    /* flex-direction: column;   */
    margin:30px 0 0 30px;
    background-color: ${props => props.theme.primary};
`;

export const Title = styled.Text`
    font-size: 32px;
    color:  ${props => props.theme.secondary};
    font-weight: 700;    
`;

export const SubTitle = styled.Text`
    padding-top: 10px;
    font-size: 28px;
    font-weight: 400;
    color: ${props => props.theme.secondary};
`;

export const ButtonView = styled.View`    
    flex-direction: row;
    margin-bottom: 40px;
    flex-direction: row;
    justify-content: space-around;
    border: 1px;
    border-radius: 20px;
    width: 300px; 
    height: 66px;
    padding-top: 10px;
    position: relative;
    background: ${props => props.theme.secondary};
`;

export const SignIn = styled.Button`
    color: #000000;
`;