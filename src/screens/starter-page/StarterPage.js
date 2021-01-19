import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

export default function StarterPage({ navigation }) {
    return(
        <View>
            <Text>Enterprise team collaboration.</Text>
            <Text>Bring together your files, your tools, projects and people, including a new mobile and desktop application</Text>
            <Button style={styles.button} title="Register" onPress={ () => navigation.navigate('Register')} />
              <Button title="Sign in" onPress={ () => navigation.navigate('Login')} />
        </View>
    );
}

const styles = StyleSheet.create({
    
    button: {
        backgroundColor: '#000',
    }
    

});