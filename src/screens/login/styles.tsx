import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
align-items: center;
background-color: ${props => props.theme.colors.background};
`
export const HeaderContainer = styled.View`
width: 280px;
height: 164px;
left: 47px;
top: 224px;
`
export const TextHeader = styled.Text`
color: ${props => props.theme.fontColor.fontColor};;
height: 41px;
left: 0px;
top: 100px;
font-weight: 500;
font-size: 36px;
line-height: 41px;
`
export const TextHeaderSub = styled.Text`
color: ${props => props.theme.fontColor.fontColorTHSub};
top: 110px;
font-weight: 400;
font-size: 14px;
line-height: 18px;
`