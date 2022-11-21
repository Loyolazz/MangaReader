import React from 'react';
import { Image, Switch, TouchableOpacity, View } from 'react-native';
import { Container, TextHeader, TextHeaderSub } from './styles'
import imagePath from './imagePath';
import { ThemeContext, ThemeType } from '../../themes/theme';

export default function Login() {

    const {toggleTheme, theme} = React.useContext(ThemeContext)
    const isDarkMode = theme === ThemeType.dark
    return (
        <Container>
            <Switch value={isDarkMode} onValueChange={toggleTheme}/>
            <TextHeader>Bem Vindo</TextHeader>
            <TextHeaderSub>Faça login para começar</TextHeaderSub>
            <View style={{alignItems: 'center', padding: 165}}>
                <TouchableOpacity>
                    <Image source={imagePath.google} style={{height: 43, width: 280}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={imagePath.meta} style={{height: 43, width: 280, top: 10}}/>
                </TouchableOpacity>
            </View>
        </Container>
    )
}