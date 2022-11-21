import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import StackMain from "./stacks/stackMain";

export default function () {
    return (
        <NavigationContainer>
            <StackMain />
        </NavigationContainer>
    )
}
